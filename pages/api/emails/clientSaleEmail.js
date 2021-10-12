const sgMail = require('@sendgrid/mail')
import nextConnect from 'next-connect';

const handler = nextConnect()


// Warax admin email notif
.patch(async(req, res)=>{
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    let aRequest = req.body
    aRequest = JSON.parse(aRequest);
  const msg = {
    to: [aRequest.clientEmail, "joansamm.rrpp@gmail.com", "djjabbua@gmail.com", "warax.arte@gmail.com"],
    from: 'david@latintravelcollection.com', 
    template_id: "d-539d1ee229a544c38c2b5175746fadf8",
    dynamic_template_data: {
        "clientName": aRequest.clientName,
        "waraxCart": aRequest.waraxCart
      },
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Client Email sent')
      res.status(200).json({email: "Admin Email Success"})
    })
    .catch((error) => {
      console.error(error)
    })
})


export default (req, res) => handler.run(req, res) 