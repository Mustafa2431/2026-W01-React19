let user = {
    profile:[
        {name:"Ashish"},
        {name:"Varun"},
        {name:"Vinod"}
    ],

    rating:[
        {count:145},
        {count:189},
        {count:144}
    ]
}


/* Get the following format of the output
output = {
    "Ashish":{rating:145},
    "Varun":{rating:189},
    "Vinod":{rating:144}
}           */

//user.profile.map(function(item, index){})
let x = user.profile.map(item=>item.name); // ["Ashish", "Varun", "Vinod"]
let y = user.rating.map(item=>item.count);
output = {}

for(let i=0;i<x.length;i++)
{
    output[x[i]]={rating:y[i]}
}

console.log(output);