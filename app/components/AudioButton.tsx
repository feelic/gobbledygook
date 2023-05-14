import { useState, useRef, Fragment } from "react";
import { fetchAudio } from "../api";
import styles from "../styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

export default function AudioButton({
  sentence,
  voice,
}: {
  sentence: string;
  voice: string;
}) {
  const [audio, setAudio] = useState<string>("");
  const audioPlayer = useRef<HTMLAudioElement>(null);

  function handlePlayAudio(phrase: string) {
    fetchAudio(phrase, voice)
      .then((res) => setAudio(res))
      .then(() => {
        audioPlayer.current?.load();
        audioPlayer.current?.play();
      });
  }

  return (
    <Fragment>
      <button
        className={styles.controls}
        onClick={() => handlePlayAudio(sentence)}
      >
        <FontAwesomeIcon icon={faBullhorn} />
      </button>
      <audio ref={audioPlayer}>
        {audio && <source src={audio} type="audio/mpeg"></source>}
      </audio>
    </Fragment>
  );
}
