import QRCode from "qrcode.react";

import "./QRCode.css"

const QRGenerator = props => {
   return (
      
      <container className="container-qr">
            <QRCode className="qr-code"
            value={props.value}/>  
      </container>
      );
}

export default QRGenerator;
