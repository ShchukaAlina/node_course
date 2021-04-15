const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouters.routers);
app.use(shopRouters);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", 'error.html'));
})
app.listen(3000);