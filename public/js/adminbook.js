
    function showFiles(){
        let inputField=document.getElementById('input');
        let file=inputField.files;
        let fileReader=new FileReader;
        fileReader.onload=function(event){
            let ImageURL=event.target.result;
            $("#preview").attr("src",`${ImageURL}`)
        }
        fileReader.readAsDataURL(file[0])
        }



        let title=document.getElementById("title");
        let author=document.getElementById("author");
        let genre=document.getElementById("genre");
        let language=document.getElementById("language");
        let textitems=document.getElementById("textitems");
        let input=document.getElementById("input");

        let error1=document.getElementById("error1");
        let error2=document.getElementById("error2");
        let error3=document.getElementById("error3");
        let error4=document.getElementById("error4");
        let error5=document.getElementById("error5");
        let error6=document.getElementById("error6");

error1.style.fontSize="14px";
error2.style.fontSize="14px";
error3.style.fontSize="14px";
error4.style.fontSize="14px";
error5.style.fontSize="14px";
error6.style.fontSize="14px";


error1.style.fontStyle="italic";
error2.style.fontStyle="italic";
error3.style.fontStyle="italic";
error4.style.fontStyle="italic";
error5.style.fontStyle="italic";
error6.style.fontStyle="italic";


error1.style.color="white";
error2.style.color="white";
error3.style.color="white";
error4.style.color="white";
error5.style.color="white";
error6.style.color="white";


function validate(){
    if(title.value.trim()==""|| title.value==null){
      error1.innerHTML="Please enter the title";
      title.style.border="2px solid  rgb(95, 79, 48)";
      return false;
    }
    else{
      
      error1.innerHTML="Valid";
      
    }
    
    if  (author.value.trim()=="" || author.value== null){
        error2.innerHTML="Please enter the Author";
        author.style.border="2px solid  rgb(95, 79, 48)";
          return false;
      }
      else{
        error2.innerHTML="Valid";
        
      }
    
      if  (genre.value.trim()=="" || genre.value== null){
        error3.innerHTML="Please enter the Genre";
        genre.style.border="2px solid  rgb(95, 79, 48)";
          return false;
      }
      else{
        error3.innerHTML="Valid";
        
      }

      if  (language.value.trim()=="" || language.value== null){
        error4.innerHTML="Please enter the language";
        language.style.border="2px solid  rgb(95, 79, 48)";
          return false;
      }
      else{
        error4.innerHTML="Valid";
        
      }


      if  (textitems.value.trim()=="" || textitems.value== null){
        error5.innerHTML="Please enter the Synopsis";
        textitems.style.border="2px solid  rgb(95, 79, 48)";
          return false;
      }
      else{
        error5.innerHTML="Valid";
        
      }


      if  (input.value.trim()=="" || input.value== null){
        error6.innerHTML="Please choose the image file";
        input.style.border="2px solid  rgb(95, 79, 48)";
          return false;
      }
      else{
        error6.innerHTML="Valid";
        return true;
       
      }
    
    
}