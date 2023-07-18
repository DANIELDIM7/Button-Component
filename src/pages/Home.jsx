import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";

const FirstContainer = styled.div`
  display: flex;
  flex-direction:row;

`;

const Aside = styled.aside`
  width: 237px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: rgba(158, 158, 158, 1);
  
`;

const SecondContainer = styled.div`
width: 100%;
padding: 100px;
display: flex;
flex-direction: column;
gap:50px;


`;

const ContainerButtons = styled.div`
display: flex;
justify-content:space-between

`

function Home() {
  return (
    <>
      <FirstContainer>
        <Aside>
          <ul>
            <span style={{ color: "orange" }}>Dev</span>challenges.io
          </ul>
          <ul>Colors</ul>
          <ul>Typography</ul>
          <ul>Spaces</ul>
          <ul style={{ color: "black" }}>Buttons</ul>
          <ul>Inputs</ul>
          <ul>Grid</ul>
        </Aside>
        <SecondContainer>
          <ContainerButtons>
            <Button>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button variant='outline'>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button variant='text'>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button disableShadow>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button disabled>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button starIcon>Default</Button>
            <Button endIcon>Default</Button>
          </ContainerButtons>
          <ContainerButtons>
            <Button  color='primary'size='sm'>Default</Button>
            <Button  color='primary'size='md'>Default</Button>
            <Button  color='primary'size='lg'>Default</Button>
            
          </ContainerButtons>
          <ContainerButtons>
            <Button >Default</Button>
            <Button  color='primary'>Primary</Button>
            <Button  color='secondary'>Secondary</Button>
            <Button  color='danger'>Danger</Button>
            
          </ContainerButtons>


        </SecondContainer>
      </FirstContainer>

    </>



  );
}

export default Home;
