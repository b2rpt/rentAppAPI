const express = require("express");
const app = express();
const cors = require("cors");
const UserRoute = require('./routes/userRoute');
const itemRoute = require('./routes/rentItems');

require('./models/index')();
app.use(express.json())
app.use('/', UserRoute);
app.use('/', itemRoute);

app.listen(5000, () => {
  console.log("listinig on server 5000");
});
