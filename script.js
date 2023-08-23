// document.getElementById('btn-submit').addEventListener('click', function(){

    
//    const emailField = document.getElementById('user-email');
//    const email = emailField.value;
   
//   const passwordFiled = document.getElementById('user-password');
//   const password = passwordFiled.value;
//   console.log( email, password); 

//   // password & email verify
//   if(email === 'nazmulkhan416@gmail.com' && password === 'bangladesh'){
//     console.log('valid user')
//   }
//   else{
//     console.log('invalid user')
//   }

// })



document.getElementById('btn-submit').addEventListener('click', function(){
 
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  // console.log(email);
  const passwordField = document.getElementById('user-password')
  const password = passwordField.value;
  console.log(email, password);
  // verify
  if(email === 'nazmulkhan416@gmail.com' && password === 'bangladesh'){
    console.log('valid user')
    window.location.href = 'bank.html';
  }
  else{
    alert('please correct password');
  }
})