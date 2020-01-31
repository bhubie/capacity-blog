import useSWR from 'swr';
import { fetcher } from '../utils/utils';

function useBlogPosts() {

    const { data: blogPosts, error } = useSWR('http://jsonplaceholder.typicode.com/posts', fetcher);

    return {
        isLoading: !blogPosts,
        blogPosts: blogPosts? blogPosts : [],
        error
    };
}

export default useBlogPosts;