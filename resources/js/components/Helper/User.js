import Store from "./Store";
import Token from "./Token"
class User {
    responseAfterLogin(res){
       const access_token = res.data.access_token;
       const username = res.data.name;
       if(Token.isValid(access_token)){
           Store.store(access_token,username);
       }
    }

    hasToken(){
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            return Token.isValid(storedToken) ? true : false;
        }
        return false;
    }
    login(){
        return this.hasToken();
    }

    logout(){
        Store.clear();
    }

    name(){
        if(this.login()){
            return localStorage.getItem('user');
        }
    }


    id(){
        if(this.login()){
            const payload = Token.payload(localStorage.getItem('token'));
            return payload.sub;
        }

        return false;
    }
}
export default User = new User();
