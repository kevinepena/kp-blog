import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from '../styled/Title';
import PostStyles from '../styled/PostStyles';
import DeletePost from './delete';
import User from '../User';
import CarouselComp from '../Carousel';

function hasPermission(user, permissionsNeeded) {
    const matchedPermissions = user.permissions.filter(permissionTheyHave =>
        permissionsNeeded.includes(permissionTheyHave)
    );
    if (!matchedPermissions.length) {
        return false;
    } else {
        return true;
    }
}



export default class Posts extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired,
    }

    render() {
        const { post } = this.props;

        const { tags } = post;

        let arr = [];

        tags[0] && post.tags.forEach(tag => {
            arr.push(<Link key={tag.id} href={{ pathname: '/tag', query: { hash: tag.hash } }}><a>#{tag.hash}</a></Link>)
        });


        return (
            <User>
                {({ data: { me } }) => (


                    <PostStyles>
                        <CarouselComp images={post.images} />
                        <Title>
                            <Link href={{
                                pathname: '/post',
                                query: { id: post.id }
                            }}>
                                <a>{post.title}</a>
                            </Link>
                        </Title>
                        <p>{post.description}</p>
                        <div className="tags">
                            {arr[0] ? arr : 'Loading...'}
                        </div>


                        <div className="buttonList">
                            {me && hasPermission(me, ['ADMIN']) && (
                                <>
                                    <Link href={{
                                        pathname: '/update',
                                        query: { id: post.id }
                                    }}>
                                        <a>✏️</a>
                                    </Link>
                                    <DeletePost id={post.id}>
                                        ❌
                                    </DeletePost>
                                </>
                            )}
                            {me && (
                                <>
                                    <button>❤️</button>
                                    <button>Comment</button>
                                </>
                            )}
                        </div>
                    </PostStyles>
                )}
            </User>
        )
    }
}


{/* { ? <Link href="/createpost"><a>Post</a></Link> : ''} */ }