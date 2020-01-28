import React from 'react';

import { Navbar } from 'react-bulma-components';

function NavigationBar() {
    return (
        <Navbar color="primary">
            <Navbar.Brand>
                <Navbar.Item>
                    Capacity Blog
                </Navbar.Item>
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavigationBar;