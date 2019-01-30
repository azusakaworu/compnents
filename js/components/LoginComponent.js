export default{
	template:`
        <div id="login">
           <h1>Log In</h1>
           <input type = "text" name="username" v-model="input.username" placeholder="user name"> 
           <input type = "password" name="password" v-model="input.password" placeholder="password">
           <button type="button" @click="login()">Log In !!</button>

        </div>

	`,//could be html code here

    data(){return {
    	input:{username:"",password:""}
    }},
	methods:{
		login(){console.log("try log in ");
    if(this.input.username !="" && this.inpiut.password != ""){
      if(this.input.password == this.$parent.makeAccount.password){
        console.log("your are logging in!");
        this.$emit("authenticated",true);
        this.$router.replace({name:"users"});
      }else{console.log('login failed');}
    }

  }


           }
}