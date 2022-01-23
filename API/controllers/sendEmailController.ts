const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const sendEmailController = (req = request, resp = response) => {
    let body = JSON.parse(req.query['body']);

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure:false,
        auth: {
            user: "sastreriasaralehr@gmail.com",
            pass: "exchofmnkmxjvaaf"
        }
    })

    const opciones = {
        from: 'Sastrería Sara Lehr',
        subject: body.Asunto,
        to: body.Email,
        text: body.Mensaje + body.Firma
    }

    config.sendMail(opciones,function(error: any, result: any){
        if(error)return resp.json({ ok: false, msg: error });
            
        return resp.json({
            ok: true,
            msg: result
        }); 
    })

}

export{sendEmailController}