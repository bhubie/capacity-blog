import React from "react";
import { render } from "@testing-library/react";

import BlogPostList from './BlogPostList';
import  useBlogPosts from '../../hooks/useBlogPosts';
jest.mock('../../hooks/useBlogPosts');

describe('Blog Post List', () => {

    describe('Loading', () => {
        test('Loading should be displayed if data is loading', () => {

            useBlogPosts.mockReturnValue({
                isLoading: true
            });
    
            const { container } = render(<BlogPostList />);
    
            expect(container.textContent).toBe("Loading");
        });

        test('Loading should be displayed if data is loading', () => {

            useBlogPosts.mockReturnValue({
                isLoading: false,
                blogPosts: []
            });
    
            const { container } = render(<BlogPostList />);
    
            expect(container.textContent).not.toBe("Loading");
        });
    })

    
});