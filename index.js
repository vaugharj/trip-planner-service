const express = require('express');
const app = express();
const PORT = 443;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})