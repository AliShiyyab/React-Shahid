import React from 'react';
import styled from 'styled-components';
import Card from "./card";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Cards = ({ shahidUsers }) => {
  return (
    <CardContainer>
      {shahidUsers.map((val, key) => (
        <Card val={val} key={key} />
      ))}
    </CardContainer>
  );
};

export default Cards;
