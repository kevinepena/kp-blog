import react, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import KPLogo from './styled/kpLogo';
import Button from './styled/hamburgerButton';
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
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;

    .navbtn {
        display: none;
    }

    ul {
        width: 100%;
    }

    > .bar {
        
        border-bottom: 5px solid #494e52 ;
        display: grid;
        grid-template-rows: auto 1fr;
        justify-content:  space-between;
        align-items: stretch;
        background-color: ${props => props.theme.offWhite};
        grid-template-columns: 1fr;
        justify-content: center;

        @media(max-width: 700px) {
            grid-template-columns: repeat(2, 1fr);
            > div:nth-of-type(1) {
                justify-content: left;
                margin: 0 0 0 5px;
            }   
            .navbtn {
                justify-self: right;
                display: block;
                margin: 0px;
                z-index: 9;
            }
            ul {
            transform: translateY(-105%);
            position: absolute;
            top: 0;
            transition: all .5s;
            height: 100vh;
        a, button {
            position: relative;
            text-align: center;
            /* background-color: rgba(220, 220, 220, .6); */
            text-align: center;
        }
        }


}
.open {
    transform: translateY(0%);
    height: 100vh;
    transition: all .5s;
    position: absolute;
    top: 0;
    z-index: 8;
    overflow: hidden;
}

    }

    ${props => props.scroll && `
        padding: 0 0 53px 0;
        `}
    @media(max-width: 700px) {
            ${props => props.scroll && `
            padding: 0;
        `}

ul {
            display: grid;
            text-shadow: 1px 1px 1px rgba(0,0,0,.9);
        }

        }
    
`;





class Header extends Component {
    state = {
        scroll: false,
        mobile: false,
        open: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll);
        window.addEventListener('resize', this.resize);
    }

    resize = (e) => {
        if (e.path[0].screen.availWidth < 700) {
            this.setState({ mobile: true })
        } else {
            this.setState({ mobile: false })
        }
    }

    scroll = (e) => {
        if (e.path[1].scrollY > 75) {
            this.setState({ scroll: true })
        } else {
            this.setState({ scroll: false })
        }
    }

    openMobile = () => {
        this.setState({open: !this.state.open})
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
            <StyledHeader scroll={this.state.scroll} >
                <div className='bar'>
                    <Link href="/">
                        <KPLogo scroll={this.state.scroll} />
                    </Link>
                {/* {this.state.mobile && <div className="navbtn"><button onClick={this.openMobile}>=</button></div>} */}
                    <div onClick={this.openMobile} className="navbtn"><Button open={this.state.open}>=</Button></div>
                    <Nav 
                    openMobile={this.openMobile} 
                    open={this.state.open} 
                    mobile={this.state.mobile} 
                    scroll={this.state.scroll} />
                </div>

            </StyledHeader>
            //         </CSSTransition>
            //     </TransitionGroup>
            // </AnimationStyles> 
        )
    }
}



export default Header;