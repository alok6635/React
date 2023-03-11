import React from 'react'
import styled from 'styled-components'


const Section = () => {
    const Wrapper = styled.section`
    width : 100%;
    margin :0 auto;
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
    
export default Section
