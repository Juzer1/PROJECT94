
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDWBxex5zaMQD_tcmOHRsmwVP51jmL8OxU",
      authDomain: "letschat-dfec3.firebaseapp.com",
      projectId: "letschat-dfec3",
      storageBucket: "letschat-dfec3.appspot.com",
      messagingSenderId: "511990592913",
      appId: "1:511990592913:web:3a04603b76eb17fce95630"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
