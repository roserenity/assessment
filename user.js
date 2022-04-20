const USERS_API = "https://www.mocky.io/v2/5d73bf3d3300003733081869"
var userObjList = []

function renderUsers(userObjList){
    console.log(userObjList)
    for(var user of userObjList){
        var card = '<div class="col-lg-6 col-xs-12"><div class="card shadow w-100 h-100" > <div class="card-body d-flex flex-lg-row flex-column">'
        card += '<div class="p-2 text-wrap"> <img src="assets/userphoto.png"/> </div>'
        card += '<div class="p-2"> <h3> <b>' + user.name + '</b> </h3>'
        card += 'Email: <b>'+ user.email+'</b>'
        card += '<br/> Mobile: <b>'+ user.phone+'</b>'
        card += '<br/> Company: <b>'+ user.company +'</b>'
        card += '<br/> Address: <b>'+ user.address.city +'</b>'
        card += '<br/> Website: <b>'+ user.website+'</b>'
        card += '<br/> Age: <b>'+ user.age+'</b>'
        card += '</div> </div> </div> < </div>'
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
