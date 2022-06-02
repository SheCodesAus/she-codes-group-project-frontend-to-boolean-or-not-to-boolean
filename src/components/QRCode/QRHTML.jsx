import QRCode from "qrcode.react";

import "./QRCode.css"

export default function QRHTML() {
   return (
      
      <container>
         {/* <section className="qr-code-section"> */}
            <QRCode className="qr-code"
            value="https://www.entertexthere/"/>
         {/* </section> */}
         {/* <section className="hero-text-section"> */}
            <h1>SheCodes</h1>
         {/* </section> */}
      </container>
      );
}



