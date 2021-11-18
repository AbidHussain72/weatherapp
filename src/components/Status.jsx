import React from 'react'
import styled from 'styled-components';
let IconUrl = "http://openweathermap.org/img/wn/";

const Container = styled.div`
margin:10px 0px 0px 5.5vw;
width:90vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
border-radius:6px;
flex-direction:column;
`;

const CityName = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight:600;
font-size:4rem;
color:#fff;
margin:0;
text-shadow: 2px 2px 4px #48a8d9;
`;
const Icon = styled.h5`
margin:0;
font-size:7rem;

`;
const Degree = styled.h1`
color:#0f0f0f;
font-size:4rem;
margin:0;
`;
const IconImg = styled.img`
width:70px;
`;
const MinMax = styled.h3``;
const MinMaxVal = styled.span`
padding:0 10px;
`;
const Description = styled.h4`
padding:5px 0;`;
const Status = (props) => {
 return (
  <Container>
   <CityName>{props.city} ,{props.country}</CityName>
   <Icon><IconImg src={IconUrl+props.icon+'.png'}/></Icon>
   <Degree>{props.temp_celsius}&deg;</Degree>
   {minmaxTemp(props.temp_max,props.temp_min)}
<Description>{props.description}</Description>

  </Container>
 )
}

function minmaxTemp(min,max){
 return(
  <MinMax>
<MinMaxVal>{min}&deg;</MinMaxVal>
<MinMaxVal>{max}&deg;</MinMaxVal>
  </MinMax>
 )
}

export default Status
