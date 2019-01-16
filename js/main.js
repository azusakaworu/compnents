//js

(()=>{

    const liveuser ={

        props:['name','character','age'],//user 被改成name 可以改任意 跟前面呼应
        template:"#activeuser", //每一条后面要有一个逗号
        methods:{logChildMsg(){alert('hello from the child compnentes');},
                 runParentFun(){this.$emit('pass-func-call-up','hello from the child on cilck')}
                 //emit(里面加逗号 可以再写一条)
                 
                
                },
        created:function(){console.log('child component is live');}
    };

  const vm = new Vue({
    el:'#app',
    data:{message: "sup feom vue"},
    created:function(){console.log('parent is live');},

    methods:{logParent(message){console.log("from the parent!", message);},
    logMainMessage(message){alert("called fro inside a child lives in the parent我是logMainMessage函数里的代码",message);}
    //logMainMessage函数里面加message形参 alert里面加一个message
},
    

    components:{user:liveuser}





  })
})();