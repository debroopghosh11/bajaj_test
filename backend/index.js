
const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
const dataRoutes = require('./routes/data.routes.js');
app.use('/api', dataRoutes);
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {    res.send('Hello World!')});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));