const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
// const cors = require("cors");
const connectDB = require('./config/db');

//connect database

connectDB();

// Initialize middelware

app.use(express.json());


// end init

app.get('/', (req,res) => res.send('API Running'))

app.listen(port, () => console.log(`Ready on port: ${port}!`));

// Define routes

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

// End defined routes



// app.use(cors());

// require("./server/config/mongoose.config");


// require("./server/routes/store.routes")(app);
