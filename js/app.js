const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000; // assing the port of the app

app.use(express.static(path.join(__dirname, 'public'))); // allows use static files from the public folder

// pettition when receives a GET method
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'aa.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
