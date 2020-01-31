import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import BlogPostList from './BlogPostList';
import  useBlogPosts from '../../hooks/useBlogPosts';
jest.mock('../../hooks/useBlogPosts');

describe('Blog Post List', () => {

    const historyMock = jest.fn();

    beforeAll(async () => {
        await jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
              push: historyMock,
            }),
        }));
    })

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
    });

    test('passed in blog posts should be rendered', () => {
        useBlogPosts.mockReturnValue({
            isLoading: false,
            blogPosts: [ {
                title: 'test 1',
                body: 'body 1',
                userId: 1,
                id: 1
            },
            {
                title: 'test 2',
                body: 'body 2',
                userId: 2,
                id: 2
            }
            ]
        });

        const { container, getByText } = render(
            <MemoryRouter>
                <BlogPostList />
            </MemoryRouter>
        );

        expect(getByText('test 1')).toBeTruthy();
    })

    
});