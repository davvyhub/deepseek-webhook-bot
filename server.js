require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/webhook', webhookRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
