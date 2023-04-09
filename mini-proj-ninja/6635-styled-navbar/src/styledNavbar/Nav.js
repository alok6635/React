import React from "react";
import { NavBar, UlTag, LiTag, LinkTag } from "../GlobalCss";
import styled from 'styled-components'

const Nav = () => {
  return (
    <div>
      <NavBar>
        <UlTag>
          <LiTag>
            <LinkTag>Home</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>About Us</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Services</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Gallary</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Contact Us</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Services</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag>Admissions</LinkTag>
          </LiTag>
        </UlTag>
      </NavBar>
    </div>
  );
};

// button section -
export const ButtonWrap = () => {
  
  const Wrapper = styled.section`
  width : 100%;
display: flex;
justify-content: space-around;
`;
  const Button = styled.button`
  border: none;
  background: red;
  color: #fff;
  padding: 10px ;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 900;
  text-align: center;
  `;
  const BlueButton = styled(Button)`
  background: blue;
  `;
  const OrangeButton = styled(Button)`
  background: ${(props) => props.green ? 'green' : 'orange'};
  `;
      return(
       <Wrapper>
      <Button>Log In</Button>
      <BlueButton>Register</BlueButton>
      <OrangeButton green>Log In</OrangeButton>
       </Wrapper>  
      ) 
  }
export default Nav;
