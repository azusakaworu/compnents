
    // component will go here
    import LoginComponent from './components/LoginComponent.js';//跟php include作用一样
  import UsersComponent from './components/UsersComponent.js';

    const routes = [
        

          { path: '/login', redirect:{name:'login'} },
      
         { path: '/login', name: 'login', component: LoginComponent },
         { path: '/users', name: 'users', component: UsersComponent }
      
    ];

    const router = new VueRouter({
        routes
    });

    const vm = new Vue({
       // el: '#app', 这不写了 挪到最下面去

        data: {
            message: "sup from vue!",
            authenticated:false,
            makeAccount:{username:"ling",password:"azusa"},

        },

        created: function() {
            console.log('parent is live');
        },

        methods: {
            logParent(message) {
                console.log("from the parent", message);
            },

            logMainMessage(message) {
                console.log("called from inside a child, lives in the parent", message);
            },

            setAuthenticated(status){this.authenticated = status;},
            logout(){this.authenticated = false}
           
        },
        

       

        router: router
    }).$mount("#app");


    router.beforeEach((to,from,next)=>{
        console.log("router guard fired");
        if(vm.authenticated == false){next("login");}else{next();}
    });

