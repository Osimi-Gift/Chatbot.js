 
 //Getting the button that calls the login functions, to allow user access the chat bot
  var loginUser = document.getElementById("login");
loginUser.addEventListener("click", Allfunctions);
// this is a function that calls other functions, so unless this fuction is called those other function cannot be executed 
   function Otherfunction(){
    setTimeout(Robot, 10000);
  setTimeout(Robot2,20000);
  setTimeout(Robot3,45000);
  setTimeout(Robot4,55000);
   }
   function imageclick(){
     
     setTimeout(REMOVE,5000);
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
   const image_input = document.getElementById("image_input");
   //Along with the user picture and image
 function send() {
  // const setImage = document.getElementById("image").value;
  const reader = new FileReader();
  const uploaded_image = reader.result;
   var react = document.getElementById("reaction");
  var message = document.getElementById("msg").value;
  const msgSend = document.createElement("div");
 let timespace = document.getElementById("time");
   var x = new Date();
  let n = x.toLocaleTimeString();
  document.body.appendChild(msgSend);
  msgSend.innerHTML=`<div class="MSG" ondblclick="reaction();" style=" background:#005C4B; color:white;margin-top:10%; display:grid; justify-content:center; width:70%; border-radius:20px;text-align:center;padding-left:5%; margin-left:30%; padding:-20%;opacity:90%;Overflow-y:scroll;padding:3%; text-align:center;"><p id="msgp" style=" color:white;text-align:center; display:flex; justify-content:center;">${message}</p><p id="time" style="color:white;font-size:10px;padding-top:5%;justify-content:center;margin:auto;display:flex;">${n}  ✔️</p></div>`
  
// Userupload();

  let input = document.getElementById("msg");
   input.value ="";
   
//timespace.innerHTML=n;
paste();
}
  //const MSG = document.querySelectorAll(".MSG");
  //console.log(MSG[0]);
function paste(){
  const MSG = document.querySelectorAll(".MSG");
MSG.scrollIntoView({behavior:"smooth"});
}
//function time(){
 // let timespace = document.getElementById("time");
 // var x = new Date();
 // let n = x.toLocaleTimeString();
//timespace.innerHTML=n;
//}
var button = document.getElementById("btn");
button.addEventListener("click", send );
// This function helps to send an automatic message to the user online after it is called at certain time interval 

function Robot(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:#202C33; color:white;margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Hello, My name is Lucy 👋</p><p id="time1" style="color:grey;font-size:10px;padding-top:5%;"></p></div>`
  var x = new Date();
  let n = x.toLocaleTimeString();
  let timespace = document.getElementById("time1");
timespace.innerHTML=n;
}
function Robot2(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:#202C33; color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">How can i be of help to you ..?</p><p id="time2" style="color:grey;font-size:10px;padding-top:5%;"></p></div>`
  var x = new Date();
  let n = x.toLocaleTimeString();
  let timespace = document.getElementById("time2");
timespace.innerHTML=n;
}
function Robot3(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:#202C33;color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Our Correspondent would attend to you shortly...</p><p id="time3" style="color:grey;font-size:10px;padding-top:5%;"></p></div>`
  var x = new Date();
  let n = x.toLocaleTimeString();
  let timespace = document.getElementById("time3");
timespace.innerHTML=n;
}
function Robot4(){
  const botSend = document.createElement("div");
  document.body.appendChild(botSend);
  botSend.innerHTML=`<div onclick="Reaction();" style=" background:#202C33;color:white; margin-top:10%; display:grid; justify-content:left; width:70%; border-radius:20px; text-align:center;"><img style="border-radius:20px; width:15%;" src="Avata.jpg"><p style="text-align:center;">Thanks for your understanding 😊</p><p id="time4" style="color:grey;font-size:10px;padding-top:5%;"></p></div>`
  var x = new Date();
  let n = x.toLocaleTimeString();
  let timespace = document.getElementById("time4");
timespace.innerHTML=n;
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
  const reader = new FileReader();
  const uploaded_image = reader.result;
  var user = document.getElementById("name").value;
  let grabData ="";
 grabData.value = localStorage.getItem("Newuser");
  if( user.length > 1){
        alert("Connecting to server");
    alert("Preparing...");
        alert("Fetching....⏳");
       alert("login....⏳");
   // loginmsg.innerHTML = `${userName} just joined the conversation`;
   var loginmsg = document.createElement("div");
   var online = document.createElement("h3");
   document.body.appendChild(online);
   online.innerHTML=` <h3 style="color:black; display:flex; justify-content:center; margin:auto; font-weight:400;font-size:20px; font-family:san serrif; margin-bottom:10%;">Online</h3>`;
   
   document.body.appendChild(loginmsg);
   
   loginmsg.innerHTML=` <p style="color:black; display:flex; justify-content:center; margin:auto;"> ${user} just joined the conversation </p><div id="house" style="display:grid; justify-content:center;margin:auto;"><input style="width:100%; color:white;padding-left:20%;padding-right:20%; opacity:15%;border:none; background-color:black;" type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" onclick="imageclick()"; > <p style="display:flex;justify-content:center;margin:auto;color:red;">please insert your picture!!!</p></div><div id="display-image" style="width:25%;border-radius:20px;height:12vh; justify-content:center; margin:auto;display:flex;margin-top:10%;" src=${uploaded_image}></div>`;
   const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
  
});
  loginremove();
     ReplaceChatbot();
     Otherfunction();
     
  }
  else{
    alert(" couldn't login an error occured \n err: 504\n Field cannot be empty");
}
}
const house = document.getElementById("house");
function REMOVE(){
  const house = document.getElementById("house");
  house.remove();
}

// function helps to collect the traction given by the user and append to the chat
function reaction(){
  const react =  document.createElement("div");
  var reaction = prompt(" 😊 👍 🙌 💯 😂 🤣");
  if(reaction.length="" ){
  alert("cancelled ");
  }
  else{
    react.setAttribute("Id","reaction");
  document.body.appendChild(react);
  react.innerHTML=`<div style="background:#005C4B; margin-left:30%;width:6%;border-radius:20px;">${reaction}</div>`;
  }
}
function Reaction(){
  const react =  document.createElement("div");
  var reaction = prompt(" 😊 👍 🙌 💯 😂 🤣");
  if( reaction.length=""){
    alert ("cancelled ")
  }
  else{
  react.setAttribute("Id","reaction");
  document.body.appendChild(react);
  react.innerHTML=`<div style="background:#202C33; margin-right:30%;width:6%;border-radius:20px;">${reaction}</div>`;
  }
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
function Userupload (){
  const upload = document.getElementById("image");
  const uploadspace = document.getElementById("space");
  upload.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    uploadspace.style.backgroundImage = `url(${uploaded_image})`;
  });
    reader.readAsDataURL(this.files[0]);
  });
}

