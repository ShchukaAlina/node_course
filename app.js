const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoConnect = require('./utils/database');
const adminRoutes = require('./routes/admin');
const shopRouters = require('./routes/shop');
const errorController = require('./controllers/error');

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRouters);

app.use(errorController.getError)

mongoConnect(client => {
    console.log(client);
    app.listen(3000);
})
// app.listen(3000);