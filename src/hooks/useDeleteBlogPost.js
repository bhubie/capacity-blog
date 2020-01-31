import { useHistory } from 'react-router-dom';
import useUser from './useUser';
import { useState, useCallback } from 'react';

function useDeleteBlogPost(blogID, userID) {

    if(blogID === undefined || userID === undefined) {
        throw('passed in blogID or userID is undefined');
    }

    const [isDeleting, setIsDeleting] = useState(false);
    const history = useHistory();
    const { userID: authenticatedUser } = useUser();

    const isLoggedInUserOwnerOfBlog = authenticatedUser == userID;

    const deleteBlogPost = useCallback(async () => {
        if(isDeleting) {
            return;
        }

        setIsDeleting(true);
        await fetch(
            `http://jsonplaceholder.typicode.com/posts/${blogID}`,
            {
                method: 'DELETE'
            }
            );
        
        setIsDeleting(false);
        // Post isnt actually deleted so it cannot be filterd out when posts are refreshed from server.
        history.push('/');
    });

    return {
        isDeleting,
        isAbleToDelete: isLoggedInUserOwnerOfBlog,
        deleteBlogPost
    }
}

export default useDeleteBlogPost;