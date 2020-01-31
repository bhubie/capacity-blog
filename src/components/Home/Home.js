import React, { useState } from 'react';
import { Button } from 'react-bulma-components';
import BlogPostList from '../BlogPostList/BlogPostList';
import AddBlog from '../AddBlog/AddBlog';

function Home() {

    const [showAddPost, setAddPost] = useState(false);

    return (
        <React.Fragment>
            <div style={{display: 'flex', justifyContent: 'end'}}>
                <Button color="info" onClick={() => setAddPost(!showAddPost)} style={{marginBottom: '15px'}}>
                    Add Post
                </Button>
            </div>
            <BlogPostList />
            <AddBlog show={showAddPost} close={() => setAddPost(!showAddPost)}/>
        </React.Fragment>
        
    )
}

export default Home;