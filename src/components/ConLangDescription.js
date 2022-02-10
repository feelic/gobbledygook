import { Fragment } from "react";
import { transliterate, getRequiredForm } from "../gobbledygook/use-language";
import styles from "./ConLangDescription.module.scss";
import {PartOfSpeech} from "./InteractiveTranscription";
import ConLangVowelChart from "./ConLangVowelChart";
import ConLangConsonantChart from "./ConLangConsonantChart";

export default function ConLangDescription(props) {
  const { lang } = props;

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
function RuleDescription({ lang, rule }) {
  const rules = lang[rule].rules;
  const ruleOptions = {
    type: ["noun", "adjective"],
    number: ["singular", "plural"],
    person: ["firstPerson", "secondPerson", "thirdPerson"],
    gender: lang.genders,
    tense: [...new Set(Object.values(lang.conjugation.tenseSystem))],
    declensionGroup: lang.declension.declensionGroups,
    grammaticalCase: [...new Set(Object.values(lang.caseSystem))],
  };

  if (rules.length !== 3) {
    return null;
  }

  return (
    <div>
      {ruleOptions[rules[0]].map((option) => {
        return (
          <div>
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
function FormTable({ lang, rules, rule, ruleOptions, formParameters }) {
  if (!ruleOptions[rules[0]]) {
    console.log(rules[0]);
  }
  return (
    <table className={styles.FormTable}>
      <thead>
        <tr>
          <th>{rule}</th>
          {ruleOptions[rules[1]].map((option) => {
            return <th>{option}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {ruleOptions[rules[0]].map((option0) => {
          return (
            <tr>
              <td>{option0}</td>
              {ruleOptions[rules[1]].map((option1) => {
                const parameters = {
                  ...formParameters,
                  [rules[0]]: option0,
                  [rules[1]]: option1,
                };
                const morphemeId = findAppropriateMorpheme(lang, parameters);
                const morpheme = lang.morphemeDictionary[morphemeId];
                const form = getRequiredForm({ lang }, rule, {
                  ...parameters,
                  morpheme: morpheme,
                  id: morphemeId,
                });

                return <td><PartOfSpeech lang={lang} pos={form} /></td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
function findAppropriateMorpheme(lang, parameters) {
  return Object.keys(lang.morphemeDictionary).find((morphemeId) => {
    const morpheme = lang.morphemeDictionary[morphemeId];

    return Object.keys(parameters).every((parameter) => {
      if (!morpheme[parameter]) {
        return true;
      }
      return morpheme[parameter] === parameters[parameter];
    });
  });
}
