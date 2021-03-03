function storagelocal(){
    var heading1 = document.getElementById('heading1');
    heading1.innerHTML = "Your Result is " + localStorage.getItem("quizMarks")
}

storagelocal()


// function signOut(){
//     firebase.auth().signOut().then(() => {
//         // Sign-out successful.
//         console.log("Signout Successful")
//       }).catch((error) => {
//         // An error happened.
//         console.log("Kaam Kharab Hai")
//       });
//       document.location.href = "index.html" 
// }

