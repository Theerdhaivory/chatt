// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
background: rgba(255,255,255,0.8);float: none;border-radius: 15px;
    window.location = "chat_room.html";
    */
}



