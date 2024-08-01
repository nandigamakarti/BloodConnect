const express=require('express');
const mysql = require("mysql");
var cors = require('cors')
const app=express();
app.use(express.json())
app.use(cors())


var pool = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "@sweety10",
    database: "bootcamp",
    connectionLimit:10
    
});

// pool.connect((err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     console.log("connected");
// })

///in case of err
//run this in mysql
//  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


let insertDonersInDB = ( name,email,phone,age,weight,gender,Category,lati,longi)=>{
    let query = `insert into Doners (name,email,phone,age,weight,gender,Category,lati,longi) values ('${name}', '${email}', '${phone}', '${age}','${weight}','${gender}','${Category}','${lati}','${longi}');`
    pool.query(query);

}
 
let getAllDoners = (res) =>{
    pool.query('select * from Doners;', (err,rows)=>{
        res.status(200).send(rows)
    });
}


app.post('/submitDoner' , (req,res) =>{
    let name = req.body.name;
    let email= req.body.email;
    let phone= req.body.phone;
    let age= (req.body.age);
    let weight= (req.body.weight);
    let gender= (req.body.gender);
    let Category= (req.body.Category);
    let lati= (req.body.lati);
    let longi= (req.body.longi);

    insertDonersInDB(name,email,phone,age,weight,gender,Category,lati,longi);

    res.status(200).send({"status":"Done"});

})

app.get('/getAllDoners', (req,res) => {
    getAllDoners(res);
})


const port =3001;
const hostname="localhost";


app.listen(port , hostname,()=>{
    console.log("i am listening");
})