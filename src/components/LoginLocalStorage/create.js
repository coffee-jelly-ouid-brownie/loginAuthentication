import React from 'react';

import Checks from "./check"

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <form>
                <div>{/*get input from user*/}
                {/*Check if email in database*/}
                {/*password validation: length, numbers, capitalisations*/}
                    <label>Email:</label>
                    <input placeholder="Enter email here"/>
                </div>
                <div>
                    <h2>Password</h2>
                    <input/>
                </div>
                <div>
                    <h2>Confirm password</h2>
                    <input/>
                </div>
            </form>
            <button OnClick={Checks}>Sign up</button>
        </div>
    )
}