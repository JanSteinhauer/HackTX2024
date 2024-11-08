import React from "react";
import styled from "styled-components";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick: () => void; // Add onClick property to the interface
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <NavItemContainer $isActive={isActive} onClick={onClick}>
    <NavIcon src={icon} alt={`${label} icon`} />
    <NavLabel>{label}</NavLabel>
  </NavItemContainer>
);

interface SidebarProps {
  onNavItemClick: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavItemClick }) => {
  const navItems: Omit<NavItemProps, 'onClick'>[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/307be73c48e8e3e38826c6f5092d2d7c3f029428a5904f4d95e3fdbd3e09d864?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7",
      label: "Home",
      isActive: true,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6ceb1ce6a8ddde2c2dd66b10b0532d152b77e3a57340ab7d9713157fa5fd2d3b?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7",
      label: "Messages",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ee75d2d971cfb58209231cc7d23c381b6e7dfd8260b658a2aca9b09c767a21a4?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7",
      label: "Tasks",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/edba7c93e09487c0650ecebe52996fa3e75442006e63dcae9aece046469c1392?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7",
      label: "Members",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3b04fbaaf715e6f01fda9effe9392a2b326001387d7e228d5454a315f2e20c6?placeholderIfAbsent=true&apiKey=3d2732e2da6e4ff0afc195a1cfed46f7",
      label: "Settings",
    },
  ];

  return (
    <SidebarContainer>
      <nav>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            {...item}
            onClick={() => onNavItemClick(item.label)} // Pass the onClick handler
          />
        ))}
      </nav>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  display: flex;
  padding-left: 5px;
  flex-direction: column;
  margin-right: 32px;
`;

const NavItemContainer = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: ${(props) => (props.$isActive ? "#000" : "rgba(120, 116, 134, 1)")};
  font-weight: 500;
  cursor: pointer;
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const NavLabel = styled.span`
  font-family: Inter, sans-serif;
  font-size: 16px;
`;

export default Sidebar;
