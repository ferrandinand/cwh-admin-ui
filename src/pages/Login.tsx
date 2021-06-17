import axios from 'axios';
import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Login = () => {
    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
          const {data} = await axios.post('auth/login', {
              username,
              password
          });
          localStorage.setItem('token', data.access_token)
          setRedirectToLogin(true);
        } catch (err) {
            localStorage.removeItem('token')
        } 
    }


    if (redirectToLogin) {
        return <Redirect to={'/'}/>;
    }

    return (
        <main className="form-signin">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    )
};

export default Login;