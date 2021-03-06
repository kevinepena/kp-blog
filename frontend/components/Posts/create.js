import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Form from '../styled/Form';
import Error from '../ErrorMessage';
// import { ALL_ITEMS_QUERY } from './Items';

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $images: [String]!
        $largeImages: [String]!
        $tags: [String!]!
        $content: String
    ) {
        createPost(
            title: $title
            description: $description
            images: $images
            largeImages: $largeImages
            tags: $tags
            content: $content
        ) {
            id
        }
    }
`;

class CreateItem extends Component {

    state = {
        title: '',
        description: '',
        images: [],
        largeImages: [],
        content: '',
        tags: []
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val })
    }

    uploadFile = async e => {

        let files = e.target.files;
        let filesArr = [];

        for (let i = 0; i < e.target.files.length; i++) {
            filesArr.push(files[i])
        }

        filesArr.forEach(async file => {
            const data = new FormData();
            data.append('file', file);
            data.append('upload_preset', 'kpblog');

            const res = await fetch
                ('https://api.cloudinary.com/v1_1/kevinpena/image/upload', {
                    method: 'POST',
                    body: data
                });

            const fileJ = await res.json();
            this.setState({
                images: [...this.state.images, fileJ.secure_url],
                largeImages: [...this.state.largeImages, fileJ.eager[0].secure_url]
            })
        })
    }

    render() {

        let empty = [];

        if (this.state.images.length > 0) {
            for (let i = 0; i < this.state.images.length; i++) {
                empty.push(<img key={i} style={{ width: '200px' }} src={this.state.images[i]} />)
            }
        }

        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} >
                {(createPost, { loading, error }) => (
                    <Form onSubmit={async e => {
                        e.preventDefault();
                        let words = await this.state.tags.split('#');
                        await words.shift();
                        words = await words.slice();
                        words = await words.map(word => word.toLowerCase());
                        words = await words.map(word => word.trim());
                        // console.log(this.state)
                        const res = await createPost({
                            variables: {
                                title: this.state.title,
                                description: this.state.description,
                                images: this.state.images,
                                largeImages: this.state.largeImages,
                                content: this.state.content,
                                tags: words
                            }
                        });

                        Router.push({
                            pathname: '/post',
                            query: { id: res.data.createPost.id }
                        })
                    }}>
                        <Error error={error} />
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="File">
                                Image
                    <input
                                    type="file"
                                    id="file"
                                    name="file"
                                    multiple
                                    placeholder="Upload an image(s)"
                                    // value={this.state.images}
                                    onChange={this.uploadFile}
                                    required
                                />

                            </label>

                            {empty[0] && empty}
                            <label htmlFor="title">
                                Title
                    <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    required />
                            </label>
                            <label htmlFor="description">
                                Description
                    <textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter a description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    required />
                            </label>
                            <label htmlFor="content">
                                Content
                    <textarea
                                    id="content"
                                    name="content"
                                    placeholder="Content"
                                    value={this.state.content}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <label htmlFor="tags">
                                Tags
                    <input
                                    type="text"
                                    id="tags"
                                    name="tags"
                                    placeholder="Tag"
                                    value={this.state.tags}
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </Form>
                )}
            </Mutation >

        )
    }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
