import React from 'react';
import { Navbar, Heading } from 'react-bulma-components';
import useUser from '../../hooks/useUser';

function NavigationBar() {

    const { userID } = useUser();

    return (
        <Navbar color="primary">
            <Navbar.Brand>
                <Navbar.Item>
                    <Heading size="5" textColor="white">
                        Capacity Blog
                    </Heading>
                </Navbar.Item>
            </Navbar.Brand>
            <Navbar.Container position="end">
                <Navbar.Item>
                    Welcome User {userID}
                </Navbar.Item>
            </Navbar.Container>
        </Navbar>
    );
}

export default NavigationBar;