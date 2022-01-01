var firebaseConfig = {
    apiKey: "AIzaSyBPcIn6ATnCNiWZmAApq7vLhpRTGzFJzvA",
    authDomain: "kwitter-app-697e2.firebaseapp.com",
    databaseURL: "https://kwitter-app-697e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-697e2",
    storageBucket: "kwitter-app-697e2.appspot.com",
    messagingSenderId: "745887955150",
    appId: "1:745887955150:web:b1f0687f416b1c9f69f89f"
  };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout(){
    window.location= "index.html";
    localStorage.removeItem("room_name");
    localStorage.removeItem("UserName");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
}
user_name= localStorage.getItem("UserName");
room_name= localStorage.getItem("room_name");
function send(){
    msg= document.getElementById("message").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
          message: msg,
          like: 0,
          name: user_name
    });
    document.getElementById("message").value= "";
}
