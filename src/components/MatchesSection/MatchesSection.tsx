/**
 * This code was generated by Builder.io
 */
import React from "react";
import styled from "styled-components";
import MatchCard from "./MatchCard";
import { MatchData } from "./types";

interface MatchesSectionProps {
  matches: MatchData[];
}

const MatchesSection: React.FC<MatchesSectionProps> = ({ matches }) => {
  return (
    <Section>
      <Header>
        <Title>Home</Title>
        {/* <ProfileImage
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/061e6abf50149241a6ca8c3888410b50ed1fe8890592b861a592cb262b8fd472?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7"
          alt="Profile"
        /> */}
      </Header>
      <SectionTitle>MATCHES</SectionTitle>
      {matches.map((match, index) => (
        <MatchCard key={index} {...match} />
      ))}
      <SectionTitle>OPEN ROLES</SectionTitle>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  // margin-top: 32px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Header = styled.header`
  align-self: stretch;
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: #0d062d;
  font: 600 46px Syne, sans-serif;
  // margin-top: 54px;
  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
  }
`;

// const ProfileImage = styled.img`
//   aspect-ratio: 1;
//   object-fit: contain;
//   object-position: center;
//   width: 64px;
//   border-radius: 50%;
//   align-self: flex-start;
// `;

const SectionTitle = styled.h2`
  color: #0d062d;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 33px;
`;

export default MatchesSection;
