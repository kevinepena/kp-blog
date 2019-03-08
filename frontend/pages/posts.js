import PostsComp from '../components/Posts';

const Posts = props => (
    <div>
        <PostsComp page={parseFloat(props.query.page) || 1} />
    </div>
)

export default Posts;