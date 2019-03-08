import react, { Component } from 'react';
import Link from 'next/link';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import KPLogo from './styled/kpLogo';

// import Cart from './Cart';
// import Search from './Search';

Router.onRouteChangeStart = () => {
    NProgress.start();
    // console.log('OnRouterChangeStart')
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
    // console.log('OnRouterChangeComplete')
};

Router.onRouteChangeError = () => {
    NProgress.done();
    // console.log('OnRouterChangeError')
};

const StyledHeader = styled.header`
    /* background-image: url("../static/health1.jpg"); */
    /* background-attachment: fixed; */
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    .bar {
        border-bottom: 5px solid #494e52 ;
        display: grid;
        grid-template-rows: auto 1fr;
        justify-content:  space-between;

        align-items: stretch;
        background-color: ${props => props.theme.offWhite};
        @media(max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
            transform: translateX()
        }
        @media(min-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
            ul {
                width: 100%;
            }
        }

    }

    ${props => props.scroll && `
    padding: 0 0 53px 0;
    `}
            @media(max-width: 700px) {
                ${props => props.scroll && `
    padding: 0;
    `}
            /* ${props => props.scroll && `
            position: fixed;
            transition: all .3s ease-in-out;
            top: 0;
            width: 100%;
`} */
        }
`;



const Svg = styled.svg`
    position: absolute;
    top: 541px;
    width: 100%;
    height: 11vw;
  /* set height to pixels if you want angle to change with screen width */
`;

const AnimationStyles = styled.div`
    .count {
        position: relative;
        transition:  0.4s;
        opacity: 1;
    }
    /* initial state of enter dot will be flipped on its back */
    .count-enter {
        opacity: 0;
    }
    .count-enter-active {
        opacity: 0;
    }
    .count-exit {
        opacity: 0;
    }
    .count-exit-active {
        opacity: 0;
    }
`;




class Header extends Component {
    state = {
        scroll: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll)
    }

    scroll = (e) => {
        if (e.path[1].scrollY > 75) {
            this.setState({ scroll: true })
        } else {
            this.setState({ scroll: false })
        }
    }
    render() {
        return (
            // <AnimationStyles>
            //     <TransitionGroup>
            //         <CSSTransition
            //             unmountOnExit
            //             className="count"
            //             classNames="count"
            //             timeout={{ enter: 400, exit: 400 }}>
                        <StyledHeader className="fadein" scroll={this.state.scroll}>
                            <div className='bar'>
                                <Link href="/">
                                    <KPLogo scroll={this.state.scroll} />
                                </Link>
                                <Nav scroll={this.state.scroll} />
                            </div>
                        </StyledHeader>
            //         </CSSTransition>
            //     </TransitionGroup>
            // </AnimationStyles> 
        )
    }
}



export default Header;