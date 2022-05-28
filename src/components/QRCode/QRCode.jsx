import QRCode from "qrcode.react";
export default function QRGenerator() {
   return (
      <div 
         style={{ marginTop: 200, 
         display: "flex",
         flexDirection: "row", 
         color: "var(--primary)" }}>
         <div>
            <QRCode
               className="qr-code"
               value="https://www.entertexthere/"style={{ marginRight: 50 }}/>
            <p>Text area eg plus </p>
         </div>
      <div>
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
         </div>
      </div>
   );
}
