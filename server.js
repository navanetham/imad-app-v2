var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   // res.sendFile(path.join(__dirname,'ui','article-one.html'));
   res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});

app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articleOne={
    title:"Article-one",
    header:"This is Article one",
    Date:"8th Feb 2017",
    content:
    `<p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>
    <p>
    This is my first Article page on web. This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.This is my first Article page on web.   
    </p>`
};

function createTemplate(data)
{
    var title=data.title;
    var header=data.header;
    var Date=data.Date;
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
    ${Date}
</div>
<div>
   ${content}
</div>  
</div>
</body>    
    
</html>`;
return htmlTemplate;
}

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
