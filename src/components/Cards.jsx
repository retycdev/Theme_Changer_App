import React, { useContext } from "react";
import styled from "styled-components";
import images from "../assets/images";
import { themeProvider } from "../context/Theme_context";

const Container = styled.div`
  height: 112px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 12px;
  border-bottom: 1px solid black;
  transition: 0.4s ease-in;
`;
const Avatar = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Cards = ({ image, username }) => {
  const { appTheme } = useContext(themeProvider);

  return (
    <div>
      <Container
        style={{
          backgroundColor: `${appTheme.background}`,
          color: `${appTheme.textPrimary}`,
        }}
      >
        <Avatar>
          <Img src={image} />
        </Avatar>
        <p>{username}</p>
      </Container>
    </div>
  );
};

export default Cards;
