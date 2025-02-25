import QRCode from 'qrcode';

export async function convertToQr(url) {
    try {
        let qr = await QRCode.toDataURL(url)
       // console.log("##########################################################################################");
       // console.log(qr);
        return qr;
    } catch(err) {
        throw err 
    }
};
