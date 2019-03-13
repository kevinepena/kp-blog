import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
// import * as d3 from "d3";
// import { select } from 'd3-selection';

const Name1 = styled.div`
    /* position: absolute; */
    /* padding-left: 24px; */
    /* padding-bottom: 5px; */
    /* left: 38px; */
    /* top: -3px; */
    /* transform: rotateY(180deg); */
    text-align: center;
    font-size: 40px;
    transform: skewX(-6deg);
    cursor: pointer;
transition: all .5s ease-in-out;
font-family: 'Lato';
font-weight: lighter;
/* color: ${props => props.theme.offWhite}; */
text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Name2 = styled.span`
    /* position: absolute; */
    /* left: 36px; */
    /* top: -7px;  */
    /* transform: (-6deg); */
    cursor: pointer;
    margin-top: 5px;
transition: all .5s ease-in-out;
font-family: 'Lato';
font-weight: lighter;
color: ${props => props.theme.darkGrey};
text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
    /* transition: all 1s; */
    /* background: linear-gradient(to bottom, #232526, #414345); */
    height: 75px;
    width: 75px;
    margin: 0 auto;
    svg {
    transition: all .5s ease-in-out;
        position: absolute;
        /* left:  15px; */

    }
    .man {
        /* z-index: 4; */
        transform: rotate(30deg) scale(1.6);
    }
    :hover .man {
        transform: translateY(10px) scale(.8) rotate(110deg) skewY(62deg);
        transform:  scale(1.5) rotate(120deg);
        transition: all .5s ease-in-out;
    }
    .iron {
        /* z-index: 3; */
        transform: translateX(0px) rotate(210deg) skewX(-60deg) skewY(23deg) scale(1.7);
        transform: scale(1.3) rotate(30deg);
    }
    :hover .iron {
        transform: translateY(-10px) scale(.8) rotate(110deg) skewY(62deg);
        transform:  scale(1.8) rotate(120deg);
        transition: all .5s ease-in-out;
    }
    span {
        font-size: 40px;
    }
    :hover span {
        transform: scale(1);
    transition: all .5s ease-in-out;
text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);

}

    `;

class kpLogo extends Component {

    state = {
        one: 0,
        two: 0,
        three: 0,
        four: 0
    }

    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
    }

    componentDidMount() {
        // console.log(this.myRef)
        // this.startPow();
    }

    startPow = () => {
        // let node = this.node;

        // var svg = d3.select('svg'),
        //     width = +svg.attr("width"),
        //     height = +svg.attr("height"),
        //     angles = d3.range(0, 2 * Math.PI, Math.PI / 200);

        // let svg = select(node),
        //     width = +svg.attr('width'),
        //     height = +svg.attr('height'),
        //     angles = d3.range(0, 2 * Math.PI, Math.PI * 200 / 600);

        // let path = svg
        //     .append('g')
        //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
        //     .attr("fill", "none")
        //     .attr("stroke-width", 1.5)
        //     .attr("stroke-linejoin", "round")
        //     .selectAll("path")
        //     .data(['#3A3A3A',"#3F6089", "#26ADE4",  '#3A3A3A'])
        //     .enter().append("path")
        //     .attr("stroke", function (d) { return d; })
        //     .style("mix-blend-mode", "darken")
        //     .datum(function (d, i) {
        //         return d3.lineRadial()
        //             .curve(d3.curveLinearClosed)
        //             .angle(function (a) { return a; })
        //             .radius(function (a) {
        //                 var t = (d3.now() / 300) * 1;
        //                 return 20 // changes radius or diamater?
        //                     + Math.cos(a * 6 - i * 2 * Math.PI / 3 + t)
        //                     * Math.pow((2 + Math.cos(a - t)) / 2, 3)
        //                     * 0.4; // changes heighgt of waves
        //             });
        //     });

        // var timer = d3.timer(function () {
        //     path.attr("d", function (d) {
        //         return d(angles);
        //     });
        // });

        // setTimeout(5000, timer.stop())

        // console.log('🔺WORKING')
    }

    render() {

        return (
            <Container>

{/* <svg fill='#3A3A3A' width="75" height="75" className="man hexagon"><g transform="translate(37.5,37.5)" fill="none" stroke-width="1.5" stroke-linejoin="round"><path stroke="#3A3A3A" style={{mixBlendMode: 'normal'}} d="M0,-21.1309444343676L17.690099440514054,-10.213383673972034L17.38749800630882,10.038676654476484L-6.451314537741989e-15,20.05852768456196L-17.589512521760433,10.15530978935267L-18.197089936790867,-10.506094773474063Z"></path><path stroke="rgba(0,180,204, 1)" style={{mixBlendMode: 'darken'}} d="M0,-18.999948290133325L16.993692305511555,-9.811312827112765L17.26127139471259,9.965799686292506L-6.415845296031401e-15,19.9482461655568L-17.08263754192899,9.8626653833015L-16.54537964108673,-9.552479389626Z"></path><path stroke="rgba(0,223,252, 1)" style={{mixBlendMode: 'darken'}} d="M0,-19.869107275498916L17.277732481040665,-9.975303498915165L17.312754826044905,9.995523659231022L-6.430311962346248e-15,19.99322614988124L-17.289374163376905,9.982024827345809L-17.219054649188696,-9.941425836899993Z"></path><path stroke="#fff" style={{mixBlendMode: 'darken'}} d="M0,-21.13094443436761L17.690099440514057,-10.213383673972036L17.38749800630882,10.038676654476484L-6.451314537741991e-15,20.058527684561962L-17.589512521760437,10.155309789352671L-18.197089936790878,-10.506094773474068Z"></path></g></svg> */}
 
                {/* <svg className="hexagon man" fill="black" width="75" height="75"><g transform="translate(37.5,37.5)" fill="none" strokeWidth="1.5" strokeLinejoin="round"><path stroke="#3A3A3A" d="M0,-19.921798890978565L17.288799969912382,-9.981693316594505L17.174579451266275,9.915748069407202L-6.222019211816766e-15,19.345599084335692L-16.545253896249918,9.552406790810585L-16.964590049275177,-9.794510631640694Z" style={{ mixBlendMode: 'darken' }}></path></g></svg> */}
                {/* <svg className="hexagon iron" fill="black" width="75" height="75"><g transform="translate(37.5,37.5)" fill="none" strokeWidth="1.5" strokeLinejoin="round"><path stroke="#3A3A3A" d="M0,-19.921798890978565L17.288799969912382,-9.981693316594505L17.174579451266275,9.915748069407202L-6.222019211816766e-15,19.345599084335692L-16.545253896249918,9.552406790810585L-16.964590049275177,-9.794510631640694Z" style={{ mixBlendMode: 'darken' }}></path></g></svg> */}
                {/* <svg className="square" fill="black" width="75" height="75"><g transform="translate(37.5,37.5)" fill="none" stroke-width="1.5" stroke-linejoin="round"><path stroke="#3A3A3A" style={{ mixBlendMode: 'darken' }} d="M0,-19.995914622319916L20.042980659785908,-1.2272786055189558e-15L2.441984607257248e-15,19.940317558968452L-20.00804438218229,3.675418126475659e-15Z"></path></g></svg> */}
                {/* <svg className="triangle man" fill="black" width="75" height="75"><g transform="translate(37.5,37.5)" fill="none" stroke-width="1.5" stroke-linejoin="round"><path stroke="#3A3A3A" style={{mixBlendMode: 'darken'}} d="M0,-19.945238079942616L16.471819697260027,9.510009536256062L-16.874356816375652,9.74241445033627Z"></path><path stroke="rgba(0,180,204, 1)" style={{mixBlendMode: 'darken'}} d="M0,-20.042583546234077L17.9804586538145,10.381022643932745L-17.667440812131282,10.200301708775767Z"></path><path stroke="rgba(0,223,252, 1)" style={{mixBlendMode: 'darken'}} d="M0,-20.012178373823303L17.509245875991702,10.108967819811161L-17.419726598559564,10.057283840888038Z"></path><path stroke="#fff" style={{mixBlendMode: 'darken'}} d="M0,-19.94523807994262L16.47181969725996,9.510009536256023L-16.874356816375613,9.742414450336248Z"></path></g></svg> */}
                {/* <svg
                    // style={{transform : 'scale(3.5)'}} 
                    ref={node => this.node = node}
                    fill="black"
                    width="75"
                    height="75"
                    className="iron"
                    >
                </svg> */}
                <Link href='/'>
                <Name1>KP</Name1>
                </Link>
                {/* <Name2>e</Name2> */}
                {/* <Name1>v</Name1> */}
                {/* <Name1>KEP</Name1> */}

            </Container>
        )
    }
}

export default kpLogo;