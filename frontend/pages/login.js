import SignUp from '../components/Login/SignUp';
import SignIn from '../components/Login/SignIn';
import RequestReset from '../components/Login/RequestReset';
import styled from 'styled-components';

const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;


    @media(max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Signup = props => (
    <Columns>
        <SignUp />
        <SignIn />
        <RequestReset className="reset" />
    </Columns>
);

export default Signup;