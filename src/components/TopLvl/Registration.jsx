import React from 'react';



const Registration = () => {
    return (
        <div className="login">
            <h2>Login</h2>
            <form action="/login/" method="post">
                <input type="hidden" name="csrfmiddlewaretoken" value="11i5G0QKfc0iaUbvUQ5IOD3EyKgRXRmL"/>
                <dl>
                    <dt>Username:</dt>
                    <dd>
                        <input type="text" name="username" className="form-control"/>
                    </dd>
                    <dt>Password:</dt>
                    <dd>
                    <input type="password" name="password" className="form-control"/>
                    </dd>
                    <dd>
                    <input type="submit" value="Login" className="btn btn-default login-btn"/>
                    </dd>

                </dl>
            </form>
        </div>

    )
}
export default Registration;