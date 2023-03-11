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

user_name = localStorage.getItem("user_name_key");
room_name = localStorage.getItem("room_name_key");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name_key");
      localStorage.removeItem("room_name_key");
      window.location = "index.html";
}

function send(){
      msg=document.getElementById("message_input").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("message_input").value="";

}