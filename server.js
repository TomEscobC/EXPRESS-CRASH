const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(8000, () => console.log(`Server is running on port 8000`));

