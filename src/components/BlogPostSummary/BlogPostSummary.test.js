import React from "react";
import { render, fireEvent, waitForElement} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import BlogPostSummary from "./BlogPostSummary";
import useUser from '../../hooks/useUser';

jest.mock('../../hooks/useUser');


describe('Blog Post Summary', () => {

    const historyMock = jest.fn();

    beforeAll(async () => {

        useUser.mockReturnValue({
            userID: 2,
        });

        await jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
              push: historyMock,
            }),
        }));
    })

    test('When clicked it should history should be called - routing the clicked blog post to the full page', async () => {
        const { container, getByTestId, findByTestId } = render(
            <MemoryRouter>
                <BlogPostSummary 
                    title='test'
                    body='test'
                    id='1'
                    userId={2}
                />
            </MemoryRouter>
           
        );

        fireEvent.click(getByTestId('1'));

        expect(historyMock.mock.calls.length).toBe(1);
        //expect(historyMock).toHaveBeenCalledWith('1/2');
    });

    test('if authenticated user is owner of the blog post, delete button should be visible', () => {
        
        useUser.mockReturnValue({
            userID: 2,
        });

        const { container, queryByText } = render(
            <MemoryRouter>
                <BlogPostSummary 
                    title='test'
                    body='test'
                    id='1'
                    userId='2'
                />
            </MemoryRouter>
          
        );

        expect(queryByText('Delete')).toBeTruthy();
    });

    test('if authenticated user is not the owner of the blog post, delete button should be not visible', () => {
        
        useUser.mockReturnValue({
            userID: 1,
        });

        const { container, queryByText } = render(
            <MemoryRouter>
                <BlogPostSummary 
                    title='test'
                    body='test'
                    id='1'
                    userId='2'
                />
            </MemoryRouter>
          
        );

        expect(queryByText('Delete')).toBeNull();
    });
});