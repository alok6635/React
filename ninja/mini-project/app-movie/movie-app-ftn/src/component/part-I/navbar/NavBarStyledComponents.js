import React from 'react';
import styled from 'styled-components';

const NavBarStyledComponents = () => {
  return (
    <Nav>
    <Title>Movie-App</Title>
    <CartIconContainer>
    <CardImg alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
            />
      <CartCount color ="yellow" show={true} >3</CartCount>
    </CartIconContainer>
  </Nav>
  )
}
const Nav = styled.div`
    height: 70px;
	background: linear-gradient(170deg, #1bc059, #0d47a1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;
const Title =styled.div`
 font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px ;
    :hover{color:red};
`
const CartIconContainer =styled.div`
  position: relative;
    cursor: pointer;
`;
const CardImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;
const CartCount = styled.div`
    background: white;
    /* background: ${(props)=>props.color} ; */
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props)=>props.show ? "visible":"hidden"};
    `

export default NavBarStyledComponents;
