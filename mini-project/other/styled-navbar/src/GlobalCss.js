import styled from 'styled-components'

export const NavBar = styled.nav`
width: 100%;
height: 70px;
line-height: 70px;
background: orange;
padding: 0 50px;
`;

export  const UlTag = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
`;

export  const LiTag = styled.li`
margin: 0 10px;
`;

export  const LinkTag = styled.a`
font-size: 20px;
text-transform: capitalize;
padding: 0 20px;
text-decoration: none;
color: #ffff;
cursor: pointer ;
`;
