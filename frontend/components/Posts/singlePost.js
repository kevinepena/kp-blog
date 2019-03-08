import React, { Component } from 'react';
import gql from 'graphql-tag';
import Head from 'next/head';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Error from '../ErrorMessage';

const SingleItemStyles = styled.div`
    max-width: 1200px;
    margin: 2rem auto;
    box-shadow: ${props => props.theme.bs};
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .details {
        margin: 3rem;
        font-size: 2rem;
    }
`;


const SINGLE_POST_QUERY = gql`
    query SINGLE_POST_QUERY($id: ID!) {
        post(where: {id: $id}) {
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

class SingleItem extends Component {
    render() {
        return (
            <Query query={SINGLE_POST_QUERY} variables={{ id: this.props.id }}>
                {({ error, loading, data }) => {
                    if (error) return <Error error={error} />;
                    if (loading) return <p>Loading...</p>;
                    if (!data.post) return <p>No item found for {this.props.id}</p>
                    const item = data.post;

                    return <SingleItemStyles>
                        <Head>
                            <title>KP | {item.title}</title>
                        </Head>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </SingleItemStyles>
                }}
            </Query>
        )
    }
}

export default SingleItem;