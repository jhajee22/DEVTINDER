//Create Express server 
//install express
const express = require('express');
const app = express();

app.use(
    "/user",(req,res,next) => {
    //This function known as route handler
    //next()
   // res.send("1st Response"); // if we omit this line meaning not send response then in postman sending will be there and after 
                                // sometime timeout will happenc and also 2nd reponse wont execute
        next(); // after this 2nd response will be executed                        
},
(req,res) =>{
res.send("2nd Response"); // If we hit /user in postman 1st response will be displayed coz js in synchronous 
                          //single threaded language 
                          
}
);

//1
// app.use("/",((req,res) =>{
//     res.send("Namaste Saurav!")
// }))
// //2
// app.use("/test",((req,res) =>{
//     res.send("Hello from the server!")
// }))
// //3
// app.use("/hello",((req,res) =>{
//     res.send("Hello Hello Hello!")
// }))
//If we will change order 1 2 and 3 a lot of thing will change means code will execute from top to bottom approach
////////////////////////////////////////////////////////////////////////
//Routes  & how routes are working in order
//Order of writing the route plays a key role role here


// app.get("/user",(req,res) =>{
//     res.send("Hello From the server");
// })
//app.get("/abc?c")   play with this and test in postman
//app.get(/a/) regex
//How to handle routes dynamically



//app.post
//app.delete
app.listen(7777,() => {
    console.log("Server is successfully listening on port 2000");
});