import Posts from '../components/Posts';
import styled, { keyframes } from 'styled-components';
import Img from '../components/Hero';

const Follow = styled.div`
    transform: skewX(-6deg);
    font-family: 'coalbrush';
    position: absolute;
    font-size: 100px;
    text-shadow: 1px 1px 1px rgba(30,30,30,.2);

    @media(max-width: 700px) {
        transform: skewX(0deg);
        top: 115px;
        line-height: 80px;
        font-size: 80px;
    }

    @media(max-width: 360px) {
        transform: skewX(0deg);
        top: 115px;
        line-height: 80px;
        font-size: 60px;
    }

    /* transition: scale 1s; */

    svg:nth-of-type(1) {
        position: absolute;
        z-index: -1;
        animation: bounce 3.5s ease-in-out 2s infinite alternate;
        g {
            transform: scale(3);
            /* animation: growbig 1.5s; */
        }
    }

    svg:nth-of-type(2) {
        position: absolute;
        left: -50px;
        top: -19px;
        z-index: -2;
        animation: bounce 2.5s ease-in-out 2s infinite alternate;
        g {
            transform: scale(2);
            /* animation: grow 1.5s ; */
        }
    }
    svg:nth-of-type(3) {
        position: absolute;
        right: -200px;
        top: 80px;
        z-index: -1;
        animation: bounce 4.5s ease-in-out 2s infinite alternate;
        g {
            transform: scale(2);
            /* animation: grow 1.5s; */
            @keyframes grow {
                0% {
                    /* transform: translateY(-100%); */
                    opacity: 0;
                    transform: scale(0);
                }
                100% {
                    /* transform: translateY(0); */
                    opacity: 1;
                    transform: scale(2);
                }
            }
        }
    }


    @keyframes growbig {
        0% {
      /* transform: translateY(-100%); */
            opacity: 0;
            transform: scale(0);

    }
    100% {
      /* transform: translateY(0); */
      opacity: 1;
      transform: scale(3);
    }
    }

/* 
span:before {
    content: "";
    position: absolute;
    left: -5%;
    width: 110%;
    height: 40px;
    background-color: gold;
    background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
    z-index: -1;
    bottom: 22px;
    transform: skewX(-6deg) skewY(-1deg);
} */

`;

const Journey = styled.div`
    transform: skewX(-6deg);
    font-family: 'coalbrush';
    position: absolute;
    font-size: 100px;
    text-shadow: 1px 1px 1px rgba(30,30,30,.2);
    top: 475px;
    right: 170px;

    span {
        position: absolute;
        right: 20px;
        top: 80px;
    }

    @media(max-width: 1140px) {
        transform: skewX(0deg);
        line-height: 200px;
        margin-top: 10px;
        top: 495px;
        right: 50px;
    }

    @media(max-width: 600px) {
        transform: skewX(0deg);
        line-height: 200px;
        font-size: 75px;
        margin-top: 10px;
        right: 20px;
    }

    @media(max-width: 360px) {
        transform: skewX(0deg);
        line-height: 200px;
        font-size: 60px;
        margin-top: 10px;
        right: 20px;
    }
`;

const Skew = styled.div`
    background: ${props => `linear-gradient(130deg, ${props.theme.skyBlue} 0%, ${props.theme.blue} 100%)`};
    transform: skewX(0deg) skewY(-15deg);
    /* transform-style: rotateY preserve-3d; */
    div > div{
            transition: all .5s ease-in-out;
            /* transform-style: preserve-3d; */
            transform: skewX(0deg) skewY(15deg) scale(.6);
        }
    div > div:hover{
            transition: all .5s ease-in-out;
        }

    div > div:nth-of-type(3):hover {
        transform: skewY(15deg) skewX(0deg) scale(.66);
        background-image: url("https://res.cloudinary.com/kevinpena/image/upload/v1552189536/kpblog/mgal9lzl5rolqfokz6xe.jpg");
        background-position: center;
    }

    div > div:nth-of-type(2):hover {
        transform: skewY(15deg) skewX(0deg) scale(.77);
        background-image: url("https://res.cloudinary.com/kevinpena/image/upload/v1552189513/kpblog/eibbi1speacak0sxrunx.jpg");
        background-position: 0;
    }


    @media (min-width: 500) {
        div > div:nth-of-type(1):hover {
        transform: skewY(15deg) skewX(0deg) rotateY(-180deg)  scale(.66);
        background-image: url("https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg");
        background-position: -210px;
    }
    }

    @media all and (min-width: 500px) and (max-width: 900px) {
        div > div:nth-of-type(2):hover {
        transform: skewY(15deg) skewX(0deg) scale(.66);
        background-image: url("https://res.cloudinary.com/kevinpena/image/upload/v1552189513/kpblog/eibbi1speacak0sxrunx.jpg");
        background-position: -59px 0px;
    }
    }

    @media(max-width: 500px) {
        div > div:nth-of-type(1) {
        transform: skewY(15deg) skewX(0deg) rotateY(-180deg)  scale(.6);
        background-image: url("https://res.cloudinary.com/kevinpena/image/upload/v1552189523/kpblog/jixklxjrghsgzipiwqfo.jpg");
        background-position: center;
    }
    }

`;

