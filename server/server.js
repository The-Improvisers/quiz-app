const express = require('express');
const mongoose = require('mongoose');
const questionRoutes = require('./routes/route');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;
mongoose.connect('mongodb://localhost:27017/questiondb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use('/api', questionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

