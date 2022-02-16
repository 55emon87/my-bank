document.getElementById('login-button').addEventListener('click',function(){
   const userEmail= document.getElementById('user-mail');
   const emailDrop = userEmail.value;
//    password type
const userPass= document.getElementById('user-pass');
const passDrop = userPass.value; 
if ( emailDrop == 'sontan@bap.com' && passDrop =='secret'){
    window.location.href= 'banking.html';
    
}

})