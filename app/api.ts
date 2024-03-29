import { DEFAULT_VOICE } from "./constants/voices";

const API_ENDPOINT =
  "https://nwzovr1a4m.execute-api.eu-west-3.amazonaws.com/dev";

export function fetchAudio(text: string, voice = DEFAULT_VOICE) {
  return fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      voice,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return `data:audio/mpeg;base64,${response}`;
    })
    .catch(() => {
      throw new Error(":/");
    });
}
