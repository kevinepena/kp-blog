import PleaseSignIn from '../components/PleaseSignIn';
import PostComp from '../components/Posts/singlePost';

const Order = (props) => (
    <div>
        <PostComp id={props.query.id} />
    </div>
)

export default Order;