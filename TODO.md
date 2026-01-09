# Gobbledygook - Work Plan

## Current Focus: Typing & Architecture Refactoring

### Context
The model works as a proof-of-concept but has become rigid and hard to extend.
A critical analysis identified: magic strings, `any` types, tight coupling, and missing features.
Goal: stabilize the codebase before adding new linguistic features.

### Phase 1: Typing & Constants (Priority: HIGH)
- [x] Create `constants/grammar.ts` with typed constants for all grammatical categories
- [ ] Update `interfaces.ts` to use new types (replace `any`, use constants)
- [ ] Apply constants in `generate-language/` modules
- [ ] Apply constants in `use-language/` modules
- [ ] Update language definitions (english, french, danish) for consistency

### Phase 2: Extensibility (Priority: MEDIUM)
- [ ] Create constituent builders registry (replace switch/case in make-sentence, make-noun-phrase, etc.)
- [ ] Add optional `features` system to Language interface (for negation, tones, classifiers, etc.)
- [ ] Implement negation as first optional feature

### Phase 3: Linguistic Enrichment (Priority: LOW - as needed)
- [ ] Improve syllable structure (replace rigid CV alternation)
- [ ] Add basic aspect system (perfective/imperfective)
- [ ] Support prefixes and circumfixes in form templates
- [ ] Add reflexive pronouns

### Phase 4: Testing & Documentation (Ongoing)
- [ ] Add snapshot tests for sample-sentences with each language
- [x] Update README.md with project documentation

---

## Key Architecture Decisions

### Intentional Simplifications (keep as-is)
- Grammatical + semantic cases merged (one system)
- Deterministic model (one input → one output)
- Absence = empty string
- Real languages (fr/en/da) are test fixtures, not goals

### Known Limitations (acceptable for now)
- No tones, vowel harmony, ergativity
- No agglutinative/polysynthetic morphology
- Simplified phonotactics (CV alternation)
- No aspect (only tense)
- No negation (Phase 2)

---

## Original TODO Items

TODO
* [ ] extended case system
* [ ] add demonstrative pronouns
* [ ] add demonstrative forms in language generation
* [ ] add negative phrases
* [ ] add quantifiers
* [ ] add conditional clauses
* [ ] shape out case system generation
* [ ] shape out sub clauses system generation
* [ ] shape out determiners generation
* [ ] update declension form tables for all numbers of rules

---

DONE
* [x] generate sentences as syntax trees with context for each entity
* [x] update language generation with new sentence format
* [x] make form rules dynamic and defined by the language itself
* [x] add tooltip to interactive transcription component
* [x] shape out genders generation
* [x] shape out pronouns generation
* [x] shape out declension generation
* [x] shape out conjugation generation
* [x] avoid homonyms in vocabulary generation
* [x] add interrogative mode
* [x] add interrogative forms in language generation

