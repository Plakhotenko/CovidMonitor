import React from "react";
import StatInfoItem from "./StatInfoItem";
import styled from "styled-components";

const state = {
  items: [
    {
      id: "1",
      title: "Affected",
      value: "336,851",
      color: "#ffb259",
    },
    {
      id: "2",
      title: "Death",
      value: "9,620",
      color: "#ff5959",
    },
    {
      id: "3",
      title: "Recovered",
      value: "17,977",
      color: "#4cd97b",
      width: "29%",
    },
    {
      id: "4",
      title: "Active",
      value: "301,251",
      color: "#4db5ff",
      width: "29%",
    },
    {
      id: "5",
      title: "Serious",
      value: "18,702",
      color: "#9059ff",
      width: "29%",
    },
  ],
};

export default function StatInfo() {
  return (
    <Wrapper>
      {state.items.map((item) => (
        <StatInfoItem key={item.id} item={item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 12px;
`;
