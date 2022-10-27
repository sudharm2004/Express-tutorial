//In Routes folder 
const express=require('express')
const app=express();
const reqFilter=require('./middleware.js')

//It is used to use a reqfilter middleware on the group of routes we want
const route=express.Router();

route.use(reqFilter)

app.get('/',(req,res)=>{
    console.log('hello');
    res.send('Welcom To Middleware Home Page')
})

route.get('/html',(req,res) => {
    res.send('<h1>This is Html Page</h1>')
})

route.get('/json',(req,res) => {
    res.send([
        {'name':'sudharm','age':19},
        {'name':'sunil','age':29},
        {'name':'shreya','age':39},
        {'name':'shruti','age':49}
    ])
})

app.use('/',route)

app.listen(4000)
