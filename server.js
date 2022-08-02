//npm init node package manager
//now dependency
//express, dotenv, cors, mongodb, ejs, nodemon (--save-dev)
const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
//destruction const{} = require conrs mong
require('dotenv').config()
//git init


let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mfix',//dbasename,
    collection

MongoClient.connect(dbConnectionString)
.then(client =>{
    console.log('Connected to Databas')
    db =client.db(dbName)
    collection = db.collection('movies')})
app.set('view engine','ejs')
app.use(express.static('public'))//let app serve up files when called in public
app.use(express.urlencoded({extended:true}))//help us with url information going back and forth
app.use(express.json)//things going back and forth are formated as json
app.use(cors())//helps stop cors error

app.listen(process.env.PORT||PORT, ()=>{console.log(`server is running on port`)})