const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500; // Možete promeniti port po potrebi

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server je pokrenut na portu ${PORT}`);
});
