import { useState, useCallback } from "react";
import useUser from './useUser';


function useAddBlog() {

    const [title, setTitle] = useState('');
    const isTitlePresent = title.length > 0;

    const [body, setBody] = useState('');
    const isBodyPresent = body.length > 0;

    const [isAddingPost, setIsAddingPost] = useState(false);

    const { userID: authenticatedUser } = useUser();

    const addBlogPost = useCallback(async () => {
        if(isAddingPost) {
            return;
        }

        setIsAddingPost(true);

        await fetch(`http://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userID: authenticatedUser
            })
        });

        setIsAddingPost(false);

    });

    return {
        title,
        setTitle,
        titleColor: isTitlePresent ? 'success' : 'danger',
        body,
        setBody,
        bodyColor: isBodyPresent ? 'success' : 'danger',
        isSaveDisabled: !isTitlePresent || !isBodyPresent,
        isAddingPost,
        addBlogPost
    }
}

export default useAddBlog;