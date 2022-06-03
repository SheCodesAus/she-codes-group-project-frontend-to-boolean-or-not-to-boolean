import QRCode from "qrcode.react";

import "./QRCode.css"

const QRGenerator = props => {
   return (
      
      <container>
            <QRCode className="qr-code"
            value={props.value}/>  
      </container>
      );
}

export default QRGenerator;
