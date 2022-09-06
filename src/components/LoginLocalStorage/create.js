import React from 'react';
import axios from 'axios';

export default function Signup() {
    //Assume email is the email input from the user
    function EmailCheck(email) {
        axios.get("abc.com").then(function(
            response
        ) {
            return(
                //Assume "response.data" turns "response" into array
                // Checks if email entered by the user is within the database already
                if (response.data.includes(email)) {
                    alert("This email is already associated with an account");
                } else {
                    <PasswordCheck />;
                }
            )
        })
    }
    return(
        <div>
            <h1>Signup</h1>
            //get input from user
            //Check if email in database
            //password validation: length, numbers, capitalisations
            <form>
                <div>
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
            <button onclick="EmailCheck()">Sign up</button>
        </div>
    )
}