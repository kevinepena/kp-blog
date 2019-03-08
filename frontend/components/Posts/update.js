import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Form from '../styled/Form';
import Error from '../ErrorMessage';
import { object } from 'prop-types';

const SINGLE_POST_QUERY = gql`
query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id}) {
        id
        title
        image
        description
        tags {
            id
            hash
        }
    }
}
`;

const UPDATE_POST_MUTATION = gql`
    mutation UPDATE_POST_MUTATION(
        $id: ID!
        $title: String
        $description: String
    ){ updatePost(
            id: $id
            title: $title
            description: $description
        ){
            id
            title
            description
            tags {
                id
            }
        }
    }
`;

class UpdatePost extends Component {

    state = {};

    updatePost = async (e, updatePostMutation) => {
        e.preventDefault();

        const res = await updatePostMutation({
            variables: {
                id: this.props.id,
                ...this.state
            }
        })
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val })
    }


    render() {
        return (
            <Query query={SINGLE_POST_QUERY} variables={{ id: this.props.id }}>
                {(data, loading) => {


                    if (loading) return <p>Loading...</p>;
                    if (!data.data.post) return <p>ERROR! Post ID not found</p>;

                    return (

                        <Mutation mutation={UPDATE_POST_MUTATION} variables={this.state}>
                            {(updatePost, { loading, error }) => (
                                <Form onSubmit={e => this.updatePost(e, updatePost)}>
                                    <Error error={error} />
                                    <fieldset disabled={loading} aria-busy={loading}>

                                        <img src={data.data.post.image} alt={data.data.post.title} />
                                        <label htmlFor="title">
                                            Title
                    <input
                                                type="text"
                                                id="title"
                                                name="title"
                                                placeholder="Title"
                                                required
                                                defaultValue={data.data.post.title}
                                                onChange={this.handleChange}
                                                required />
                                        </label>
                                        <label htmlFor="description">
                                            Description
                    <textarea
                                                id="description"
                                                name="description"
                                                placeholder="Enter a description"
                                                defaultValue={data.data.post.description}
                                                onChange={this.handleChange}
                                                required />
                                        </label>
                                        <button type="submit">Sav{loading ? 'ing' : 'e'} Changes</button>
                                    </fieldset>
                                </Form>
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default UpdatePost;
export { UPDATE_POST_MUTATION };
