import UpdateItem from '../components/Posts/update';

const Update = (props) => (
    <div>
        <UpdateItem id={props.query.id} />
    </div>
)

export default Update;