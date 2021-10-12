const sgMail = require('@sendgrid/mail')
import nextConnect from 'next-connect';

const handler = nextConnect()
.patch(async(req, res)=>{
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    let aRequest = req.body
    aRequest = JSON.parse(aRequest);
  const msg = {
    to: ["joansamm.rrpp@gmail.com", "djjabbua@gmail.com", "warax.arte@gmail.com"],
    from: 'david@latintravelcollection.com', 
    template_id: "d-b61082e45fda43dc8e1e2bf816af9c1e",
    dynamic_template_data: {
        "userName": aRequest.userName,
        "userPhono": aRequest.userPhono,
        "clientEmail": aRequest.clientEmail,
        "clientCity": aRequest.clientCity,
        "clientProvince": aRequest.clientProvince,
        "clientAddress": aRequest.clientAddress,
        "clientBuilding": aRequest.clientBuilding,
        "waraxCart": aRequest.waraxCart
      },
  }
  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({email: "Client Email Success"})
    })
    .catch((error) => {
      console.error(error)
    })
})

export default (req, res) => handler.run(req, res) 