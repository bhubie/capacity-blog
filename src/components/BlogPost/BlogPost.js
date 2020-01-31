import React from 'react';
import { useParams } from 'react-router-dom';
import useBlogPost from '../../hooks/useBlogPost';
import { Heading, Button } from 'react-bulma-components';
import useDeleteBlogPost from '../../hooks/useDeleteBlogPost';


function BlogPost() {

    const {isLoading, title, body, error } = useBlogPost();
    const { userID, blogID } = useParams();
    const { isDeleting, isAbleToDelete, deleteBlogPost } = useDeleteBlogPost(blogID, userID);

    if(isLoading) {
        return <div>Loading</div>
    }

    if(error) {
        return <div>Error Loading Blog Post</div>
    }

    return (
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Heading>
                    {title}
                </Heading>
                {
                    isAbleToDelete ? 
                    <Button color="danger" isLoading={isDeleting} onClick={() => deleteBlogPost()}>
                        Delete Post
                    </Button>
                    :
                    undefined
                }
            </div>
            <p style={{marginTop: '15px'}}> 
                {body}
            </p>
        </div>
    );
}

export default BlogPost;