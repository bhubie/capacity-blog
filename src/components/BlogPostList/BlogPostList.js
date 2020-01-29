import React from 'react';
import useBlogPosts from '../../hooks/useBlogPosts';
import BlogPostSummary from '../BlogPostSummary/BlogPostSummary';



function BlogPostList() {

    const { isLoading, blogPosts, error } = useBlogPosts();
    
    if(error) {
        return <div>Failed To Load</div>
    }

    if(isLoading) {
        return <div>Loading</div>
    }

    return (
        <React.Fragment>
            {blogPosts.map(post => <BlogPostSummary title={post.title} body={post.body} userId={post.userId} id={post.id} />)}
        </React.Fragment>
    );

};

export default BlogPostList;