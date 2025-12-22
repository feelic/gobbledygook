# gobbledygook

This project is a procedural generator for fictional human languages.

It is a personal project developed as I discover interesting things about linguistics.

## Key principles

### Declarative approach

A Gobbledygook language is represented by a JSON object containing the rules, words, and specificities of that language

A system of `rules` and `forms` describes the way a word changes based on its context

A Gobbledygook sentence is represented by a JSON object that contains a semantic definition of that sentence as well as all relevant context information

### Generating and Using a Gobbledygook language

Gobbledygook contains 2 main tools :

- `generate-language/` : creates a fictional languages with its rules and particularities, trying to make it sound interesting and organic
- `use-language/` : takes as input a language and a sentence definition to output the sentence in that language

A language that has been generated this way can be saved as a JSON and reused.

## Language modelization principles

Gobbledygook assumes a very simple conception of language

### Phonology
* phoneme inventory, with frequencies
* IPA representation and the language's transliteration code into latin alphabet (currently based on my personal preference rather than a recognized standard)

### Morphology

#### Morphology types

Languages differ in **how much words change** based on context. Gobbledygook uses 3 simplified morphology types:

| Type | Description | Example language | How "I love" changes |
|------|-------------|------------------|---------------------|
| **Flectional** | Words change a lot, one suffix = multiple meanings | Latin | amo, amas, amat, amamus... |
| **Semi-flectional** | Some changes + some helper words | French | j'aime, tu aimes, il aime... |
| **Analytical** | Words barely change, meaning from word order + helpers | Mandarin | 我爱 (wǒ ài) - no verb change |

#### Morphemes

Morphemes are generated based on the above phoneme inventory by alternating vowels and consonants.

#### Declension system (nouns and adjectives)

A declension system describes how words change (or not) based on their context. The relevant parameters that inflect a word are listed as `rules`, and the word forms are described in a nested `forms` object.

**The `rules` and `forms` system:**

- **Rules** list which parameters affect the word form, in order of nesting
- **Forms** is a nested object following that order, ending with a template string

Example for English noun declension:
```javascript
{
  rules: ["declensionType", "grammaticalCase", "number"],
  forms: {
    noun: {
      nominative: { singular: "{morpheme}", plural: "{morpheme}s" },
      genitive: { singular: "{morpheme}'s", plural: "{morpheme}s'" }
    },
    adjective: {
      nominative: { singular: "{morpheme}", plural: "{morpheme}" }
    }
  }
}
```

For "dog" (morpheme: "dog") in plural nominative: 
→ navigate `forms.noun.nominative.plural` → `"{morpheme}s"` → `"dogs"`

**More examples:**

English inflects its nouns and adjectives by `rules: ["declensionType", "grammaticalCase", "number"]`

For `yellow` in the sentence `the yellow taxis drive over the bridge`, yellow follows the rules 
* `declensionType = adjective`, 
* `grammaticalCase = nominative` and 
* `number = plural`, 
giving the form `yellow`

French inflects its nouns and adjectives by `rules: ["declensionType", "declensionGroup", "grammaticalCase", "gender", "number"]`

For `cheval` in the sentence `les enfants adorent les petits chevaux`, cheval follows the rules 
* `declensionType = noun`, 
* `declensionGroup = alEnding`, 
* `grammaticalCase = accusative`, 
* `gender = masculine` and 
* `number = plural`, 
giving the form `chevaux`

#### Grammatical cases

Cases indicate the **role** a noun plays in a sentence. English mostly uses word order, but other languages change the word itself.

| Case | Role | English example | Latin example |
|------|------|-----------------|---------------|
| **Nominative** | Subject (who does the action) | "**The dog** bites the man" | "**Canis** mordet virum" |
| **Accusative** | Direct object (receives the action) | "The dog bites **the man**" | "Canis mordet **virum**" |
| **Dative** | Indirect object (recipient) | "I give a bone **to the dog**" | "Do os **cani**" |
| **Genitive** | Possession | "**The dog's** bone" / "bone **of the dog**" | "os **canis**" |

