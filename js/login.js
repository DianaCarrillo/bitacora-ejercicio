let googleBtn = document.getElementById('login-google-btn');

  googleBtn.addEventListener('click', ()=>{
    //   console.log('diste click')
    const provider = new firebase.auth.GoogleAuthProvider();// google es nuestro proveedor y lo autentifique con firebase
    firebase.auth()  
      .signInWithPopup(provider) // popUp te va a dar la ventana de acceso a tu cuenta de google. parámetro de la variable provider que tiene la autenticación con google
      .then((result)=> { // entonces ejecuta la función que es el resultado (acceder con google)
        location.href = '../html/view1.html';
      });
  });