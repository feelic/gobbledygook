import { useState, useRef, Fragment } from "react";
import { fetchAudio } from "../api";

export default function AudioButton({sentence, voice}) {
  const [audio, setAudio] = useState();
  const audioPlayer = useRef();

  function handlePlayAudio(phrase) {
    fetchAudio(phrase, voice)
      .then((res) => setAudio(res))
      .then(() => {
        audioPlayer.current.load();
        audioPlayer.current.play();
      });
  }

  return (
    <Fragment>
      <button onClick={() => handlePlayAudio(sentence)}>:V</button>
      <audio ref={audioPlayer}>
        {audio && <source src={audio} type="audio/mpeg"></source>}
      </audio>
    </Fragment>
  );
}
