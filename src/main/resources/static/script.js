let btn = document.getElementById('btn');
btn.addEventListener("click", addUser);
function addUser() {
    const url = `http://localhost:5000/api/users/add`
    let ifirstName = document.getElementById("firstName");
    let ilastName = document.getElementById("lastName");
    let iusername = document.getElementById("username");
    let ipassword = document.getElementById("password");
    let iemail = document.getElementById("email");

    let user = {
        firstName: ifirstName.value,
        lastName: ilastName.value,
        username: iusername.value,
        password: ipassword.value,
        email: iemail.value
    };

    const options = {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res));

}
