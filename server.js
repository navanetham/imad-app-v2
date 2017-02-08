var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'Article-one',
    header:'This is Article one All Done',
    date:'8th Feb 2017',
    content:
    `<p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>`},
    'article-two':{
    title:'Article-Two',
    header:'This is Article Two new',
    date:'9th Feb 2017',
    content:
    `<p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>`},
    'article-three':{
    title:'Article-Three',
    header:'This is Article Three new',
    date:'10th Feb 2017',
    content:
    `<p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>`}
};

function createTemplate(data)
{
    var title=data.title;
    var header=data.header;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=
`<html>
<head>
<title>${title}</title>    
 <link href="/ui/style.css" rel="stylesheet" />
<meta name="viewport" content="width=device-width, inital-scale=1"/>
</head>    
<body>
<div class="container">    
<div>
    <a href="/">Home</a>
</div>
<hr>
<h1>${header}</h1>
<br>
<div>
    ${date}
</div>
<div>
   ${content}
</div>  
</div>
</body>    
    
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
   // res.sendFile(path.join(__dirname,'ui','article-one.html'));
   var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
/*
app.get('/article-two',function(req,res){
    //res.sendFile(path.join(__dirname,'ui','article-two.html'));
    res.send(createTemplate(articles[articleTwo]));
});

app.get('/article-three',function(req,res){
   // res.sendFile(path.join(__dirname,'ui','article-three.html'));
   res.send(createTemplate(articleThree));
});*/

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});





var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
