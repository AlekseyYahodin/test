const app = require('./src');
const config = require('config');
const port = config.port;

app.listen(port);
console.log(`Server is listening on port ${port}`);
