import React from 'react';
import { Modal, Section, Form, Button } from 'react-bulma-components';
import useAddBlog from '../../hooks/useAddBlog';

function AddBlog({ show, close }) {

    const { title, setTitle , titleColor, body, setBody, bodyColor, isSaveDisabled, isAddingPost, addBlogPost } = useAddBlog();

    return (
        <Modal show={show} onClose={() => close()} >
            <Modal.Content>
                
                <Section style={{ backgroundColor: 'white' }}>
                    <Form.Field>
                        <Form.Label>Title</Form.Label>
                        <Form.Control>
                            <Form.Input 
                                color={titleColor}
                                name="title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field>
                        <Form.Label>Body</Form.Label>
                        <Form.Control>
                            <Form.Textarea 
                                color={bodyColor}
                                name="body" 
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </Form.Control>
                    </Form.Field>
                    <Button 
                        disabled={isSaveDisabled} 
                        color="success" 
                        loading={isAddingPost}
                        onClick={async () => {
                            await addBlogPost();
                            close();
                        }}>
                        Save
                    </Button>
                </Section>
               
                
            </Modal.Content>
        </Modal>
    )
}

export default AddBlog;