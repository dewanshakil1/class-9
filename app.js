 function Main(){
    this.student = [
        {
            roll:1,
            name:"shakil",
            age:20,
            fname:"shamajol",
            bn:40,
            en:45,
            mat:50,
            s:55,
            ss:70,
            rel:90
      
        },
        {
          roll:2,
          name:"shakila",
          age:10,
          fname:"shamajol",
          bn:50,
          en:55,
          mat:60,
          s:55,
          ss:33,
          rel:80
      
      },
      {
          roll:3,
          name:"karim",
          age:25,
          fname:"rafik",
          bn:75,
          en:55,
          mat:55,
          s:67,
          ss:760,
          rel:75
      
      },
      {
          roll:4,
          name:"sahin",
          age:30,
          fname:"karim",
          bn:40,
          en:45,
          mat:50,
          s:75,
          ss:70,
          rel:70
      
      },
      {
          roll:5,
          name:"shakil",
          age:20,
          fname:"shamajol",
          bn:40,
          en:45,
          mat:50,
          s:55,
          ss:70,
          rel:90
      
      }
      ];
      this.phone=[
        {
            name:"shail",
            phone:"01851246...",
            age:20,
           location:"mirpur"
        },
        {
            name:"dewan",
            phone:"01751246...",
            age:30,
           location:"uttora"
        },
        {
            name:"hasina",
            phone:"0185124676...",
            age:18,
           location:"sherpur"
        },
        {
            name:"hasan",
            phone:"016771246...",
            age:25,
           location:"mirpur"
        },
        {
            name:"rokib",
            phone:"01851888...",
            age:33,
           location:"rongpur"
        }
        
    ];
    this.devs=[
        {
          name:"shakil",
          age:20,
          skill:"meran stack",
          income:20000
        },
        {
         name:"shakil",
         age:20,
         skill:"meran stack",
         income:20000
       },
       {
          name:"shakil",
          age:20,
          skill:"meran stack",
          income:20000
        },
       
        {
            name:"sohel",
            age:25,
            skill:"Laravel",
            income:25000
        },
       
        {
            name:"dewan",
           age:30,
           skill:"Django",
           income:10000
        },
       
        {
          name:"hasan",
          age:40,
          skill:"gango",
          income:22000
        },
       {
          name:"arif",
           age:50,
          skill:"wordpress",
           income:24000
        },
        {
          name:"arshad",
          age:55,
          skill:"java",
          income:4000
        },
        {
          name:"forhad",
          age:45,
          skill:"wordpress",
           income:4000
        }  
       
              
    
    ];  
}
let alldata=new Main();
    console.log(JSON.stringify(alldata));
   