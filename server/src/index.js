// Load our .env file
require('dotenv').config();
// Load app
const app = require('./server.js')
// Set the port
const PORT = process.env.PORT || 4000
const HTTP_URL = process.env.HTTP_URL || 'http://localhost:'
// Start our API server
app.listen(PORT, () => {
    console.log(`\nServer is running on ${HTTP_URL}${PORT}\n`);
});
