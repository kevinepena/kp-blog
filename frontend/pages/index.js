import Posts from '../components/Posts';
import styled from 'styled-components';
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
            Follow me
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