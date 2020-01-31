import React from 'react';
import { Button, Card, Heading } from 'react-bulma-components';
import { useHistory } from "react-router-dom";
import useDeleteBlogPost from '../../hooks/useDeleteBlogPost';

function BlogPostSummary({title, body, userId, id}) {

    const history = useHistory();
    const { isDeleting, isAbleToDelete, deleteBlogPost } = useDeleteBlogPost(id, userId);

    return (
        <Card  
            onClick={() => {
                history.push(`${userId}/${id}`);
            }} 
            id={id} 
            data-testid={id}
            style={{marginBottom: '15px', cursor: 'pointer'}}>
                <Card.Content>
                    <p>
                        <Heading size={4} style={{marginBottom: '5px'}}>
                            { title }
                        </Heading>
                        { body }
                    </p>
               { isAbleToDelete ?   
                    <Button 
                        color="danger" 
                        loading={isDeleting} 
                        onClick={(e) => {
                            e.stopPropagation();
                            deleteBlogPost();
                        }}
                        style={{marginTop: '5px'}}
                    >
                        Delete
                    </Button>
                    :
                    undefined
                }
            </Card.Content>
        </Card>
    );
}

export default BlogPostSummary;