 
 //Getting the button that calls the login functions, to allow user access the chat bot
  var loginUser = document.getElementById("login");
loginUser.addEventListener("click", Allfunctions);
// this is a function that calls other functions, so unless this fuction is called those other function cannot be executed 
   function Otherfunction(){
    setTimeout(Robot, 5000);
  setTimeout(Robot2,15000);
  setTimeout(Robot3,40000);
  setTimeout(Robot4,50000);
   }
   // collecting users details 
   const userName = document.getElementById("name").value;
   
   const userPassword = document.getElementById("password").value;
   
   // This setTimeout function helps to call the function that temoves the chat container after 10 millisecond 
  setTimeout(removeChatbot,10);
  setTimeout(newremove,10);
  //Getting the container that house the chat details 
  const Chatbot = document.getElementById("chatbot");
  const loginForm = document.getElementById("form");
  const newForm = document.getElementById("Newuser-container");
  function loginremove(){
     loginForm.remove();
   }
   function newremove(){
     newForm.remove();
   }
   function ReplaceChatbot(){
     document.body.appendChild(Chatbot);
   }
   // this function helps to kick start the process, it helps to call other functions once the user has successfully login 
   
   //this function helps to create the environment for the chat 
   
   function Allfunctions(){
     uservalidation();
     
   }
   //This function create get the message by the user and appends it to the body of the chat container...
   
   //Along with the user picture and image
 function send() {
  // const setImage = document.getElementById("image").value;
   var react = document.getElementById("reaction");
  var message = document.getElementById("msg").value;
  const msgSend = document.createElement("div");
  document.body.appendChild(msgSend);
  msgSend.innerHTML=`<div onclick="reaction();"style=" background:white; color:white;margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;margin-left:30%; padding:-20%;"><img style="border-radius:20px; width:15%;" src="GIFT.jpg" alt="Avata.jpg" ><p style=" color:black;">${message}</p></div>`
  let input = document.getElementById("msg");
   input.value ="";
}
var button = document.getElementById("btn");
button.addEventListener("click", send );
// This function helps to send an automatic message to the user online after it is called at certain time interval 

function Robot(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:green; color:white;margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Hello, My name is Lucy 👋</p></div>`
}
function Robot2(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:green; color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">How can i be of help to you ..?</p></div>`
}
function Robot3(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:green;color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Our Correspondent would attend to you shortly...</p></div>`
}
function Robot4(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:green;color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Thanks for your understanding 😊</p></div>`
}
function removeChatbot(){
  Chatbot.remove();
}
/*function removeChatbot(){
  Chatbot.remove();
}
removeChatbot();
const loginUser = document.getElementById("#login");
loginUser.addEventListener("click", function);
const function = ()=>{
  loginForm.remove();
  
  
}*/

// This function helps to validate to ensure the user makes an actual submission 
const user = document.getElementById("name").value;
function uservalidation(){
  //var loginmsg = document.getElementById("loginmsg");
  var user = document.getElementById("name").value;
  let grabData ="";
 grabData.value = localStorage.getItem("Newuser");
  if( user.length > 1){
    alert("login....⏳");
   // loginmsg.innerHTML = `${userName} just joined the conversation`;
   var loginmsg = document.createElement("div");
   var online = document.createElement("h3");
   document.body.appendChild(online);
   online.innerHTML=` <h3 style="color:white; display:flex; justify-content:center; margin:auto; font-weight:400;font-size:20px; font-family:san serrif; margin-bottom:10%;">Online</h3>`;
   document.body.appendChild(loginmsg);
   loginmsg.innerHTML=` <p style="color:white; display:flex; justify-content:center; margin:auto;"> ${user} just joined the conversation </p>`;
  loginremove();
     ReplaceChatbot();
     Otherfunction();
  }
  else{
    alert(" couldn't login an error occured \n err: 504\n Try again or check your internet connection");
}
}

// function helps to collect the traction given by the user and append to the chat
function reaction(){
  const react =  document.createElement("div");
  var reaction = prompt(" 😊 👍 🙌 💯 😂 🤣");
  
  react.setAttribute("Id","reaction");
  document.body.appendChild(react);
  react.innerHTML=`<div style="background:white; margin-left:30%;width:6%;border-radius:20px;">${reaction}</div>`;
}
function Reaction(){
  const react =  document.createElement("div");
  var reaction = prompt(" 😊 👍 🙌 💯 😂 🤣");
  
  react.setAttribute("Id","reaction");
  document.body.appendChild(react);
  react.innerHTML=`<div style="background:green; margin-right:30%;width:6%;border-radius:20px;">${reaction}</div>`;
  react.innerHTML=`<div style="background:green; margin-right:30%;width:6%;border-radius:20px;">${reaction}</div>`;
}
// Creating a localStorage


let database = "";
let Newuser = document.getElementById("newuser").value;
let storage = "";
 storage.value  = localStorage.setItem("Newuser",`${Newuser}`);
 let grabData ="";
 grabData.value = localStorage.getItem("Newuser");

function signup (){
let Newuser = document.getElementById("newuser").value;
let Newpassword = document.getElementById("password").value;
const grabData = localStorage.getItem("Newuser");
const storage  = localStorage.setItem("Newuser",`[name:${Newuser},password:${Newpassword}]`);
  alert(grabData);
  newForm.remove();
  document.body.appendChild(finalForm)
}
const finalForm = document.getElementById("form");
function signupNewuser(){
  var finalForm = document.getElementById("form");
  finalForm.remove();
 document.body.appendChild(newForm);
}