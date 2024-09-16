const express = require('express');
const cors = require('cors');
const connectDB = require('./service/connectionDB.js');
require('dotenv').config();
const routes = require('./routes/routes.js');

const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// cors
const corsOptions = {
    origin: 'http://127.0.0.1:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

//routes 
app.use(routes);

// routes
app.get('/', (req, res) => {
    res.send('Rentacar API');
});

// connect to mongodb
connectDB();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});