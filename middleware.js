const express=require('express')
const app=express();

// Middlewares are the functions that are used with routes and using we can access and modify request and responses
//Application Middleware->>applicable for all routes
// app.use(reqFilter)


app.get('/',(req,res)=>{
    console.log('hello');
    res.send('Welcom To Middleware Home Page')
})

//Send request like this:-//http://localhost:3000/json?age=14
//Single Route Middleware->>applicable only for this route
app.get('/json',reqFilter,(req,res) => {
    res.send([
        {'name':'sudharm','age':19},
        {'name':'sunil','age':29},
        {'name':'shreya','age':39},
        {'name':'shruti','age':49}
    ])
})

function reqFilter(req, res, next) {
    if(!req.query.age)
    {
        res.send('please provide the  age')
        console.log('This is a middleware');
    }
    else if(req.query.age<18){
        res.send('You Are Under Age!!you cannot access the page')
    }
    else{
        next()
    }
}

app.listen(3000)

module.exports=reqFilter;
