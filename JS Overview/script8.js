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

// map function
let usernm = user.profile.map((item, index) => item.name);
let userrt = user.rating.map((item, index) => item.count);

output ={}
for(let i=0;i<usernm.length;i++){
    output[usernm[i]] = {rating :userrt[i]};
};

console.log(output);