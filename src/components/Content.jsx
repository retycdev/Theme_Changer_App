import React from "react";
import styled from "styled-components";
import Cards from "./Cards";
import images from "../assets/images";

const Container = styled.div``;

const Content = () => {
  const userDetails = [
    { _id: 0, img: images.dp1, name: "Christian" },
    { _id: 1, img: images.dp5, name: "Sifa" },
    { _id: 2, img: images.dp2, name: "Abdulaziz" },
    { _id: 3, img: images.dp3, name: "Abiud" },
    { _id: 4, img: images.dp4, name: "Dan" },
  ];
  return (
    <div>
      <Container>
        {userDetails.map((detail) => {
          return (
            <Cards key={detail._id} image={detail.img} username={detail.name} />
          );
        })}
      </Container>
    </div>
  );
};

export default Content;
