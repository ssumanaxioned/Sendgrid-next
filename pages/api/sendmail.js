import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work
  const messages = [
    {
      to: "sumansasmal028@gmail.com", // Your email where you'll receive emails
      from: "sumans@axioned.com", // your website email address here
      subject: `Contact Info : ${req.body.subject}`,
      attachments: [
        {
          filename: `${req.body.pdfName}`,
          content: req.body.resume,
          type: "application/pdf",
          disposition: "attachment",
          contentId: "resume"
        },
      ],
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          </div>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              </div>
            </div>
      </body>
      </html>`
    },
    {
      to: `${req.body.email}`, // your website email address here
      from: "sumans@axioned.com", // Your email where you'll receive emails
      subject: `Acknowledgement`,
      html: `<p>Thank you, your application is submitted would get back to you in few days.</p>`
    }
  ]
  try {
    await sgMail.send(messages);
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
