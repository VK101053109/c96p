user_name = localStorage.getItem("user_name_key");
document.getElementById("welcome_name").innerHTML = "Welcome " + user_name;
var firebaseConfig = {
  apiKey: "AIzaSyC23ZtY56UttSihwrDrIsUB2emTq-isvqI",
  authDomain: "c94p-974e3.firebaseapp.com",
  databaseURL: "https://c94p-974e3-default-rtdb.firebaseio.com",
  projectId: "c94p-974e3",
  storageBucket: "c94p-974e3.appspot.com",
  messagingSenderId: "671321345768",
  appId: "1:671321345768:web:f539c81b31815de1fc835d"
};
firebase.initializeApp(firebaseConfig);

function logout() {
  localStorage.removeItem("user_name_key");
  localStorage.removeItem("room_name_key");
  window.location = "index.html";
}

function addroom() {
  folder_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(folder_name).update({
    purpose: "room created"
  })
  localStorage.setItem("room_name_key", r_name);
  window.location = "kwitter_message.html";


}

function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log(Room_names);
        row = '<div id="' + Room_names + '" class="room_name" onclick="redirecttoroom(this.id)">' + Room_names + '</div><hr>';
        document.getElementById("output").innerHTML +=row;

      });
    });
}
getData();

function redirecttoroom(room_id){
  localStorage.setItem("room_name_key",room_id);
  window.location="kwitter_message.html";
}