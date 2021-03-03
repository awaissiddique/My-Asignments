function signup(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
  
    alert("SignUp Complete")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    // ..
  });
  
}
function login(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var obj = {
        email,
        password
    }
    firebase.auth().signInWithEmailAndPassword(obj.email, obj.password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    document.location.href = "todo.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode)
  });
}
function Signout(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert("signoutComplete")
    document.location.href = "index.html"
  }).catch((error) => {
    // An error happened.
    //alert("koi masla hai")
    alert(error)
  });
  
}





























var ulListDiv = document.getElementById('ulList');
var listDivv = document.getElementById('listDivv');
var mainListDiv = document.getElementById('mainListDiv');




function addToDo(){
    var inputField = document.getElementById('inputField');
    var inputText = document.createTextNode(inputField.value);
    var li = document.createElement('li');
    li.setAttribute('class','liList rounded shadow d-flex justify-content-around align-middle align-items-center')
    var listBtnDiv = document.createElement('div');
    listBtnDiv.setAttribute('class', 'container d-flex justify-content-end')
    var listBtn = document.createElement('button');
    listBtn.setAttribute('class','listBtn')
    listBtn.setAttribute('onclick','editBtn(this)')
    var listDelBtn = document.createElement('button');
    listDelBtn.setAttribute('class','listBtn')
    listDelBtn.setAttribute('onclick','delBtn(this)')
    var listBtnText = document.createTextNode('Edit');
    var listDelBtnText = document.createTextNode('Delet');
    listBtn.appendChild(listBtnText)
    listDelBtn.appendChild(listDelBtnText)
    listBtnDiv.appendChild(listBtn)
    listBtnDiv.appendChild(listDelBtn)
    li.appendChild(inputText)
    li.appendChild(listBtnDiv)
    ulListDiv.appendChild(li)
    inputField.value = "";
    inputText = document.createTextNode(inputField)
}
function editBtn(e){
    var editText = e.parentNode.parentNode.firstChild;
    var userText = prompt("Enter the new value",editText.nodeValue)
    editText.nodeValue = userText
    console.log(userText)
}
function delBtn(e){
    var li = e.parentNode.parentNode;
    li.remove();

}
function delAll(){
    
    ulListDiv.innerHTML = "";
}