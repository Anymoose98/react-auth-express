import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import loginStyles from './login.module.scss';

export default function () {

    const { login } = useAuth();

    const handleLogin = e => {
        e.preventDefault();
        login();
    }

    return (<>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center"><h1>Login</h1></div>
                <div >
                <form onSubmit={handleLogin} className="d-flex flex-wrap justify-content-center align-items-center">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                        <input className='form-control mx-1'
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="col-6 justify-content-center d-flex align-items-center">
                        <input className='form-control mx-1'
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="col-12 my-3 text-center">
                    <button>Loggati</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </>)

}