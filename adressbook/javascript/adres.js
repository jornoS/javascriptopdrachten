let personen = [];

fetch('https://randomuser.me/api/?results=10').then(function(response) {
    return response.json();
}).then(function(myJson) {

    personen = myJson.results.sort((a,b)=>{
        return (a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0);
    }
    );
    for (i = 0; i < myJson.results.length; i++) {
        personen[i] = {
            firstname: personen[i].name.first,
            lastname: personen[i].name.last,
            image: personen[i].picture.medium,
            email: personen[i].email,
            phone: personen[i].phone,
            street: personen[i].location.street,
            city: personen[i].location.city,
            state: personen[i].location.state
        };
    }

    console.log(personen);

    let infoDiv = document.querySelector('.info');
    let div = document.querySelector(".contacts");

    for (i = 0; i < personen.length; i++) {
        let user = document.createElement("div");
        let image = document.createElement("img");
        let fullName = document.createElement("h1");
        let info = document.createElement("p");

        user.addEventListener("click", function() {
            modal.style.display = "block";
            infoDiv.innerHTML = '';
            infoDiv.appendChild(info);
        });
        modal = document.getElementById('myModal');

        user.onclick = function() {
            modal.style.display = "block";

        }

        
        image.src = personen[i].image;
        fullName.innerHTML = personen[i].firstname + ' ' + personen[i].lastname;
        info.innerHTML = '<i class="fa fa-envelope-o"></i>  Email: ' + personen[i].email + '<br><br>' + '<i class="fa fa-phone"></i>  Phonenumber: ' + personen[i].phone + ' <i class="fa fa-commenting"></i><br><br>' + '<i class="fa fa-home"></i> <br>' + 'City: ' + personen[i].city + '<br>' + 'State: ' + personen[i].state + '<br>' + 'adress: ' + personen[i].street;
        
        user.setAttribute('class', 'user');
        div.setAttribute('class', 'userlist');
        
        user.append(image, fullName);
        div.appendChild(user);
      }

    });
  function closeModal() {
      modal = document.getElementById('myModal');
      modal.style.display = "none";
  }
