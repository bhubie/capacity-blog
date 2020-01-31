import React from "react";
import { render, fireEvent} from "@testing-library/react";
import { getByTestId } from '@testing-library/dom'
import { MemoryRouter } from 'react-router-dom';
import BlogPostSummary from "./BlogPostSummary";




describe('Blog Post Summary', () => {

    const historyMock = jest.fn();

    beforeAll(async () => {
        await jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useHistory: () => ({
              push: historyMock,
            }),
        }));
    })

    test('When clicked it should history should be called - routing the clicked blog post to the full page', () => {

        const { container } = render(
            <MemoryRouter>
                <BlogPostSummary 
                    title='test'
                    body='test'
                    id='1'
                    userId='2'
                />
            </MemoryRouter>
           
        );

        fireEvent.click(getByTestId(container, '1'));

        expect(historyMock).toHaveBeenCalledWith('1/2');
    });
});