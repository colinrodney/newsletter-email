import nodemailer from 'nodemailer';
import mjml2html from 'mjml';
import fs from 'fs';

// const fs = require("fs");
const filePath = "newsletter_email.mjml";

// nodemailer = require('nodemailer');
// mjml2html = require('mjml');

const mjmlCode = fs.readFileSync(filePath, "utf8");
// `<mjml>

// //     <mj-head>
// //         <mj-attributes>
// //             <mj-class name="text-align-center" align="center"/>
// //             <mj-class name="negative-padding" padding-bottom="-25px"/>
// //             <!-- <mj-image width="600px" 
// //                     src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" 
// //                     padding-top="25px" padding-right="25px"
// //                     mj-class="negative-padding"
// //                     padding-left="25px"/
// //                     name="hero-image"/> -->
// //                 <mj-spacer height="25px" />
// //         </mj-attributes>
// //     </mj-head>

// //     <mj-body>
// //         <!--Hero Image + CTA-->
// //         <mj-section>
// //             <mj-column>
// //                 <mj-image src="https://i.postimg.cc/FzsnKbRx/kkd-header-comm-2-welcome-journey-final-01.png" width="600px"></mj-image>
// //             <mj-text>
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla rutrum sapien rutrum, nec eleifend nibh pellentesque. Phasellus at.
// //             </mj-text>
// //             <mj-button color="#FFFFFF" background-color="#CF152D" border-radius="50px" href="https://www.krispykreme.com/mobile-app?source=welcome">
// //                 DOWNLOAD THE APP
// //             </mj-button>
// //             </mj-column>
// //         </mj-section>

// //         <!--App So Sweet -->
// //         <mj-section>
// //             <mj-column width="100%">
// //                 <mj-image src="https://i.postimg.cc/PJrFqbx6/kkd-app-is-sweet-comm-2-welcome-journey-final-02.png"></mj-image>
// //                 <mj-text>
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla rutrum sapien rutrum, nec eleifend nibh pellentesque. Phasellus at.
// //                 </mj-text>
// //             </mj-column>
// //             <mj-column width="100%">
// //                 <mj-image src="https://i.postimg.cc/0j2HNGQ0/kkd-rewards-member-exclusive-comm-2-welcome-journey-final-03-1.png" padding="75px"></mj-image>
// //                 <mj-text>
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla rutrum sapien rutrum, nec eleifend nibh pellentesque. Phasellus at.
// //                 </mj-text>
// //             </mj-column>

// //             <mj-column width="100%">
// //                 <mj-image src="https://i.postimg.cc/NFfP08M8/kkd-share-joy-icon-comm-2-welcome-journey-final-04-1.png" width="600px" padding="75px"></mj-image>
// //                 <mj-text>
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla rutrum sapien rutrum, nec eleifend nibh pellentesque. Phasellus at.
// //                 </mj-text>
// //             </mj-column>

// //             <mj-column width="100%">
// //                 <mj-image src="https://i.postimg.cc/0j2HNGQd/kkd-rewards-app-icon-comm-2-welcome-journey-final-05-1.png" padding="75px"></mj-image>
// //                 <mj-text font-size="16px" line-height="24px" color="#000000">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan nulla rutrum sapien rutrum, nec eleifend nibh pellentesque. Phasellus at.
// //                 </mj-text>
                
// //             </mj-column>
// //         </mj-section>
         
// //         <!--Footer/ Socials Section -->
// //         <mj-hero
// //         mode="fixed-height"
// //         height="500px"
// //         background-width="600px"
// //         background-height="100%"
// //         background-url=
// //             "https://i.postimg.cc/cC45J7HR/kkd-footer-doughnut-icon-footer-03.png">

// //         </mj-hero>
// //         <mj-section background-color="#0A6A38">
// //             <mj-group vertical-align="middle" width="100%">
// //                 <mj-column >
// //                     <mj-text color="#ffffff" align="center">
// //                         Lorem Ipsum
// //                     </mj-text>
// //                 </mj-column>
// //                 <mj-column >
// //                     <mj-text color="#ffffff" align="center">
// //                         Lorem Ipsum
// //                     </mj-text>
// //                 </mj-column>
// //                 <mj-column>
// //                     <mj-text color="#ffffff" align="center">
// //                         Lorem Ipsum
// //                     </mj-text>
// //                 </mj-column>
// //             </mj-group>

// //             <mj-group vertical-align="middle" width="70%">
// //                 <mj-column >
// //                     <mj-image src="https://i.postimg.cc/C5L6KC1b/kkd-social-icons-instagram-1.png" alt="instagram" />
// //                 </mj-column>
// //                 <mj-column >
// //                     <mj-image src="https://i.postimg.cc/nrcwLKz7/kkd-social-icons-facebook.png" alt="facebook" />
                    
// //                 </mj-column>
// //                 <mj-column >
// //                     <mj-image src="https://i.postimg.cc/6q51QV3n/kkd-social-icons-X.png" alt="X" />
                    
// //                 </mj-column>
// //             </mj-group>

// //             <mj-column width="100%">
// //                 <mj-text color="#ffffff">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
// //                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
// //                 </mj-text>              
// //                 <mj-text color="#ffffff">
// //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
// //                 </mj-text>              
// //             </mj-column>
// //         </mj-section>
// //     </mj-body>
// // </mjml>`

// 1. Your MJML code


  const compiled_mjml = await mjml2html(mjmlCode);
  const stringHtml = compiled_mjml.html

//  DO NOT DELETE THIS CODE!
// console.log(html);
// console.log(Object.keys(html)); // This exposes KEYS within the returned HTML object - the key containing string converted HTML content is typically "html"
// console.log(output);
// console.log(typeof(output));
//  console.log(html); // Log the globally scoped variable html containing the compiled HTML string
// console.log(typeof(html));
// console.log(Object.entries(html));

async function sendTestEmail() {
  // 3. Generate a temporary Ethereal account automatically
  let testAccount = await nodemailer.createTestAccount();
  console.log("Ethereal Email Test account created:", `${testAccount.user} / ${testAccount.pass}`);

  // 4. Configure SMTP connection using Ethereal credentials
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  // 5. Send the compiled HTML
  let info = await transporter.sendMail({
    from: '"Sender Name" <sender@example.com>',
    to: "receiver@example.com",
    subject: "Testing MJML Layout",
    html: stringHtml, // Pass the compiled HTML here
  });

  // 6. Output the Ethereal web preview URL
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

sendTestEmail();