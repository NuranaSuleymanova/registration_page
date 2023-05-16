const container=document.querySelector(".container");
const register=document.createElement("div");
register.className="register";
container.appendChild(register);



//  create h1 tag

const h=document.createElement("h1");
h.className="registerName";
register.appendChild(h);
h.innerHTML="Register"


// append input div to register div

const input=document.querySelector(".input");
register.appendChild(input);

const registerBtn=document.querySelector("#registerButton");


class RegiterInfo
{
    constructor(name,email,password,passRetype)
    {
        this.name=name;
        this.email=email;
        this.password=password;
        this.passRetype=passRetype;
    }
}

const fname=document.querySelector("#name");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const retypePassword=document.querySelector("#RetypePassword");

const Info=[];


registerBtn.addEventListener('click',()=>
{

   
    
   const personName=fname.value;
   const personEmail=email.value;
   const personPass=password.value;
   const passRetype=retypePassword.value;
   
//    Validate email
   const validateEmail = (personEmail) => {
    return personEmail.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const ValidatePassword=(personPass)=>
  {
    if(personPass.length>8)
    {
        return true;
    } 
  }


   let PersonInfo=new RegiterInfo(personName,personEmail,personPass,passRetype);

  const matchPassword=(personPass,passRetype)=>
  {
       if(personPass==passRetype)
       {
        return true;
       }
  }

   if((personName && personName.replace(/\s/g,"") !== "") && validateEmail(personEmail) && ValidatePassword(personPass))
   {
    if(matchPassword(personPass,passRetype) ){
        Info.push(PersonInfo);
        swal("Successful Registration!", "You clicked the button!", "success")
        document.querySelector("#name").value="";
        document.querySelector("#email").value="";
        document.querySelector("#password").value="";
        document.querySelector("#RetypePassword").value="";
    }
    else 
    {
        alert("Password did not match!");
    }
   }
   else 
   {
    alert("Duzgun daxil edin!");
   }
 
//    console.log(PersonInfo);
     
console.log(Info);
});




// Show password //


const seePass=document.querySelector(".seePass");
const seeRetypePass=document.querySelector(".seeRetypePass");
seePass.addEventListener('click' ,()=>
{
   const typePass=password.getAttribute("type")
   === "password" ? "text" :"password";
    password.setAttribute("type",typePass);
  
} );


seeRetypePass.addEventListener('click' ,()=>
{
   const typePass=retypePassword.getAttribute("type")
   === "password" ? "text" :"password";
   retypePassword.setAttribute("type",typePass);
  
} );