import { Fragment } from "react";
import { transliterate, getRequiredForm } from "../gobbledygook/use-language";
import { PartOfSpeech } from "./InteractiveTranscription";
import ConLangVowelChart from "./ConLangVowelChart";
import ConLangConsonantChart from "./ConLangConsonantChart";
import React from "react";
import {
  FormParameters,
  Language,
  Morpheme,
  tPosCode,
  tRuleName,
} from "../gobbledygook/interfaces";
import { posCodesLabels } from "../gobbledygook/constants/pos-codes";

export default function ConLangDescription({ lang }: { lang: Language }) {
  return (
    <Fragment>
      <p>
        The {transliterate(lang, lang.name)} language, pronounced /{lang.name}/,
        is {(lang.morphologyType === "isolating" && "an") || "a"}{" "}
        {lang.morphologyType} language.
      </p>

      <ConLangVowelChart lang={lang} />
      <ConLangConsonantChart lang={lang} />

      {(lang.declension.rules.length === 1 && (
        <p>Nouns and adjectives are invariable</p>
      )) || (
        <Fragment>
          <p>
            Nouns and adjectives are declined by{" "}
            {lang.declension.rules.slice(1).join(", ")}
          </p>
          <RuleDescription lang={lang} rule="declension" />
        </Fragment>
      )}
    </Fragment>
  );
}
function RuleDescription({
  lang,
  rule,
}: {
  lang: Language;
  rule: "declension";
}) {
  const rules = lang[rule].rules;
  const tenses =
    (lang.conjugation.tenseSystem && [
      ...new Set(Object.values(lang.conjugation.tenseSystem)),
    ]) ||
    null;
  const ruleOptions: Record<string, Array<string>> = {
    type: ["noun", "adjective"],
    number: ["singular", "plural"],
    person: ["firstPerson", "secondPerson", "thirdPerson"],
  };

  if (lang.genders) {
    ruleOptions.gender = lang.genders;
  }
  if (tenses) {
    ruleOptions.tense = tenses;
  }
  if (lang.declension.declensionGroups) {
    ruleOptions.declensionGroup = lang.declension.declensionGroups;
  }
  if (lang.grammaticalCases) {
    ruleOptions.grammaticalCase = lang.grammaticalCases;
  }

  const currentRuleOptions = ruleOptions[rules[0]];
  if (rules.length !== 3 || !currentRuleOptions) {
    return null;
  }

  return (
    <div>
      {currentRuleOptions.map((option) => {
        return (
          <div key={option}>
            <h4>{option}</h4>
            <FormTable
              lang={lang}
              ruleOptions={ruleOptions}
              rules={rules.slice(1)}
              rule={rule}
              formParameters={{
                [rules[0]]: option,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
function FormTable({
  lang,
  rules,
  rule,
  ruleOptions,
  formParameters,
}: {
  lang: Language;
  rules: Array<string>;
  rule: tRuleName;
  ruleOptions: Record<string, Array<string>>;
  formParameters: FormParameters;
}) {
  if (!ruleOptions[rules[1]]) {
    return null;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>{rule}</th>
          {ruleOptions[rules[1]].map((option) => {
            return <th key={option}>{option}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {ruleOptions[rules[0]].map((option0) => {
          return (
            <tr key={option0}>
              <td>{option0}</td>
              {ruleOptions[rules[1]].map((option1) => {
                const parameters = {
                  ...formParameters,
                  [rules[0]]: option0,
                  [rules[1]]: option1,
                };
                const morphemeId = findAppropriateMorpheme(lang, parameters);

                const morpheme =
                  morphemeId && lang.morphemeDictionary[morphemeId];

                if (morpheme) {
                  parameters.morpheme = morpheme;
                }

                const form = getRequiredForm({ lang }, rule, {
                  ...parameters,
                  id: morphemeId,
                });

                if (!form) {
                  return null;
                }
                return (
                  <td key={option1}>
                    <PartOfSpeech lang={lang} pos={form} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
function findAppropriateMorpheme(lang: Language, parameters: FormParameters) {
  const appropriateMorpheme = Object.keys(lang.morphemeDictionary).find(
    (morphemeId) => {
      const morpheme = lang.morphemeDictionary[morphemeId];

      return Object.keys(parameters).every((parameter: string) => {
        if (!morpheme[parameter as keyof Morpheme]) {
          return true;
        }
        if (parameter === "type") {
          const label = posCodesLabels[morpheme.type as tPosCode].toLowerCase();

          return label === parameters[parameter as keyof FormParameters];
        }
        return (
          morpheme[parameter as keyof Morpheme] ===
          parameters[parameter as keyof FormParameters]
        );
      });
    }
  );

  return appropriateMorpheme;
}
