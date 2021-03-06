const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const page404Routes = require('./routes/page404');


app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use(page404Routes);

app.listen(4000);