In Latin, the word "canis" (dog) changes form: canis → canem → cani → canis depending on its role.

#### Semantic cases (locative cases)

Beyond grammatical roles, cases can express **spatial and logical relationships**. These are common in Finnish, Hungarian, and many other languages.

| Case | Meaning | English equivalent | Example usage |
|------|---------|-------------------|---------------|
| **Locative** | Location (static) | "at", "in" | "I am **at the house**" |
| **Lative** | Movement towards | "to", "towards" | "I go **to the house**" |
| **Inessive** | Inside something | "inside", "within" | "The cat is **in the box**" |
| **Ablative** | Movement away from | "from", "out of" | "I come **from the house**" |
| **Instrumental** | Tool or means | "with", "using" | "I write **with a pen**" |
| **Benefactive** | Benefit recipient | "for" | "I made this **for you**" |

In Finnish, "talo" (house) becomes: talossa (in the house), taloon (into the house), talosta (from the house).

Gobbledygook treats prepositions and case suffixes as equivalent mechanisms - both express the same semantic relationships.

#### Conjugation system (verbs)

The conjugation system follows the same `rules` and `forms` principles as declension.

#### Determiners and pronouns

Determination specifies **which specific thing** we're talking about:

| Type | Meaning | English example | French example |
|------|---------|-----------------|----------------|
| **Definite** | A specific known thing | "**the** dog" | "**le** chien" |
| **Indefinite** | Any instance of a thing | "**a** dog" | "**un** chien" |
| **Demonstrative** | Pointing to something | "**this/that** dog" | "**ce** chien" |
| **Possessive** | Belonging to someone | "**my/your/his** dog" | "**mon/ton/son** chien" |
| **Proper noun** | A name (no determiner) | "**Fido** barks" | "**Médor** aboie" |

The determiner and pronoun systems also follow the same `rules` and `forms` principles.

### Syntax
* A word order (SOV, SVO, VSO, VOS)
* A phrase structure for: noun, verb, adjective
* A sentence structure by type: declarative, interrogative (polar, open), negative

### Lexicon
* a dictionary of root morphemes with their grammatical properties (gender, declension or conjugation group, object category such as inanimate, animal, etc.)
* abstract words for conjunctions adverbs and others (to be improved)

## Simplifications and shortcuts

Gobbledygook cannot be exhaustive and represent all the possible languages. Some important simplications and shortcuts have been taken to make these tools.

### Consonant clusters and diphtongs 

They are represented as being a single vowel or consonant. 
They are created as such during language generation

### Morphology types

I simplified the analytical - flectional continuum into 3 distinct categories to simplify the generation process

### Grammatical and semantic cases are merged into one concept
Grammatical and semantic cases are represented by a single system that folds syntactic roles (nominative, accusative) with semantic relationships (inessive, benefactive)

Prepositions with semantic meaning are also meant to be folded in this system, as prefixes, stored in a dedicated object.

The system considers prepositions and suffix declensions are functionally the same, except with a space for prepositions.

example:

* classic declension
    * latin nominative `{morpheme}us`
    * english genitive `{morpheme}'s`
* preposition form as a declension form
    * english allative `{preposition} {morpheme}` (/tu london/)
    * french instrumental `{preposition} {morpheme}` (/avek panaʃ/)

This simplifies the representation and is sufficient to generate fictional languages.

### Deterministic generation
One sentence definition will only output one output for one language.

Gobbledygook does not support style, synonymy or subtext

### Absence is represented by an empty string
For example, absence of determiner in a language is represented with `""`

A declension that hasn't a suffix will be represented simply `"{morpheme}"`

### Real human languages are used as benchmark and development tests
I have used french, english and danish because I am familiar with these.

