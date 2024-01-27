const myform=document.loginform;
const username=myform.txtusername;
const password=myform.txtpassword;
const mybutton=myform.btnlogin;

mybutton.addEventListener("click",(e)=>{
    alert(username.value+","+password.value);
})
