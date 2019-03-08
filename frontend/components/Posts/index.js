import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Post from './post';
import Pagination from '../Pagination';
import { perPage } from '../../config.js';


const ALL_POSTS_QUERY = gql`
    query ALL_POSTS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
        posts(first: $first, skip: $skip, orderBy: createdAt_DESC) {
            id
            title
            description
            image
            largeImage
            tags {
                id
                hash
            }
        }
    }
`;


const Grid = styled.div`
    margin-top: 130px;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(150px, 250px));
    grid-template-columns: repeat(3, 1fr);
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
`;

class Posts extends Component {
    render() {
        return (

            <Center>
                    <Query
                        query={ALL_POSTS_QUERY}
                        variables={{
                            skip: this.props.page * perPage - perPage,
                        }}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...";
                            if (error) return `Error: ${error.message}`;
                            return <PostsList>
                                {data.posts.map((post, i) =><div className={i % 3}><Post post={post} key={post.id} /></div>)}
                            </PostsList>
                        }}
                    </Query>
                <Pagination page={this.props.page} />
            </Center>
        )
    }
}

export default Posts;
export { ALL_POSTS_QUERY };