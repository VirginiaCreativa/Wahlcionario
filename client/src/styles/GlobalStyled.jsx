import { createGlobalStyle } from 'styled-components';
import Variables from './VariableStyled';

const GlobalStyled = createGlobalStyle`
  body {
    background: ${Variables.body};
    font-family:  'Barlow', sans-serif !important;
  }
  a {
    text-decoration: none !important;
    color: ${Variables.black1};
    :hover {
      text-decoration: none !important;
      color: ${Variables.blue1};
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0;
    letter-spacing: -1px;
    color: ${Variables.black1};
  }
  p,
  li,
  abbr {
    color: ${Variables.black1};
    font-size: 1.1rem;
    font-weight: 300;
  }
  *:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  input {
    caret-color: ${Variables.blue1};
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  input,
  label,
  li,
  span {
    ::selection {
      background-color: ${Variables.blue1};
      color: #fff;
    }
  }
  .splide {
    margin-bottom: 50px;
  }
  .splide__pagination {
    bottom: -1.2em !important;
  }
  .splide__arrow svg {
    width: 1.1em !important;
    height: 1.1em !important;
    fill: ${Variables.blue1} !important;
  }
  .splide__pagination__page:hover, .splide__pagination__page.is-active {
    transform: scale(1.2) !important;
    background: ${Variables.blue1} !important;
  }
  .splide__pagination__page {
    width: 8px !important;
    height: 8px !important;
  }
  .splide__arrow {
    ::before {
      position: absolute;
      left: -3px;
      z-index: -1;
      border-radius: 100%;
      background-color: rgba(250, 250, 250, 0.3);
      width: 1.5rem;
      height: 1.5rem;
      content: '';
    }
  }

`;

export default GlobalStyled;
