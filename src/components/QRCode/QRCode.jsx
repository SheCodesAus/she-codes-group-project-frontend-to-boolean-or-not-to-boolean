import QRCode from "qrcode.react";

import "./QRCode.css"

export default function QRGenerator() {
   return (
      
      <container>
         {/* <section className="qr-code-section"> */}
            <QRCode className="qr-code"
            value="https://www.entertexthere/"/>
         {/* </section> */}
         {/* <section className="hero-text-section"> */}
            <h1>Find out about our workshops</h1>
         {/* </section> */}
      </container>

         /* <div>
          <QRCode value="https://www.entertexthere/" style={{marginRight: 50 }} />
          <p>Text area eg workshop </p>
         </div>
         <div>
          <QRCode value="https://entertexthere/" style={{marginRight: 50 }} />
          <p>Text area eg shecodes 1 day</p>
         </div>
         <div>
          <QRCode value="https://www.entertexthere/" style={{ marginRight: 50 }}/>
          <p>Text area eg more </p>
         </div>
         <div>
          <QRCode value="https://entertexthere/" style={{marginRight: 50 }} />
          <p>Text area eg some more codes </p>
         </div> */
      );
}
