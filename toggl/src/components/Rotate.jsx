import { Text } from "@chakra-ui/react";
import React from "react";

const Rotate = ({ word }) => {
  word = word.split("");
  console.log(word);
  return (
    <span style={{ display: "inline-flex", color: "#e57cd8 " }}>
      {word.map((el) => {
        return <span style={{ display: "block", rotate: "13deg" }}>{el}</span>;
      })}
    </span>
  );
};

export default Rotate;
