const { User } = require('../models');
const nodemailer = require('nodemailer');
const jwt = require('jsnwebtoken');
require('dotenv').config();


const forgotPassword = {
    async sendMail(req, res) {
        if (req.body.email == "") {
            res.status(400).send({
                message: 'El eamil es requerido'
            })
        }
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            if (!user) {
                return res.status(403).send({
                    message: 'No existe correo'
                })
            }
        

            const token = jwt.sing({ id: user.id }, "palabraClave", { expiresIn: "1h" });
        user.update({
            tokenResetPasswoerd: token
        });





        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
            }
        });

        const emailPort = process.env.EMAIL_port || 3000;

        const mailOptions = {
            // from: correo donde enviar,
                to: `${user.email}`,
            subject: "enlace para recuperar la clave",
            text:
                `${emailPort}/restpassword/${user.id}/${token}`


    };


    transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
            console.error('ha ocurrido un error', err);

        } else {
            console.log('Respuesta:', response);
            res.status(200).json('EL email para la recuperacion a sido enviado');
        }
    })

} 
catch (error) {
    res.status(500).send({
        message: 'ha ocurrido un error',
        error
    })
}
}

}


module.exports = forgotPassword;