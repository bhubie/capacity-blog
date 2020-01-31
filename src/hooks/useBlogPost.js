import useSWR from 'swr';
import { fetcher } from '../utils/utils';
import { useParams } from 'react-router-dom';

function useBlogPost() {

    const { blogID } = useParams();
    const {data, error} = useSWR(`http://jsonplaceholder.typicode.com/posts/${blogID}`, fetcher);

    const isLoading = !data;

    return {
        isLoading,
        title: isLoading? '' : data.title,
        body: isLoading? '' : data.body,
        error
    }
}

export default useBlogPost;