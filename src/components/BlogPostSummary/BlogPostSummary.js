import React from 'react';
import { Media, Content, Level, Button } from 'react-bulma-components';



function BlogPostSummary({title, body, userId, id}) {
    return (
        <Media>
            <Media.Item>
                <Content>
                    <p>
                        <string>{ title }</string>
                        <br />
                        { body }
                    </p>
                </Content>
                <Level breakpoint="mobile">
                    <Level.Side align="left">
                        <Button link>Edit</Button>
                        <Button link>Delete</Button>
                    </Level.Side>
                </Level>
            </Media.Item>
        </Media>
    );
}

export default BlogPostSummary;