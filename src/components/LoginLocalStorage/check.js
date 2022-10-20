import React from "react";

export default function Checks() {
    // Assume checks and the boolean from EmailCheck() is imported 
    function AlertMessage (checks, EmailCheck()) {
        var j = 1
        var errorMessages = ["This E-mail is already associated with an existing account", "Password does not contain numbers", "Password does not contain capital letters", "Password does not contain lowercase letters", "Password must be at least 8 characters", "Password does not contain special characters (E.g. !@#$%^&*", "The passwords do not match each other"]
        var alertMessage = []
        return(
            checks.unshift(EmailCheck())
            if (checks.includes(false)){
                while (j <= checks.length){
                    if (checks.at(j) == false){
                        alertMessage.splice(1,errorMessages.at(j))
                    }
                    j++;
                }
                var alert = <ul><li>{alertMessage}</li></ul> // list of error alert messages for not meeting conditions for email and password
                return alert(alert);
            }else{
                return alert("Sign up successful!");
            }
        )
    }

    function PasswordCheck(password, confirmPassword) {
        var i = 0;
        var specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        // check order: num, capital, lowercase, length, special characters, password match
        var checks = [false,false,false,false,false,false];
        return(
            while (i <= password.length){
                character = password.charAt(i);
                if (!isNaN(character * 1)){
                    numCheck=true;
                    checks.splice(1,1,numCheck)
                }
                if (character == character.toUpperCase()) {
                    capCheck=true;
                    checks.splice(2,1,capCheck)
                }
                if (character == character.toLowerCase()){
                    lowCheck=true;
                    checks.splice(3,1,lowCheck)
                }
                if (specialChar.test(character)){
                    specialCheck=true;
                    checks.splice(-2,1,specialCheck)
                }
                }
                    
                i++;
            if (password == confirmPassword){
                    passwordMatch = true
                    checks.splice(-1,1,passwordMatch)
            }
            if (password.length >= 8){
                lengthCheck=true
                checks.splice(4,1,lengthCheck)
            }
            return checks;
            <AlertMessage />
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
                    return true;
                } else {
                    return false;
                }
                <PasswordCheck />
            )
        })
    }
    <EmailCheck />
}