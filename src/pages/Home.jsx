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
const TextButtons = styled.p`
font-size: 12px;
font-weight:400;
color: rgba(51, 51, 51, 1);
`

const ButtonDiv = styled.div`
display: flex;
flex-direction:column;
place-content:center;
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
            <ButtonDiv>
              <TextButtons>{`<Button/>`}</TextButtons>
              <Button>Default</Button>
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button variant='outline'`}</TextButtons>
              <Button variant='outline'>Default</Button>
            </ButtonDiv>
          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button variant='text'/>`}</TextButtons>
              <Button variant='text'>Default</Button>
            </ButtonDiv>

          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button disableShadow/>`}</TextButtons>
              <Button disableShadow color='primary'>Default</Button>
            </ButtonDiv>

          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button disabled/>`}</TextButtons>
              <Button disabled>Default</Button>
            </ButtonDiv>

          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button startIcon/>`}</TextButtons>
              <Button starIcon>Default</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button endIcon/>`}</TextButtons>
              <Button endIcon>Default</Button>
            </ButtonDiv>



          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button size='sm'/>`}</TextButtons>
              <Button color='primary' size='sm'>Default</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button size='md'/>`}</TextButtons>
              <Button color='primary' size='md'>Default</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button size='lg'/>`}</TextButtons>
              <Button color='primary' size='lg'>Default</Button>

            </ButtonDiv>


          </ContainerButtons>
          <ContainerButtons>
            <ButtonDiv>
              <TextButtons>{`<Button color='default'/>`}</TextButtons>
              <Button >Default</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button color='primary'/>`}</TextButtons>
              <Button color='primary'>Primary</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button color='secondary'/>`}</TextButtons>
              <Button color='secondary'>Secondary</Button>
            </ButtonDiv>
            <ButtonDiv>
              <TextButtons>{`<Button color='danger'/>`}</TextButtons>
              <Button color='danger'>Danger</Button>
            </ButtonDiv>




          </ContainerButtons>


        </SecondContainer>
      </FirstContainer>

    </>



  );
}

export default Home;