I also recognize that all 3 are closely related languages with close common ancestors and intense mutual influences, and are not super representative of the breadth of real life languages.

They are not fully implemented and many of their singularities are not represented.

These languages are meant to be used as tests for the `useLanguage` tool, and not exactly as an objective of the `generateLanguage` tool

## Known limitations

All these limitations *might* become subject to future evolutions

### Semantic expressivity accross languages

Idiomatic expressions and ways of expressing ideas varying between language can't be represented with Gobbledygook as it exists now.

If a language says a sentence like "The sky rains water drops" (transitive formulation) to say it rains, and another one says "it rains" (intransitive), Gobbledygook wouldn't be able to do that

If a language says "Il pleut comme vache qui pisse" (image), Gobbledygook can't represent this either.

### Linguistic phenomena not represented

* tone systems
* agglutinative and polysynthetic languages
* ergative-absolutive alignmed languages
* tense aspects 
* negation
* infixes, ablaut, reduplication
* intonation and stress

### Text to speech

Gobbledygook uses amazon's Polly to voice its languages. This model uses preset voices based on existing languages and accents. These voices are not able to produce all the sounds that Gobbledygook generates.

## Future evolutions (big dreams)

Two new tools could be added to make this project extremely cool :

### Language mutation generator

A tool that takes a language as input and a number of generations, and outputs a new language with realistic mutations.

### Sentence encoder tool

A tool that takes in a human sentence (english probably) and encodes it into a Gobbledygook sentence definition. 

LLMs might prove a good option, but there is probably a good traditional option.

## Key project files 
- `interfaces.ts` : types for all manipulated concepts
- `generate-language/index.ts` : generation tool entry point
- `use-language/make-sentence.ts` : sentence production tool entry point
- `languages/french/index.ts` : example of a real life language represented as a Gobbledygook language
- `sample-sentences/sample-sentences.ts` : examples of sentence definitions in the Gobbbledygook format

### Project vocabulary
- **Morphème** : word root, base lexical unit
- **FormTable** : structure `{ rules, forms }` describing inflection of a word
- **rules** : ordered list containing the inflection parameters (ex: `["gender", "number"]`)
- **forms** : nested object, according to the rule orders, ending with leaf nodes with a template string for the word flection.
- **SentenceDefinition** : Semantic representation of a sentence to transcribe
- **Context** : parameter passed to the sentence builder, that contains the language and the consolidated sentence element and utterance context (speaker, addressee role, etc.)

## Resources

#### Language creation

The Language Construction Kit  
http://www.zompist.com/kit.html

#### IPA and phonetics

IPA charts with sounds  
http://www.internationalphoneticalphabet.org/ipa-sounds/ipa-chart-with-sounds/

Wikipedia article for vowel  
https://en.wikipedia.org/wiki/Vowel

Wikipedia article for consonant  
https://en.wikipedia.org/wiki/Consonant

StackExchange question on languages with few phonemes  
http://linguistics.stackexchange.com/questions/4561/languages-with-the-fewest-phonemes

Quora question on languages with most phonemes  
https://www.quora.com/Phonetics-Which-language-has-the-most-amount-of-sounds

http://ipa-reader.xyz/
https://cuttlesoft.com/blog/pronouncing-things-with-amazons-polly/

#### Morphology

Wikipedia article for morpheme  
https://en.wikipedia.org/wiki/Morpheme
https://en.wikipedia.org/wiki/Morphology_(linguistics)
https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object
https://en.wikipedia.org/wiki/Agglutinative_language
https://en.wikipedia.org/wiki/Fusional_language
https://en.wikipedia.org/wiki/Isolating_language

### Grammatical features

https://en.wikipedia.org/wiki/Grammatical_category

#### Language mutations

Wikipedia article for consonant mutation  
https://en.wikipedia.org/wiki/Consonant_mutation

Wikipedia article for sound change  
https://en.wikipedia.org/wiki/Sound_change
