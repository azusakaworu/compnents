//js

(()=>{

    const homePageComponent ={template:"<h2>youre one the home page</h2>" };
    const userPageComponent ={template:"<h2>youre one the user page</h2>" };
    const routes =[
  { path:'/',name:'home',component:homePageComponent},
        { path:'/users',name: 'users',component:userPageComponent},

    ]
      
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
},
    router:router





  })
})();