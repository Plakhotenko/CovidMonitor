import React from "react";
import styled from "styled-components";

export default function StatTabs() {
  return (
    <Wrapper>
      <Item active>My Country</Item>
      <Item>Global</Item>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  height: 48px;
  margin: 25px;
  padding: 3px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.2);
`;

const Item = styled.Text`
  width: 50%;
  height: 42px;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
  border-radius: 50px;
  ${(props) =>
    props.active ? "color: #0d1333; background-color: white;" : "color: white"}
`;
