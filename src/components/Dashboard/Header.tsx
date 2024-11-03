/**
 * This code was generated by Builder.io
 */
import React from "react";
import styled from "styled-components";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/377bae02fd25b768f8e2ea3a773d3ef664fa772eb67b4ae2b56b5fbc35fbf630?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7"
          alt="SkillSync Logo"
        />
        <LogoText>SkillSync</LogoText>
      </LogoContainer>
      <ProfileIcon
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1d1666b59f04882560b6ba28df5a58ffce0249dd549688b5698024d96d1c6df?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7"
        alt="Profile"
      />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  align-self: center;
  display: flex;
  width: 217px;
  padding-left: 10px;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LogoIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const LogoText = styled.h1`
  font: 600 20px Syne, sans-serif;
  margin: 0;
`;

const ProfileIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export default Header;
