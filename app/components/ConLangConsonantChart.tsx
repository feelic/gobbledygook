import { Fragment } from "react";
import React from "react";
import { Language } from "../gobbledygook/interfaces";

export default function ConLangConsonantChart({ lang }: { lang: Language }) {
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Bi­labial</th>
            <th>Labio­dental</th>
            <th>Linguo­labial</th>
            <th>Dental</th>
            <th>Alveolar</th>
            <th>Post­alveolar</th>
            <th>Retro­flex</th>
            <th>Palatal</th>
            <th>Velar</th>
            <th>Uvular</th>
            <th>Pharyn­geal</th>
            <th>Glottal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Nasal</th>
            <td>
              {lang.consonants["m̥"] && "m̥"}
              {lang.consonants["m"] && "m"}
            </td>
            <td>{lang.consonants["ɱ"] && "ɱ"}</td>
            <td>{lang.consonants["n̼"] && "n̼"}</td>
            <td colSpan={3}>
              {lang.consonants["n̥"] && "n̥"}
              {lang.consonants["n"] && "n"}
            </td>
            <td>
              {lang.consonants["ɳ̊"] && "ɳ̊"}
              {lang.consonants["ɳ"] && "ɳ"}
            </td>
            <td>
              {lang.consonants["ɲ̊"] && "ɲ̊"}
              {lang.consonants["ɲ"] && "ɲ"}
            </td>
            <td>
              {lang.consonants["ŋ̊"] && "ŋ̊"}
              {lang.consonants["ŋ"] && "ŋ"}
            </td>
            <td>{lang.consonants["ɴ"] && "ɴ"}</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Plosive</th>
            <td>
              {lang.consonants["p"] && "p"} {lang.consonants["b"] && "b"}
            </td>
            <td>
              {lang.consonants["p̪"] && "p̪"} {lang.consonants["b̪"] && "b̪"}
            </td>
            <td>
              {lang.consonants["t̼"] && "t̼"} {lang.consonants["d̼"] && "d̼"}
            </td>
            <td colSpan={3}>
              {lang.consonants["t"] && "t"} {lang.consonants["d"] && "d"}
            </td>
            <td>
              {lang.consonants["ʈ"] && "ʈ"} {lang.consonants["ɖ"] && "ɖ"}
            </td>
            <td>
              {lang.consonants["c"] && "c"} {lang.consonants["ɟ"] && "ɟ"}
            </td>
            <td>
              {lang.consonants["k"] && "k"} {lang.consonants["ɡ"] && "ɡ"}
            </td>
            <td>
              {lang.consonants["q"] && "q"} {lang.consonants["ɢ"] && "ɢ"}
            </td>
            <td>{lang.consonants["ʡ"] && "ʡ"}</td>
            <td>{lang.consonants["ʔ"] && "ʔ"} </td>
          </tr>
          <tr>
            <th>Sibilant affricate</th>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={2}>
              {lang.consonants["ts"] && "ts"} {lang.consonants["dz"] && "dz"}
            </td>
            <td>
              {lang.consonants["t̠ʃ"] && "t̠ʃ"} {lang.consonants["d̠ʒ"] && "d̠ʒ"}
            </td>
            <td>
              {lang.consonants["ʈʂ"] && "ʈʂ"} {lang.consonants["ɖʐ"] && "ɖʐ"}
            </td>
            <td>
              {lang.consonants["tɕ"] && "tɕ"} {lang.consonants["dʑ"] && "dʑ"}
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Sibilant fricative</th>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan={2}>
              {lang.consonants["s"] && "s"} {lang.consonants["z"] && "z"}
            </td>
            <td>
              {lang.consonants["ʃ"] && "ʃ"} {lang.consonants["ʒ"] && "ʒ"}
            </td>
            <td>
              {lang.consonants["ʂ"] && "ʂ"} {lang.consonants["ʐ"] && "ʐ"}
            </td>
            <td>
              {lang.consonants["ɕ"] && "ɕ"} {lang.consonants["ʑ"] && "ʑ"}
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Non-sibilant fricative</th>
            <td>
              {lang.consonants["ɸ"] && "ɸ"} {lang.consonants["β"] && "β"}
            </td>
            <td>
              {lang.consonants["f"] && "f"} {lang.consonants["v"] && "v"}
            </td>
            <td>
              {lang.consonants["θ̼"] && "θ̼"} {lang.consonants["ð̼"] && "ð̼"}
            </td>
            <td>
              {lang.consonants["θ"] && "θ"} {lang.consonants["ð"] && "ð"}
            </td>
            <td>
              {lang.consonants["θ̠"] && "θ̠"} {lang.consonants["ð̠"] && "ð̠"}
            </td>
            <td>
              {lang.consonants["ɹ̠̊˔"] && "ɹ̠̊˔"} {lang.consonants["ɹ̠˔"] && "ɹ̠˔"}
            </td>
            <td>{lang.consonants["ɻ˔"] && "ɻ˔"} </td>
            <td>
              {lang.consonants["ç"] && "ç"} {lang.consonants["ʝ"] && "ʝ"}
            </td>
            <td>
              {lang.consonants["x"] && "x"} {lang.consonants["ɣ"] && "ɣ"}
            </td>
            <td>
              {lang.consonants["χ"] && "χ"} {lang.consonants["ʁ"] && "ʁ"}
            </td>
            <td>
              {lang.consonants["ħ"] && "ħ"} {lang.consonants["ʕ"] && "ʕ"}
            </td>
            <td>
              {lang.consonants["h"] && "h"} {lang.consonants["ɦ"] && "ɦ"}
            </td>
          </tr>
          <tr>
            <th>Approximant</th>
            <td></td>
            <td>{lang.consonants["ʋ"] && "ʋ"}</td>
            <td></td>
            <td colSpan={2}>{lang.consonants["ɹ"] && "ɹ"}</td>
            <td>{lang.consonants["ɻ"] && "ɻ"}</td>
            <td>{lang.consonants["j"] && "j"}</td>
            <td>{lang.consonants["ɰ"] && "ɰ"}</td>
            <td></td>
            <td>{lang.consonants["ʔ̞"] && "ʔ̞"}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}
