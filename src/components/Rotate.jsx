import { Text } from "@chakra-ui/react";
import React from "react";

const Rotate = ({ word, Color = "white" }) => {
  word = word.split("");
  return (
    <span style={{ display: "inline-flex", color: Color }}>
      {word.map((el) => {
        return <span style={{ display: "block", rotate: "13deg" }}> {el}</span>;
      })}
    </span>
  );
};

export default Rotate;
