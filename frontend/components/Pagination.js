import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styled/PaginationStyles';
import { perPage } from '../config';

const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        postsConnection {
            aggregate {
                count
            }
        }
    }
`;

const Pagination = props => {
    return (
        <Query query={PAGINATION_QUERY}>
            {({ data, loading, error }) => {
                const count = data.postsConnection.aggregate.count;
                const pages = Math.ceil(count / perPage);
                const page = props.page;
                return (
                    <PaginationStyles>
                        <Head>
                            <title>Sick Fits! Page {page} of {pages}</title>
                        </Head>
                        <Link prefetch
                            href={{
                                pathname: 'posts',
                                query: { page: page - 1 }
                            }}>
                            <a className="prev" aria-disabled={page <= 1}>◀</a>
                        </Link>
                        <p>Page {props.page} of {pages}</p>
                        <p>{count} posts total</p>
                        <Link prefetch
                            href={{
                                pathname: 'posts',
                                query: { page: page + 1 }
                            }}>
                            <a className="prev" aria-disabled={page >= pages}>▶</a>
                        </Link>
                    </PaginationStyles>
                )
            }}
        </Query>
    )
}

export default Pagination;