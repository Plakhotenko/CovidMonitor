import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export default function NavButton() {
  return (
    <View>
      <Line />
      <Line second />
    </View>
  );
}

const Line = styled.View`
  width: ${(props) => (props.second ? "18px" : "24px")};
  height: 3px;
  background-color: white;
  margin-bottom: 6px;
  border-radius: 4px;
`;
