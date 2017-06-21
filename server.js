var express = require('express')
var hbs = require('hbs')

var app =express()
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))
hbs.registerHelper('getCurrentYear',function()
{
    return new Date().getFullYear()
})

hbs.registerHelper('toUpper',function(text)
{
    return text.toUpperCase();
})
app.get('/',function(req,res)
{
    res.render('home.hbs',
        {
            title:'Home',
            name:'Giridhar',
            welcomeMessage:'Hello Giridhar Welcome'
        })

})
app.get('/about',function (req,res)
{
  res.render('about.hbs',{
      title: 'About',
      welcomeMessage:'Hello Giridhar Welcome to about page'
  })
})

app.listen(3000)
