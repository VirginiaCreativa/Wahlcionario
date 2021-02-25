import React from 'react';
import styled from 'styled-components';
import Variables from '../../styles/VariableStyled';

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100vw;
  height: 88.7vh;
  .sk-fading-circle {
    position: relative;
    margin: 0 auto;
    width: 60px;
    height: 60px;
  }

  .sk-fading-circle .sk-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sk-fading-circle .sk-circle::before {
    display: block;
    margin: 0 auto;
    border-radius: 100%;
    background-color: ${Variables.blue1};
    width: 15%;
    height: 15%;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    content: '';
  }
  .sk-fading-circle .sk-circle2 {
    transform: rotate(30deg);
  }
  .sk-fading-circle .sk-circle3 {
    transform: rotate(60deg);
  }
  .sk-fading-circle .sk-circle4 {
    transform: rotate(90deg);
  }
  .sk-fading-circle .sk-circle5 {
    transform: rotate(120deg);
  }
  .sk-fading-circle .sk-circle6 {
    transform: rotate(150deg);
  }
  .sk-fading-circle .sk-circle7 {
    transform: rotate(180deg);
  }
  .sk-fading-circle .sk-circle8 {
    transform: rotate(210deg);
  }
  .sk-fading-circle .sk-circle9 {
    transform: rotate(240deg);
  }
  .sk-fading-circle .sk-circle10 {
    transform: rotate(270deg);
  }
  .sk-fading-circle .sk-circle11 {
    transform: rotate(300deg);
  }
  .sk-fading-circle .sk-circle12 {
    transform: rotate(330deg);
  }
  .sk-fading-circle .sk-circle2::before {
    animation-delay: -1.1s;
  }
  .sk-fading-circle .sk-circle3::before {
    animation-delay: -1s;
  }
  .sk-fading-circle .sk-circle4::before {
    animation-delay: -0.9s;
  }
  .sk-fading-circle .sk-circle5::before {
    animation-delay: -0.8s;
  }
  .sk-fading-circle .sk-circle6::before {
    animation-delay: -0.7s;
  }
  .sk-fading-circle .sk-circle7::before {
    animation-delay: -0.6s;
  }
  .sk-fading-circle .sk-circle8::before {
    animation-delay: -0.5s;
  }
  .sk-fading-circle .sk-circle9::before {
    animation-delay: -0.4s;
  }
  .sk-fading-circle .sk-circle10::before {
    animation-delay: -0.3s;
  }
  .sk-fading-circle .sk-circle11::before {
    animation-delay: -0.2s;
  }
  .sk-fading-circle .sk-circle12::before {
    animation-delay: -0.1s;
  }

  @-webkit-keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }

  @keyframes sk-circleFadeDelay {
    0%,
    39%,
    100% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
  }
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <div className="sk-fading-circle">
        <div className="sk-circle1 sk-circle" />
        <div className="sk-circle2 sk-circle" />
        <div className="sk-circle3 sk-circle" />
        <div className="sk-circle4 sk-circle" />
        <div className="sk-circle5 sk-circle" />
        <div className="sk-circle6 sk-circle" />
        <div className="sk-circle7 sk-circle" />
        <div className="sk-circle8 sk-circle" />
        <div className="sk-circle9 sk-circle" />
        <div className="sk-circle10 sk-circle" />
        <div className="sk-circle11 sk-circle" />
        <div className="sk-circle12 sk-circle" />
      </div>
    </LoadingStyle>
  );
};

export default Loading;
