const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const corsOptions = {
    // origin: 'https://stoica-brothers-gjkp564lwq-lz.a.run.app',
    origin: 'http://192.168.1.2:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "balawiu@gmail.com",
        pass: 'sqkfhyiazjkyqnal',
    },
});

app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: 'balawiu@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error)
        {
            console.log("error sending mail: ", error);
            res.status(500).send("error log from server: " + error);
        }
        else
        {
            console.log("mail sent: ", info.response);
            res.status(200).send("success log from server: " + info.response);
        }
    });
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});