//Create Express server 
//install express
const express = require('express');
const app = express();

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
//Routes  & how routes are working in order
//Order of writing the route plays a key role role here


app.get("/user",(req,res) =>{
    const employee = { id: 1, name: "Saurav", age: 25 };
    res.send(employee);
})


//app.post
//app.delete
app.listen(2000,() => {
    console.log("Server is successfully listening on port 2000");
});