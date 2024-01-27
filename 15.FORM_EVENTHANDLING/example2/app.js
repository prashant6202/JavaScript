const myForm = document.myfrm;
const txtFno = myForm.txtfno;
const txtSno = myForm.txtsno;
const txtRes = myForm.txtresult;
const btnAdd = myForm.btnadd;
const btnClear = myForm.btnclear;

btnAdd.addEventListener("click", () => {
  let sum = Number(txtFno.value) + Number(txtSno.value);
  txtRes.value = sum;
});

btnClear.addEventListener("click",()=>{
    txtFno.value="";
    txtSno.value="";
    txtRes.value="";
    txtFno.focus();
})
