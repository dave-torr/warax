const sgMail = require('@sendgrid/mail')
import nextConnect from 'next-connect';

const handler = nextConnect()

// Warax admin email notif
.post(async(req, res)=>{
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
      console.log('Admin Email sent')
      res.status(200).json()
    })
    .catch((error) => {
      console.error(error)
    })
})


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
        "userName": aRequest.userName,
        "waraxCart": aRequest.waraxCart
      },
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Client Email sent')
      res.status(200).json()
    })
    .catch((error) => {
      console.error(error)
    })
})




// // AUTOMATIC CANCELLATION EMAIL
// .delete(async(req, res)=>{
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//     let aRequest = req.body
//     aRequest = JSON.parse(aRequest);

//   const msg = {

//     to: [aRequest.customerDataObj.email, 'info@unigalapagos.com', "djjabbua@gmail.com" ],
//     from: 'info@unigalapagos.com', 
//     template_id: "d-0062fa72020f457c9a39ce74607b0a93",
//     dynamic_template_data: {
//         "cruiseDepDate": dateFormatter(aRequest.departureDate),
//         "cruiseItineraryCode": aRequest.itineraryCode,
//         "cruiseBlockingRef": aRequest.clientReference,
//         "rooming": aRequest.roomingList
//       },
//   }
  
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log('Res Cancelled sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })

// })




export default (req, res) => handler.run(req, res) 