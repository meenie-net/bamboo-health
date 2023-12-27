import { useEffect, useState } from "react";

export const useCountdown = ({ duration }: { duration: number }) => {
  let _duration = duration;
  const pad = (num: number) => {
    if (num < 10) return "0" + num;
    return num;
  };
  const format = (totalSecond: number) => {
    return {
      HH: pad(Math.floor(totalSecond / 3600)),
      MM: pad(Math.floor(totalSecond / 60 - Math.floor(totalSecond / 3600))),
      SS: pad(totalSecond % 60),
    };
  };
  const [result, setResult] = useState(format(duration));
  useEffect(() => {
    const timer = setInterval(() => {
      if (_duration <= 0) clearInterval(timer);
      _duration--;
      setResult(format(_duration));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [_duration]);

  return result;
};
