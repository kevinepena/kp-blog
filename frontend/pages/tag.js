import TagComponent from '../components/Tags';

const Tag = (props) => (
    <div>
        <TagComponent hash={props.query.hash} />
    </div>
);

export default Tag;