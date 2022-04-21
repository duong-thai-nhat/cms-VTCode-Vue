import axios from 'axios'
let dataUser;

axios.get(
    'http://localhost:3000/users'
    )
    .then(function (response) {
        console.log(response.data)
        dataUser = response.data
        return dataUser
    })
console.log(dataUser);