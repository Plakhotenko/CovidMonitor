import React from "react";
import styled from "styled-components";

export default function StatInfoItem(props) {
  return (
    <Item color={props.item.color} width={props.item.width}>
      <Title>{props.item.title}</Title>
      <Value>{props.item.value}</Value>
    </Item>
  );
}
const Item = styled.View`
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "46%")};
  margin: 2%;
  height: 100px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${(props) => (props.color ? props.color : "#ffb259")};
`;

const Title = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const Value = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 700;
`;
