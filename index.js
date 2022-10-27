const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'public')
console.log(publicPath);

// app.use(express.static(publicPath))

app.set('view engine','ejs')

//Express automatically sets the response content header based on the data send for instance in the given following different responses the express will automatically sets the response content header
app.get('/',(req,res) => {
    //    http://localhost:9999/?name=sudharm(passing the value name=sudharm)
    console.log(req.query)
    res.send('This is Home Page '+req.query.name)
})


//Dynamic page
app.get('/profile',(req,res) => {
    const user={
        name:'sudharm',
        age:19,
        skills:['php','java','python']
    }
    res.render('profile',{user})
})

app.get('/html',(req,res) => {
    res.send('<h1>This is Html Page</h1>')
})

app.get('/htmlfile',(req,res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/json',(req,res) => {
    res.send([
        {'name':'sudharm','age':19},
        {'name':'sunil','age':29},
        {'name':'shreya','age':39},
        {'name':'shruti','age':49}
    ])
})

app.get('*',(req,res) => {
    res.sendFile(`${publicPath}/404.html`)
})

app.listen(9999)
