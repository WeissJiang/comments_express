const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))
// app.set('views', render函数的默认路径) --> 修改默认路径

const comments = [
  {
    name: 'Able',
    message: 'Good Day',
    date: '2021-01-22'
  },
  {
    name: 'Bubble',
    message: 'Hello Hello',
    date: '2016-08-12'
  },
  {
    name: 'Candy',
    message: 'Have a nice day',
    date: '2020-03-12'
  },
  {
    name: 'Dada',
    message: 'Hi there',
    date: '2020-12-22'
  },
  {
    name: 'Able',
    message: 'Good Day',
    date: '2021-01-22'
  },
  {
    name: 'Bubble',
    message: 'Hello Hello',
    date: '2016-08-12'
  },
  {
    name: 'Candy',
    message: 'Have a nice day',
    date: '2020-03-12'
  },
  {
    name: 'Dada',
    message: 'Hi there',
    date: '2020-12-22'
  }
]

app.get('/', function (req, res) {
  res.render('index.html', {
    title: 'Comments List',
    comments: comments
  })
})

app.get('/admin', function (req, res) {
  res.render('admin/index.html', {
    title: 'administration system'
  })
})

app.get('/post', function (req, res) {
  res.render('post.html')
})

// post
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// change the form method to post, keep consistent
app.post('/pinglun', function (req, res) {
  var comment = req.body
  comment.date = '2021-01-23 10:56:21'
  comments.unshift(comment)
  res.redirect('/')
})

// get
// change the form method to get, keep consistent
// app.get('/pinglun', function (req, res) {
//   var comment = req.query
//   comment.date = '2021-01-23 10:56:21'
//   comments.unshift(comment)
//   res.redirect('/')
// })

app.listen(3000, function () {
  console.log('app is runnning ...')
})
