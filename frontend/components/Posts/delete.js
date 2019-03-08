import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_POSTS_QUERY } from './index';

const DELETE_POST_MUTATION = gql`
    mutation DELETE_POST_MUTATION($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }
`;

class DeletePost extends Component {

    update = (cache, payload) => {
        // Manually update the cache on client, so it matches server
        // 1. Read the cache for the posts we want
        const data = cache.readQuery({ query: ALL_POSTS_QUERY});
        console.log(payload);
        // 2. Filter deleted post out of page
        data.posts = data.posts.filter(post => post.id !== payload.data.deletePost.id);
        // 3. Put posts back
        cache.writeQuery({ query: ALL_POSTS_QUERY, data});

    }
    render() {
        return (
            <Mutation 
            mutation={DELETE_POST_MUTATION} 
            variables={{ id: this.props.id }}
            update={this.update}
            >
                {(deletePost, { error }) => {
                    return <button onClick={() => {
                        if (confirm('You sure you want to delete this?')) {
                            deletePost().catch(err => alert(err.message));
                        }
                    }}>{this.props.children}</button>
                }}
            </Mutation>
        )
    }
}

export default DeletePost;