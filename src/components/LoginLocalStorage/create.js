import React from 'react';
import axios from 'axios';

export default function Signup() {
    //Assume password is the password input from the user
    function PasswordCheck(password, confirmPassword) {
        var i = 0;
        var numCheck = false;
        var capCheck = false;
        var lowCheck = false;
        var lengthCheck = false;
        var specialCheck = false;
        var specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var passwordMatch = false;
        var errorMessages = ["Password does not contain numbers", "Password does not contain capital letters", "Password does not contain lowercase letters", "Password must be at least 8 characters", "Password does not contain special characters (E.g. !@#$%^&*", "The passwords do not match each other"]
        return(
            while (i <= password.length){
                character = password.charAt(i);
                if (!isNaN(character * 1)){
                    numCheck=true;
                }
                else{
                    if (character == character.toUpperCase()) {
                        capCheck=true;
                    }
                    if (character == character.toLowerCase()){
                        lowCheck=true;
                    }
                    if (specialChar.test(character)){
                        specialCheck=true;
                    }
                    }
                }    
                i++;
            }
            if (password == confirmPassword){
                passwordMatch=true;
            }
            if (password.length >= 8){
                lengthCheck=true;
            if (numCheck==true&&capCheck==true&&lowCheck==true&&lengthCheck==true&&specialCheck==true&&passwordMatch==true){
                return true;
            }
            else{
                if ()
            }
        )
    }
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
                    var check = <PasswordCheck />;
                    if 
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