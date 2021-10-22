const firebaseConfig = {
    apiKey: "AIzaSyBN-4Uj40jnKXfwJ2jkTBFEt181pqa8gCE",
    authDomain: "dwitter-11fc0.firebaseapp.com",
    databaseURL: "https://dwitter-11fc0-default-rtdb.firebaseio.com",
    projectId: "dwitter-11fc0",
    storageBucket: "dwitter-11fc0.appspot.com",
    messagingSenderId: "993057316165",
    appId: "1:993057316165:web:dff28028f924350366722c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;


function AddRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
});

localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html"
}