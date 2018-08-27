let fileId = document.getElementById('file');
let photoContainer = document.getElementById('photo-container');
let profileContainer = document.getElementById('profile-container');
let imgPhoto = document.getElementById('img-photo');
// para file se utiliza el evento 'change'
fileId.addEventListener('change', () =>{
    imgPhoto.src = URL.createObjectURL(event.target.files[0]);
    firebase.database().ref('users').set({
        // username: user.displayName,
        profPicture: imgPhoto.src
    // quiero pintar el src de la etiqueta img que está en HTML.  Utilizo URL.createObjectoURL El nuevo objeto URL representa al objeto File especificado 

})
});

firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // estamos logueados
      mandarUsuarioDatabase(user);
    } else {
      console.log('not logged in ');
    }
  });
  
  const mandarUsuarioDatabase = (user) => {
    firebase.database().ref('users').set({
      username: user.displayName,
      profPicture: imgPhoto.src
    });
    pintarUsuario(user);
  };

  const pintarUsuario = (user) => {
      
      profileContainer.innerHTML =
      `<div class="container">
        <div class="row">
        <p class="name"> Hello  ${user.displayName}</p>
        <img src =" ${imgPhoto.src}"/>        
         </div>
         </div>`;
   
  };

  // this is a comment to update my repo