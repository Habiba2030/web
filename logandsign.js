var users = [
    { username: "alaa", password: "123" , age:"25",phonenum : "1235-456-7895"},
    { username: "malak", password: "456", age:"20",phonenum : "1236-4980-7398" },
    { username: "habiba", password: "789", age:"30",phonenum : "3732-4973-3429" }
];

function validateLogin() {
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;

    for (var i = 0; i < users.length; i++) {
        if (users[i].username === inputUsername && users[i].password === inputPassword) {
            alert("Login successful");
            return true;
           
        }
       
    }

    alert("Invalid username or password");
    return false;
}

function validateSignup() {
    var inputUsername = document.getElementById("username").value;
    var inputPassword = document.getElementById("password").value;
    var inputAddress = document.getElementById("address").value;
    var inputPhoneNumber = document.getElementById("phoneNumber").value;
    var inputGender = document.querySelector('input[name="gender"]:checked');
    var inputAge = document.getElementById("age").value;

  
    if (!inputGender) {
        alert("Please select gender");
        return false;
    }
    

    users.push({
        username: inputUsername,
        password: inputPassword,
        address: inputAddress,
        phoneNumber: inputPhoneNumber,
        gender: inputGender.value,
        age: inputAge
    });

    alert("Registration successful");
    return false; 
}

function forgotpassword()
{
    try
    {
        let newuser = document.getElementById("nusername").value;
        let newpass = document.getElementById("npassword").value;
        
      
        for(let i = 0; i < users.length; i++)
        {
            if(users[i].username === newuser)
            {
                users[i].password === newpass;
              
                alert("Password Updated");
                return true;
            }
            else if (userfound == false)
            {
                alert("User not found");
                return false;
            }
        }
    }
    catch(error)
    {
        console.log("An error occurred: " + error.message);
        return false;
    }
}