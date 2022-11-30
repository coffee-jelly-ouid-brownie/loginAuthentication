
//import axios from 'axios';

export default function Checks(userEmail) {
    // Assume checks and the boolean from EmailCheck() is imported 

    // Mock data for testing

    const mockList = [
        "guy1@example.com",
        "guy2@example.com",
        "guy3@example.com"
    ]
    const email = "guy3@example.com"
    const password = "abcABC5!?"
    const confirmPassword = "abcABC5!?"

    function AlertMessage() {
        let j = 1
        let errorMessages = ["This E-mail is already associated with an existing account", "Password does not contain numbers", "Password does not contain capital letters", "Password does not contain lowercase letters", "Password must be at least 8 characters", "Password does not contain special characters (E.g. !@#$%^&*", "The passwords do not match each other"]
        let alertMessage = []

        let checks = PasswordCheck()

        checks.unshift(EmailCheck(userEmail));
        if (checks.includes(false)){
            while (j <= checks.length){
                if (checks.at(j) === false){
                    alertMessage.splice(1,errorMessages.at(j))
                }
                j++;
            }
            let displayMessage = "";
            let message = "";
            
            for (message of alertMessage) {
                displayMessage += `, ${message}`;
            }

            // list of error alert messages for not meeting conditions for email and password
            return alert(displayMessage); // alert() only works with strings
        }else{
            return alert("Sign up successful!");
        }
    }

    function PasswordCheck() {
        var i = 0;
        var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        // check order: num, capital, lowercase, length, special characters, password match
        var checks = [false,false,false,false,false,false];

        while (i <= password.length){
            let character = password.charAt(i);
            if (!isNaN(character * 1)){
                let numCheck=true;
                checks.splice(1,1,numCheck)
            }
            if (character === character.toUpperCase()) {
                let capCheck=true;
                checks.splice(2,1,capCheck)
            }
            if (character === character.toLowerCase()){
                let lowCheck=true;
                checks.splice(3,1,lowCheck)
            }
            if (specialChar.test(character)){
                let specialCheck=true;
                checks.splice(-2,1,specialCheck)
            }
            }
                
            i++;
        if (password === confirmPassword){
                const passwordMatch = true
                checks.splice(-1,1,passwordMatch)
        }
        if (password.length >= 8){
            const lengthCheck = true
            checks.splice(4,1,lengthCheck)
        }

        return checks;
        
    }

    //Assume email is the email input from the user

    /**
     * GET abc.com returns a list of email addresses registered
     */
    function EmailCheck() {
        //axios.get("abc.com").then(function(
            //response
        //) {
            //Assume "response.data" turns "response" into array
            // Checks if email entered by the user is within the database already
            //if (response.data.includes(email)) {
            //    return false;
            //} else {
            //    return true;
            //}
            if (mockList.includes(email)) {
                return false;
            } else {
                return true;
            }
        //})
    }
    <AlertMessage />
}