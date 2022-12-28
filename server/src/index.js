const express = require('express')
const mongoose = require('mongoose');
const rout = require('./route/rout');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/kimmi-Interviewround-2?retryWrites=true&w=majority')
.then(() => console.log('Db')).catch(err => console.log(err));


app.use('/', rout);


app.listen(2500, () => console.log('done'));