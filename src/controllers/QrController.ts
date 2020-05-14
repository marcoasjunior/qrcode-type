import QR from "qrcode";
import fs from "fs"

class QrCode {

    static async QrShow() {

        const res = await QR.toDataURL('www.g1.com.br')

        fs.writeFileSync('./qr.html', `<img src="${res}">`);
  console.log('Wrote to ./qr.html');

    }
}

export default QrCode