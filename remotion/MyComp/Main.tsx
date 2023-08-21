import { z } from "zod";
import { AbsoluteFill, Video } from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill style={container}>
      <Video src="https://dqu1p08d61fh.cloudfront.net/1b64b0ff-1e4a-483a-9f27-9c7583919d4d/38cf03f1-cd31-4c05-a06a-e5fbbab59751/img4397mov-compressed.mp4#t=0,8.73" />
    </AbsoluteFill>
  );
};
