class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(password){
    this._password = password
    }
}

const xyz = new user("dbgr@gmai.com", "abc" )
console.log(xyz.password);
