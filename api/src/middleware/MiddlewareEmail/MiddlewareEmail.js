const {transporter} = require('../../config/mailer');

const middlewareEmail = async (req, res, next) => {
    const { email, name, detail, details, cost, PayMethodId, PayMethod} = req.body;
    try {

        await transporter.sendMail({
            from: '"¡Bienvenido/a a JobPortallX! USUARIO REGISTRADO 👻" <jobportalxcompany@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "¡Bienvenido/a a JobPortallX! USUARIO REGISTRADO 👻", // Subject line
            // text: "Hello world?", // plain text body
            html: `
            <h1>Estimado usuario ${name},</h1>
            <h3>Le informamos que el pago, por su plan ${detail}, ha sido registrado, en nuestra plataforma, de forma exitosa</h3>
        
            <span>¡Gracias por subscribirse en JobPortallX, la plataforma de búsqueda de empleo líder!
             Estamos encantados de contarte que tus nuevas mejoras ya pueden ser utilizadas para poder relacionarte con 
             las oportunidades laborales que se ajusten a tus habilidades y expectativas.</span>
        
            <br/>
            <h2>Detalle de la operación:</h2>
            <ul>
            <li>plan elegido: ${detail}</li>
            <li>Abonado: ${cost}</li>
            <li>Detalle: ${details}</li>
            <li>Forma de pago: ${PayMethodId} - ${PayMethod}</li>
            </ul>>

            <br/>

            <span> En JobPortallX, nos esforzamos por brindarte una experiencia fácil y efectiva en 
            tu búsqueda de empleo. Nuestro equipo está constantemente actualizando la plataforma y
            agregando nuevas características para mejorar tus posibilidades de encontrar el trabajo
            ideal.</span>
            <br/>
            <br/>
           <span>¡Te deseamos mucho éxito!</span>
           <br/>
           <br/>
           <span> Atentamente, </span>
           <br/>
           <span> El equipo de JobPortallX </span>
            `
          });

          next();
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = { middlewareEmail }