const express = require('express');
const app = express();
const { config, engine } = require('express-edge');
const userRoutes = require('./src/routes/user')

const db = require('./src/lib/db')
 
config({ cache: false });
 
app.use(engine);
app.set('views', `${__dirname}/src/views`);


app.get('/', (req, res) => {
  res.render('index', { username: 'tt', env:process.env.NODE_ENV, names: [] });
});

app.use('/user', userRoutes);
 
app.listen(3000);