const express = require('express')
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')

const app = express()
const port = 3000

// Set Templating Enginge
app.set('view engine', 'ejs')

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Navigation
app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/register', (req, res)=> {
    res.render('register')
})

app.post('/register', urlencodedParser, [
    check('firstname', 'The firstname must be 3+ characters long')
        .exists()
        .isLength({ min: 3 }),

        check('email', 'Email is not valid')
            .isEmail()
            .normalizeEmail()
    
], (req, res)=> {

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        //const alert = errors.array()

        //res.render('register', {alert})
    }

})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})