import React from "react";
import { ReactComponent as TVSVG } from "../TV.svg";

import "./TV.scss";

type TVProps = {};

export const TV = (props: TVProps) => {
  return (
    <div style={{ maxWidth: "900px", width: "100%" }} className="tv">
      <TVSVG />
    </div>
  );
};
