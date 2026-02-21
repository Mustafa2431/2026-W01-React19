let user ={
    profile :[
        {name : "Mustafa"},
        {name : "Jatin"},
        {name : "Om"},
        {name : "Mohit"}
    ],
    rating:[
        {count:100},
        {count:102},
        {count:103},
        {count:104}
    ]
}
for(let i=0;i<user.profile.length;i++){
    console.log("Name :" +user.profile[i].name+" { rating :"+user.rating[i].count+" }");
}