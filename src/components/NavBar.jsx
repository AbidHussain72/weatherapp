import React from 'react'
import styled from "styled-components";
const Container = styled.div`
margin-top:20px;
margin-left:5vw;
width:90vw;
border-radius:4px;
height:40px;
background-image: linear-gradient(180deg, #39b5fa, #2ea3f8);
padding: 2px 10px;
display:flex;
align-items: center;
border-top: 1px solid #73ccfb;
box-shadow: #48a8d9 0 1px 2px;
`;
const Left = styled.div`
width:30%;
`;
const Logo = styled.h1`
color:#fff;
font-family: 'Montagu Slab', serif;
text-shadow: 2px -2px 2px #a9abad;

`;

const Right = styled.div`
display:flex;
width:70%;
justify-content:space-between;


`;

const From = styled.form`

width:100%;

`;
const Input = styled.input`
width:38%;
height:25px;
background:transparent;
border:none;
border-bottom:1px solid #fff;
margin-right:10px;
color:#fff;
font-family:'poppins',sans-serif;
   font-size:1rem;
::placeholder{
   color:#fff;
   font-family:'poppins',sans-serif;
   font-size:1rem;
}
&:active {
   outline: none;
   box-shadow: unset
}
&:focus{
   outline: none;
   box-shadow: unset;
}
`;
const Button = styled.button`
width:18%;
font-size:1rem;
background-image: linear-gradient(180deg, #39b5fa, #2ea3f8);
border: 1px solid #73ccfb;
box-shadow: #48a8d9 0 1px 2px;
border-radius:5px;
padding:8px 0;
cursor:pointer;
color:#fff;
font-family:'poppins',sans-serif;
`;
const NavBar = (props) => {
 return (

   <Container>
<Left>
 <Logo>Weather Report</Logo>
 </Left>
<Right>
<From onSubmit={props.loadWeather}>
   <Input type="text" name="city" placeholder="City" autocomplete="off"/>
    <Input type="text" name="country" placeholder="Country" autocomplete="off"/>
    <Button>Get Weather </Button>
</From>

</Right>
   </Container>
 
 )
}

export default NavBar
