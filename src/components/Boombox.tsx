import React, { useEffect } from "react";
import { ReactComponent as BoomboxSVG } from "../Boombox.svg";

import "./Boombox.scss";

type BoomboxProps = {};

const animateVu = (lights: Array<HTMLElement>, start = 0) => {
  // set current level 0-9
  let current = start;

  // set target level 0-9
  let target = Math.floor(Math.random() * 10);

  // calculate difference between targets
  let diff = target - current;

  // set timeout ms
  const baseTime = 1000; //ms
  let timeout = baseTime / Math.abs(diff);

  const interval = setInterval(() => {
    if (current === target) {
      clearInterval(interval);
      animateVu(lights, current);
    } else {
      let lightState = lights.map((element, i) => ({
        element,
        on: i < current,
      }));
      lightState = diff < 0 ? lightState.reverse() : lightState;
      lightState.forEach((light, i) => {
        setTimeout(() => {
          light.element.style.opacity = light.on ? "1" : "0";
        }, timeout);
      });

      if (current !== target) {
        diff = target - current;
        diff > 0 ? current++ : current--;
      }
    }
  }, 50);
};

export const Boombox = (props: BoomboxProps) => {
  useEffect(() => {
    const topLights: Array<HTMLElement> = Array.from(
      document.querySelector("#top")?.children || []
    ) as Array<HTMLElement>;
    const bottomLights: Array<HTMLElement> = Array.from(
      document.querySelector("#bottom")?.children || []
    ) as Array<HTMLElement>;
    animateVu(topLights);
    animateVu(bottomLights);
  }, []);

  return (
    <div style={{ maxWidth: "900px", width: "100%" }}>
      <BoomboxSVG />
    </div>
  );
};
