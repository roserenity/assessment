const USERS_API = "https://www.mocky.io/v2/5d73bf3d3300003733081869"
var userObjList = []

function renderUsers(userObjList){
    console.log(userObjList)
    for(var user of userObjList){
        var card = '<div class="col-lg-6 col"><div class="card shadow m-2" > <div class="card-body d-flex flex-row">'
        card += '<div class="p-2"> <img src="assets/userphoto.png"/> </div>'
        card += '<div class="p-2"> <h4 id="name"> <b>' + user.name + '</b> </h4>'
        card += '<h6> Email: <b>'+ user.email+'</b> </h6>'
        card += '<h6> Mobile: <b>'+ user.phone+'</b> </h6>'
        card += '<h6> Company: <b>'+ user.company +'</b> </h6>'
        card += '<h6> Address: <b>'+ user.address.city +'</b> </h6>'
        card += '<h6> Website: <b>'+ user.website+'</b> </h6>'
        card += '<h6> Age: <b>'+ user.age+'</b> </h6>'
        card += '</div> </div> </div> </div>'
        document.getElementById("userSection").innerHTML += card
    }
}

function filterUsers() {
    var condition = document.getElementById("ageFilter").value
    var tempUserObjList = userObjList
    const elements = document.getElementsByClassName("card")
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    if (condition === "0-20"){
        renderUsers(tempUserObjList.filter( user=> user.age <= 20))
    } else if (condition === "21-39"){
        renderUsers(tempUserObjList.filter( user=> user.age >= 21 && user.age <= 39))
    } else if (condition === "40"){
        renderUsers(tempUserObjList.filter( user=> user.age >= 40))
    } else {
        renderUsers(userObjList)
    }
}

axios.get(USERS_API)
    .then(function(response){
        var users = response.data
        for(var user of users) {
            userObjList.push(user)
        }
        renderUsers(userObjList)
    })
    .catch(function (error) {
        console.log(error);
    });