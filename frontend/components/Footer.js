import styled from 'styled-components';
import react, { Component } from 'react';
// import World from '../components/World';

const Foot = styled.footer`
    background-color: ${props => props.theme.black};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    color: ${props => props.theme.lightgrey};
    font-size: 10px;
    padding: 20px 0;

    a {
    color: ${props => props.theme.lightgrey};
    text-decoration: underline;
    }

    div p {
        vertical-align: middle;
        font-size: 10px;
    }

    div:nth-of-type(1) > p {
        margin-left: 15px;
    }
    div:nth-of-type(2) {
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-self: center;
        vertical-align: middle;
    }
    div:nth-of-type(3) {
        text-align: right;
        display: flex;
        flex-direction: row;
        justify-self: right;
        vertical-align: middle;
        margin-right: 15px;
    }

    div:nth-of-type(2) > p:nth-of-type(2) {
        text-align: center;
        margin: 5px 10px 0px 10px;
    }

    .heart:hover {
        -webkit-animation-name: heartBeat;
        animation-name: heartBeat;
        -webkit-animation-duration: 1.3s;
        animation-duration: 1.3s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
    }
`;

class Footer extends Component {

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
        if ((e.path[1].innerHeight + e.path[1].scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.setState({ scroll: true })
        }
    }
    
    render() {

    return(


    <Foot>

        <div>
            <p>

        © 2019 <a href="https://kevinpena.io">Kevin Peña</a>. All rights reserved.
            </p>
        </div>
        <div>
            <p>
            Made with 
            </p>
            <p>

            {/* <span style={{display: 'inline', margin: '0 15px'}}>     */}
            <svg className={this.state.scroll ? 'heartbeat heart' : 'heart'} version="1.1" width="25px" height="25px" viewBox="0 0 90 60">
                <path fill="none" stroke="#ff6961" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="
                M45.137,23.041c4.912-24.596,40.457-27.775,42.128-0.435c1.398,22.88-21.333,40.717-42.128,50.522 M45.137,23.041
                C40.225-1.555,5.057-4.734,3.387,22.606c-1.398,22.88,20.955,40.717,41.75,50.522"/> 
                </svg>
            {/* </span> */}
                </p>
            <p>
                in SMTX
                </p>
        </div>
        <div>

        <p>
            {/* <button> */}
                Follow me on
            {/* </button>   */}
            {/* <World /> */}
        </p>
        </div>
    </Foot>
)}
    }

export default Footer;