const express = require('express');
const app = express();
const dotenv = require('dotenv');
const allroute = require('./routes/index.js');
const db = require('./config/db-config.js');

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
db.then(() => {
    console.log('Connected to MongoDB');
}
).catch((err) => {
    console.log(err);
}
);

// route
app.use(express.json());
app.use(allroute);

app.use((req, res) => {
    res.json({
        Message: "endpoint tidak ada"
    })
})


app.listen(3000, () => {
    console.log('Server listening on port ' + PORT);
});