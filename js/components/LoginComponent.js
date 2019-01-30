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
		login(){
      console.log("try log in ");
    if(this.input.username !="" && this.input.password != ""){
      let url =`./includes/index.php?username=${this.input.username}&&password=${this.input.password}`
    
    fetch(url)
    .then(res=>res.json())
    .then(data =>{
      if(data[0]=="false" ||data[0].length<1){
        console.log("authenticated failed,try again");

      }else{
        
        this.$emit("authenticated",true);
        this.$router.replace({name:"users"});
      }

    })
    .catch(function(err)){console.error(err);}else{
      console.log('username and password cant be blank');}
    }

  }


           }
}