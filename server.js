const mongoose = require('mongoose')

const app = require('./app')

const db = 'mongodb+srv://jera:verbatim7@cluster0.ol7yw.mongodb.net/hackathonDatabase?retryWrites=true&w=majority'

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connection successfull!');
    })

const port = 3000

app.listen(port, () => {
    console.log(`Listening for the requests on port ${port}...`);
})