const Home = (props) => (
    <div style={{ paddingBottom: '50px' }}>
        <Follow className="fadein">
            <svg height="200" width="350" id="cloud1">
                <g>
                    <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2"></polygon>
                    <polygon points="0,30 9,37 3,50" fill="#c7c2d1"></polygon>
                    <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7"></polygon>
                    <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789"></polygon>
                    <polygon points="27,18 22,36 33,44" fill="#acabb9"></polygon>

                    <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#c7c2d1"></polygon>
                    <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc"></polygon>
                    <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3"></polygon>
                    <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1"></polygon>
                    <polygon points="58,65 75,37 82,57" fill="#9897a7"></polygon>
                    <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2"></polygon>

                    <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9"></polygon>
                    <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda"></polygon>
                    <polygon points="81,31 82,47 95,35" fill="#a2a2b0"></polygon>
                    <polygon points="82,47 95,35 105,45 91,53" fill="#878892"></polygon>
                    <polygon points="105,45 95,35 106,22" fill="#a2a2b0"></polygon>
                    <polygon points="106,22 95,35 90,16" fill="#dbd6dd"></polygon>
                </g>
            </svg>
            <svg height="200" width="350" id="cloud1">
                <g>
                    <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2"></polygon>
                    <polygon points="0,30 9,37 3,50" fill="#c7c2d1"></polygon>
                    <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7"></polygon>
                    <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789"></polygon>
                    <polygon points="27,18 22,36 33,44" fill="#acabb9"></polygon>

                    <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#c7c2d1"></polygon>
                    <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc"></polygon>
                    <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3"></polygon>
                    <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1"></polygon>
                    <polygon points="58,65 75,37 82,57" fill="#9897a7"></polygon>
                    <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2"></polygon>

                    <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9"></polygon>
                    <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda"></polygon>
                    <polygon points="81,31 82,47 95,35" fill="#a2a2b0"></polygon>
                    <polygon points="82,47 95,35 105,45 91,53" fill="#878892"></polygon>
                    <polygon points="105,45 95,35 106,22" fill="#a2a2b0"></polygon>
                    <polygon points="106,22 95,35 90,16" fill="#dbd6dd"></polygon>
                </g>
            </svg>
            <svg height="200" width="350" id="cloud1">
                <g>
                    <polygon points="0,30 8,19 27,18 22,36 9,37" fill="#d5d6e2"></polygon>
                    <polygon points="0,30 9,37 3,50" fill="#c7c2d1"></polygon>
                    <polygon points="3,50 9,37 22,36 33,44 14,55" fill="#a8a9b7"></polygon>
                    <polygon points="14,55 33,44 36,52 23,58" fill="#7a7789"></polygon>
                    <polygon points="27,18 22,36 33,44" fill="#acabb9"></polygon>

                    <polygon points="31,11 51,4 66,1 83,13 83,23 78,23" fill="#c7c2d1"></polygon>
                    <polygon points="27,18 31,11 54,6 56,32 33,40 29,36" fill="#d0d0dc"></polygon>
                    <polygon points="29,36 58,65 42,67 31,57" fill="#9694a3"></polygon>
                    <polygon points="33,40 56,32 75,37 58,65" fill="#a2a1b1"></polygon>
                    <polygon points="58,65 75,37 82,57" fill="#9897a7"></polygon>
                    <polygon points="56,32 54,6 80,14 82,57 75,37" fill="#d7d6e2"></polygon>

                    <polygon points="80,15 84,17 88,30 85,50 81,51" fill="#9d9da9"></polygon>
                    <polygon points="90,16 82,20 81,31 95,35" fill="#cdcdda"></polygon>
                    <polygon points="81,31 82,47 95,35" fill="#a2a2b0"></polygon>
                    <polygon points="82,47 95,35 105,45 91,53" fill="#878892"></polygon>
                    <polygon points="105,45 95,35 106,22" fill="#a2a2b0"></polygon>
                    <polygon points="106,22 95,35 90,16" fill="#dbd6dd"></polygon>
                </g>
            </svg>
            {/* <span> */}
            <span>
                Follow me
                </span>
            {/* </span> */}
        </Follow>
        <Journey className="fadein">
            <span>
                On
                </span>
            <br />
            my journey
            </Journey>
        <div style={{ paddingTop: '50px', overflow: 'hidden', minHeight: '720px' }}>
            <Skew className="fadein">
                <Img />
            </Skew>
        </div>

        <Posts page={parseFloat(props.query.page) || 1} />

    </div>
);

export default Home;