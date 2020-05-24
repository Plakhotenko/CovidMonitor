import React from "react";
import Header from "./components/Header";
import MainHeading from "./components/MainHeading";
import StatTabs from "./components/StatisticsTabs";
import DailyStatTabs from "./components/DailyStatTabs";
import StatInfo from "./components/StatInfo";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <Header />
      <MainHeading />
      <StatTabs />
      <DailyStatTabs />
      <StatInfo />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #473f97;
`;
