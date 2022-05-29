import QRCode from "qrcode.react";

export default function QRGenerator() {
   return (
      
      <div>
         <QRCode
            className="qr-code"
            value="https://www.entertexthere/"style={{ marginRight: 50 }}/>
            <h1>Find out about our workshops</h1>
      </div>

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
