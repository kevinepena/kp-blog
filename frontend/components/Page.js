import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import Footer from '../components/Footer';


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    mintGreen: 'rgba(182,216,192, 1)',
    // flashBlue: 'rgba(0,223,252, 1)',
    // blue: 'rgba(0,180,204, 1)',
    skyBlue: '#4E6E9D',
    blue: '#2c3e50',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
    `;

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Lato';
        src: url('/static/Lato-Regular.ttf')
        format('truetype');
        font-weight: lighter;
        font-style: normal;
    }
    @font-face {
        font-family: 'coalbrush';
        src: url('/static/coalbrush.otf')
        format('opentype');
        font-weight: lighter;
        font-style: normal;
    }
    /* @font-face {
        font-family: 'Lato';
        src: url('/static/Lato-Regular.ttf')
        format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Lato';
        src: url('/static/Lato-Bold.ttf')
        format('truetype');
        font-weight: bold;
        font-style: normal;
    } */
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
            box-sizing: inherit;
    }
    body {
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            line-height: 2;
            font-family: 'radnika_next';
            outline: none;
            /* background-color: rgba(52,56,56, 1); */
    }
    a {
        text-decoration: none;
        color: ${theme.black}
    }

    img {
    animation: 2s ease-out 0s 1 fadeIn;
    }
    @keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes fadeIn {
    0% {
      /* transform: translateY(-100%); */
      opacity: 0;
    }
    100% {
      /* transform: translateY(0); */
      opacity: 1;
    }
  }

  .fadein {
    animation: 1s ease-out 0s 1 fadeIn;
  }

.heartbeat {
    -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
}

.heartbeatinf {
  -webkit-animation-name: heartBeat;
  animation-name: heartBeat;
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
    
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage className='fadein'>
                    <Header />
                    <GlobalStyle />
                    <Meta />
                    <Inner>{this.props.children}</Inner>
                    <Footer />
                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;