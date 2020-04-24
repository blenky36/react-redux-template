import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { loginUser } from '../../_thunks/userThunks';

const Login = ({ onSubmitClicked }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>
            <div style={{ width: '30%' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Enter any details in these fields - no checks are currently being performed
                </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={() => onSubmitClicked(username, password)}>
                        Submit
            </Button>
                </Form>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    onSubmitClicked: (username, password) => dispatch(loginUser(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);