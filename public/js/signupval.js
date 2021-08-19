
let firstname=document.getElementById("username1");
let error1=document.getElementById("error1");
let eml2=document.getElementById("email2");
let error2=document.getElementById("error2");
let password=document.getElementById("password");
let password2=document.getElementById("password2");
let indicator=document.querySelector(".indicator");
let error3=document.getElementById("error3");
let weak=document.getElementById("weak1");
let medium=document.getElementById("medium1");
let strong=document.getElementById("strong1");
let strength=document.getElementById("strengthmeter");
let error4=document.getElementById("error4");
let phonenumber=document.getElementById("phonenumber");
let error5=document.getElementById("error5");
let regexpphonenumber=/^\d{10}$/
let regexpphonenumber1= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
let show=document.querySelector(".show");
let hide=document.querySelector(".hide");
let regexpname=/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/


error1.style.fontSize="14px";
error2.style.fontSize="14px";
error3.style.fontSize="14px";
error4.style.fontSize="14px";
error5.style.fontSize="14px";

error1.style.fontStyle="italic";
error2.style.fontStyle="italic";
error3.style.fontStyle="italic";
error4.style.fontStyle="italic";
error5.style.fontStyle="italic";

error1.style.color="white";
error2.style.color="white";
error3.style.color="white";
error4.style.color="white";
error5.style.color="white";



// -------------------Name-----------------------

function validateForm(){
  if(firstname.value.trim()==""|| firstname.value==null){
    error1.innerHTML="Please enter the field";
    firstname.style.border="2px solid rgb(135, 99, 7)";
    return false;
  }
  if(regexpname.test(firstname.value)){
    firstname.style.border="3px solid green";
    error1.innerHTML="Valid";
  }
  else{
    firstname.style.border="2px solid rgb(135, 99, 7)";
    error1.innerHTML="Invalid";
    return false;
  }

// -------------------------Phonenumber------------------------


if((regexpphonenumber.test(phonenumber.value)) || (regexpphonenumber1.test(phonenumber.value)) ){
  error5.innerHTML="Valid";
  phonenumber.style.border="3px solid green";
}
  else{
      error5.innerHTML="Invaild Phone number";
      phonenumber.style.border="2px solid rgb(135, 99, 7)";
      return false;
  }




























  // -------------Email-------------------------
  if  (eml2.value.trim()=="" || eml2.value== null){
  error2.innerHTML="Please enter the Email";
  eml2.style.border="2px solid rgb(135, 99, 7)";
    return false;
}


else{
  validateemail();
}
  if(error2.innerHTML=="Invalid Email"){
    eml2.style.border="2px solid rgb(135, 99, 7)";
  return false;
}
else{
 eml2.style.border="3px solid green";

   

}

  






 


// --------------------Password----------------------


if (password.value.trim()==""|| password.value ==null){

  error3.innerHTML="Please enter a password";
  password.style.border="2px solid rgb(135, 99, 7)";
  return false;
}
else{

  indicator.style.display="inline-block";
  indicator.style.display="flex";

}
  if(error3.innerHTML=="Strong!! Get going"){
    password.style.border="3px solid green";
error3.innerHTML="Valid"
  }else{
    return false;
  }


// ---------------------Password recheck-------------------

if(password.value!=password2.value)
{
error4.innerHTML="Password doesnot match";
password2.style.border="2px solid rgb(135, 99, 7)";
password.style.border="2px solid rgb(135, 99, 7)";
password.value='';
password2.value='';
indicator.style.display="none";
error3.innerHTML="";
return false;
}
 else{
  password2.style.border="3px solid green";
  password.style.border="3px solid green";
  error4.innerHTML="Valid";
  return true;
}

}

































// ----------------------Email--------------------------------
function validateemail(){
      let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/
      if(regexp.test(eml2.value)){
          error2.innerHTML="Valid";
          return true;   
      }
          else{
              error2.innerHTML="Invalid Email";
              eml2.style.border="2px solid rgb(135, 99, 7)";
              return false;
  }
          }
          
  


  // ----------------------Password-----------------------------------

 
 



function validatepassword(){
  let regexpStrong= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&]).{8,32}$/
  let regexpMedium=/^(?=.*[a-z])(?=.*[A-Z])|(?=.*[A-Z])(?=.*[0-9])|(?=.*[a-z])(?=.*[0-9]).{6,20}$/
  let regexpWeak=/^(?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9])|(?=.*[!@#\$%\^&]).{1,20}$/

  indicator.style.display="inline-block";
  indicator.style.display="flex";

  if (regexpWeak.test(password.value)){
   weak.style.backgroundColor="rgb(135, 99, 7)";
   error3.innerHTML="Too weak!! Cannot be accepted";
   password.style.border="2px solid rgb(135, 99, 7)";
  }
  else{
    weak.style.backgroundColor="white";
}
  
 if (regexpMedium.test(password.value)){
  medium.style.backgroundColor="rgb(135, 99, 7)";
  error3.innerHTML="Include special character and number";
  password.style.border="2px solid rgb(135, 99, 7)";
 }
 else{
  medium.style.backgroundColor="white";
}

  if (regexpStrong.test(password.value)){
  strong.style.backgroundColor="rgb(135, 99, 7)";
  error3.innerHTML="Strong!! Get going";
  password.style.border="3px solid green";
  return true;
 }
 else{
  strong.style.backgroundColor="white";
 }
  
}




// -----------------------Toggle----------------------

show.onclick=function toggle(){
password.setAttribute("type","text");
show.style.display="none";
hide.style.display="block";
}


hide.onclick= function toggle1(){
  password.setAttribute("type","password");
  hide.style.display="none";
  show.style.display="block";
  }













































   
    
    
    
     