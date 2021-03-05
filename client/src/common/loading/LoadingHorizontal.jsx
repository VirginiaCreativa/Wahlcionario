import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
  .cssload-jumping {
    display: block;
    position: relative;
    margin: 20px auto;
    width: 100%;
  }

  .cssload-jumping,
  .cssload-jumping * {
    box-sizing: border-box;
  }

  .cssload-jumping span {
    display: inline-block;
    border-radius: 487px;
    background: rgb(40, 103, 238);
    background-clip: padding-box;
    width: 8px;
    height: 8px;
  }

  .cssload-jumping span:nth-child(1) {
    animation: scale 1.15s 0.12s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .cssload-jumping span:nth-child(2) {
    animation: scale 1.15s 0.23s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .cssload-jumping span:nth-child(3) {
    animation: scale 1.15s 0.35s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .cssload-jumping span:nth-child(4) {
    animation: scale 1.15s 0.46s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }
  .cssload-jumping span:nth-child(5) {
    animation: scale 1.15s 0.58s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.9, 0.9);
      background: rgb(30, 143, 255);
    }
    50% {
      transform: scale(1, 1);
      margin: 0 3px;
      background: rgb(61, 161, 255);
    }
    100% {
      transform: scale(0);
    }
  }

  @-o-keyframes scale {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.9, 0.9);
      background: rgb(30, 143, 255);
    }
    50% {
      transform: scale(1, 1);
      margin: 0 3px;
      background: rgb(61, 161, 255);
    }
    100% {
      transform: scale(0);
    }
  }

  @-ms-keyframes scale {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.9, 0.9);
      background: rgb(30, 143, 255);
    }
    50% {
      transform: scale(1, 1);
      margin: 0 3px;
      background: rgb(61, 161, 255);
    }
    100% {
      transform: scale(0);
    }
  }

  @-webkit-keyframes scale {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.9, 0.9);
      background: rgb(30, 143, 255);
    }
    50% {
      transform: scale(1, 1);
      margin: 0 3px;
      background: rgb(61, 161, 255);
    }
    100% {
      transform: scale(0);
    }
  }

  @-moz-keyframes scale {
    0% {
      transform: scale(0);
    }
    25% {
      transform: scale(0.9, 0.9);
      background: rgb(30, 143, 255);
    }
    50% {
      transform: scale(1, 1);
      margin: 0 3px;
      background: rgb(61, 161, 255);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const LoadingHorizontal = () => {
  return (
    <LoadingStyled>
      <div className="cssload-jumping">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </LoadingStyled>
  );
};

export default LoadingHorizontal;
