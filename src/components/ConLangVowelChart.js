import { Fragment } from "react";
import { transliterate, getRequiredForm } from "../gobbledygook/use-language";
import styles from "./ConLangVowelChart.module.scss";

export default function ConLangVowelChart(props) {
  const { lang } = props;
  return (
      <Fragment>
            <div className={styles.container}>
              <div className={styles.header}>
                <span>Front</span><span>Central</span><span>Back</span>
              </div>
              <div className={styles.contents}>
              <div className={styles.titleColumn}>
                <span>Close</span>
                <span>Near-close</span>
                <span>Close-mid</span>
                <span>Mid</span>
                <span>Open-mid</span>
                <span>Near-open</span>
                <span>Open</span>
              </div>
              <div className={styles.chart}>
                <div>
                  <span>
                    {lang.vowels['i'] && 'i'} {lang.vowels['y'] && 'y'}
                  </span>
                  <span></span>
                  <span>
                    {lang.vowels['u'] && 'u'}
                  </span>
                </div>
                <div><span></span><span></span><span></span></div>
                <div>
                  <span>
                    {lang.vowels['e'] && 'e'}{lang.vowels['ø'] && 'ø'}
                  </span>
                  <span>
                    {lang.vowels['ɘ'] && 'ɘ'}
                  </span>
                  <span>
                    {lang.vowels['o'] && 'o'}{lang.vowels['õ'] && 'õ'}
                  </span>
                </div>
                <div>
                  <span></span>
                  <span>
                    {lang.vowels['ə'] && 'ə'}
                  </span>
                  <span></span>
                </div>
                <div>
                  <span>
                    {lang.vowels['ɛ'] && 'ɛ'}{lang.vowels['ɛ̃'] && 'ɛ̃'}{lang.vowels['œ'] && 'œ'}{lang.vowels['œ̃'] && 'œ̃'}
                  </span>
                  <span>
                    {lang.vowels['ɜ'] && 'ɜ'}
                  </span>
                  <span>
                    {lang.vowels['ʌ'] && 'ʌ'}{lang.vowels['ɔ'] && 'ɔ'}{lang.vowels['ɔ̃'] && 'ɔ̃'}
                  </span>
                </div>
                <div>
                  <span>
                    {lang.vowels['æ'] && 'æ'}
                  </span>
                  <span></span>
                  <span></span>
                </div>
                <div>
                  <span>
                    {lang.vowels['a'] && 'a'}{lang.vowels['ã'] && 'ã'}{lang.vowels['ɶ'] && 'ɶ'}
                  </span>
                  <span></span>
                  <span>
                    {lang.vowels['ɑ'] && 'ɑ'}{lang.vowels['ɑ̃'] && 'ɑ̃'} {lang.vowels['ɒ'] && 'ɒ'}
                  </span>
                </div>
              </div>
            </div>

            </div>
      </Fragment>
    )
}
