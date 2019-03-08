import PleaseSignIn from '../components/PleaseSignIn';
import PostComp from '../components/Posts/singlePost';

const Order = (props) => (
    <div>
        <PleaseSignIn>
            <PostComp id={props.query.id} />
        </PleaseSignIn>
    </div>
)

export default Order;