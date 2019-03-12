import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import Post from '../Posts/post'

const SOME_POSTS_QUERY = gql`
    query SOME_POSTS_QUERY($hash: String!) {
        posts( where: { tags_some : {
            hash: $hash
        }}) {
            id
            title
            description
            images
            largeImages
            tags {
                id
                hash
            }
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

const PostsList = styled.div`
    margin-top: 130px;
    grid-template-rows: repeat(auto-fit, minmax(0px, 1fr));
    grid-template-columns: repeat(3, 1fr);
    display: grid;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;

    @media(max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 15px auto 0 auto;

    }
`;


class Tags extends Component {
    render() {
        // console.log(this.props.hash.length);
        return (
            <Query query={SOME_POSTS_QUERY} variables={{ hash: this.props.hash }}>
                {({ error, loading, data }) => {
                    if (error) return <Error error={error} />;
                    if (loading) return <p>Loading...</p>;
                    if (!data.posts[0]) return <p>No posts found for #{this.props.hash}</p>
                    return <Center>
                        <PostsList>
                            {data.posts.map((post, i) => <div key={i} className={i % 3}><Post post={post} key={post.id} /></div>)}
                        </PostsList>
                    </Center>
                }}
            </Query>
        )
    }
}

export default Tags;