import QRCode from "qrcode.react";

import "./QRCode.css"

const QRGenerator = props => {
   return (
      
      <container>
         {/* <section className="qr-code-section"> */}
            <QRCode className="qr-code"
            value={props.value}/>
         {/* </section> */}
         {/* <section className="hero-text-section"> */}
            <h1>SheCodes</h1>
         {/* </section> */}
      </container>
      );
}

export default QRGenerator;
