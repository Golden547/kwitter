
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBEZefQ1dzen-mZT1P4izi12PyUvwMD9Os",
      authDomain: "kwitter-89770.firebaseapp.com",
      databaseURL: "https://kwitter-89770-default-rtdb.firebaseio.com",
      projectId: "kwitter-89770",
      storageBucket: "kwitter-89770.appspot.com",
      messagingSenderId: "1082419370135",
      appId: "1:1082419370135:web:324297154ebea5a430b1d2",
      measurementId: "G-VTHMFBJNQD"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "Adding the room name"
});
localStorage.setItem("room_name". room_name);
window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name - "+Room_names);
       row= "<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#" +Room_names + "<div> <hr>";
       document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location("index.html");
}