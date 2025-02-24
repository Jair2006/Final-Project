import QRCode from 'qrcode';

export async function convertToQr(url) {
    try {
        let qr = await QRCode.toDataURL(url)
        return qr;
    } catch(err) {
        throw err 
    }
};
