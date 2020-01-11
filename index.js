const express = require('express');
const app = express();
const { config, engine } = require('express-edge');
 
config({ cache: false });
 
app.use(engine);
app.set('views', `${__dirname}/views`);

const names = [{ name: 'Petia'}, {name:'Vasia'}]

app.get('/', (req, res) => {
  res.render('index', { username: 'tt', env:process.env.NODE_ENV, names });
});


 
app.listen(3000);