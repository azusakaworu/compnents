//js

(()=>{

    const homePageComponent ={template:"<h2>youre one the home page</h2>" };
    const userPageComponent ={
      props:['id'],
      template:"#userList",
      //this always needs to be a function in a component
      data:function(){
        return{users:[]}
      },
      created:function(){console.log("user component created!");
       this.fetchUserData(this.id);
    },

      methods:{fetchUserData(user){
        debugger;
        let url = `./includes/index.php?user=${user}`;

        fetch(url)
          .then(res =>res.json())
          .then(data =>this.users.data)
          .catch(function(error){
            console.error(error);
          });
          
          
            }}
    };
    const contactPageComponent ={template:"<h2>youre one the contact page</h2>" };
    const ErrorPageComponent ={template:"<h2>page not found! lease try again" };

    const routes =[
         { path:'/',name:'home',component:homePageComponent},
         { path:'/users:id',name: 'users',component:userPageComponent,props:true},
         { path:'/contact',name: 'contact',component:contactPageComponent},
         { path:'/*',name: 'error',component:ErrorPageComponent}


    ];
      
    const router = new VueRouter({routes});
  const vm = new Vue({
    el:'#app',
    data:{message: "sup feom vue"},
    created:function(){console.log('parent is live');},

    methods:{logParent(message){console.log("from the parent!", message);},
    logMainMessage(message){alert("called fro inside a child lives in the parent我是logMainMessage函数里的代码",message);}
    //logMainMessage函数里面加message形参 alert里面加一个message
},
    

    components:{"homePageComponent":homePageComponent,
                "userPageComponent":userPageComponent
                //可以不写contactpage
                
},
    router:router





  })
})();