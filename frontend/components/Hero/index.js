import React, { Component } from 'react';
import styled from 'styled-components';

const Paralax = styled.div`
    /* background-image: url("../static/mts.jpg"); */
    /* background: #141e30;  */
    /* background: -webkit-linear-gradient(to top, #141e30, #243b55); */
    /* background: linear-gradient(to top, #141e30, #243b55);  */
    grid-gap: 5px;
    /* padding: 0 15px; */
    min-height: 414px;
    margin: 86px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: repeat(auto-fit, minmax(150px, 250px)); */    
    /* grid-template-rows: 250px; */
    padding: 0px 5px 5px 5px;
    text-align: center;
    background-attachment: fixed;
    /* background-position: top; */
    background-repeat: no-repeat;
    background-size: cover;
    /* border-bottom-left-radius: 1%; */
    /* border-bottom-right-radius: 1%; */
    /* border-bottom-right-radius: 100% 60%; */
    /* border-bottom-left-radius: 100% 60%; */
    /* clip-path: ellipse(100% 100% at 50% 0%); */

    >div {
        background-color: rgba(50,50,50, .1);
        border: 1px solid #3A3A3A;
        border-radius: 5px;
        }

    div:nth-of-type(1) {
            background-image: url("../static/me2.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            /* grid-row: 1 / 3; */
        }

    div:nth-of-type(2) {
        background-image: url("../static/dogs1.jpg");
        background-position: 0px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -110px 0px;

    }
    div:nth-of-type(3) {
        background-image: url("../static/health1.jpg");
        background-position: 0px;
        background-repeat: no-repeat;
        background-size: cover;
    } 

    
    
    
    @media(max-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
        
            div:nth-of-type(1) {
                grid-column: 1 / -1;
                background-position: 0px ;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url("../static/me.jpg");
            }
            div:nth-of-type(1):hover {
                grid-column: 1 / -1;
                background-position: 0px ;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url("../static/me.jpg");
            }
            div:nth-of-type(2) {
                background-image: url("../static/dogs1.jpg");
                background-position: 0px;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    @media(max-width: 700px) {
        >div {
            background-color: rgba(50,50,50, .1);
        border: 1px solid #3A3A3A;
        border-radius: 5px;
        background-position: center;
        }
        }

        @media(min-width: 500px) {
            div:nth-of-type(3) {
        background-image: url("../static/health1.jpg");
        background-position: -70px;
        background-repeat: no-repeat;
        background-size: cover;
    } 
        }
    
`;



class Hero extends Component {
    render() {
        return (
            <Paralax>
                <div>
                    <div className="me">
                    </div>
                    {/* <div className="me">
                    </div> */}
                    <h2></h2>
                </div>
                <div>
                    <div className="dogs">
                    </div>
                    {/* <div className="dogs">
                    </div> */}
                    <h2></h2>
                </div>
                <div>
                    <div className="us">
                    </div>
                    {/* <div className="us">
                    </div> */}
                    <h2></h2>
                </div>
            </Paralax>
        )
    }
}

export default Hero;