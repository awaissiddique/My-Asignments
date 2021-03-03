// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       document.location.href = "Quiz.html"  
      
  
//     //   var user = firebase.auth().currentUser;
  
//     //   if(user != null){
  
//     //     var email_id = user.email;
//     //     document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
  
//     //   }
  
//     } else {
//       // No user is signed in.
//       document.location.href = "index.html"
      
  
//     }
//   });
function signup() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    
    var obj = {
        email,
        password
    }
    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password)
        .then(function (success) {
            window.alert('User Created Successfully', success.user.uid)
            document.location.href = "index.html"
        })
        .catch(function (error) {
            window.alert('Kaam Kharab hua hai', error.message)
        })
    
}


function login(){

    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("password").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
    .then(function (success) {
      console.log('User Login Successfully', success.user.uid)
      document.location.href = "Quiz.html"
    })
    
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
//function signin() {
    // var email = document.getElementById('email').value
    // var password = document.getElementById('password').value
    // var obj = {
    //     email,
    //     password
    // }
    // firebase.auth().signInWithEmailAndPassword(obj.email, obj.password)
    //     .then(function (success) {
    //         console.log('User Login Successfully', success.user.uid)
    //     })
    //     .catch(function (kaamkharab) {
    //         console.log('Kaam Kharab hua hai', kaamkharab.message)
    //     })
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //           // User is signed in.
    //           document.location.href = "Quiz.html"  
              
          
            //   var user = firebase.auth().currentUser;
          
            //   if(user != null){
          
            //     var email_id = user.email;
            //     document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
          
            //   }
          
//             } else {
//               // No user is signed in.
//               document.location.href = "index.html"
              
          
//             }
//           });
       
//         document.location.href = "Quiz.html"  
        
        
// }

function signOut(){
    firebase.auth().signOut() 
    window.alert("signout Complete")
    document.location.href = "index.html"
}

// signOut()