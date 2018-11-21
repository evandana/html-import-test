const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res) => res.redirect('/index.html') );

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    console.log(`Navigate to localhost:${port}`);
});