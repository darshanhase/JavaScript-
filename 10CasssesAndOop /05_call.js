 function setUsername(username){
    //complex database calls
    this.username  = username

 }

 function createUser(username,email){
    
    // Explicitely call krna padega  

    setUsername.call(this,username) 
    this.emaiil = email;
 }

 const user1 = new createUser("xyz", "xyz@gmail.com")
 console.log(user1);
 