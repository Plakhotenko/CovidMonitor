import React from "react";
import styled from "styled-components/native";

export default function DailyStatTabs() {
  return (
    <DailyStatTabsBox>
      <Item active>Total</Item>
      <Item>Today</Item>
      <Item>Yesterday</Item>
    </DailyStatTabsBox>
  );
}

const DailyStatTabsBox = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 0 24px;
`;

const Item = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 14px;
  padding: 12px;
  opacity: ${(props) => (props.active ? "1" : "0.4")};
`;
