import Info from "../models/info.model.js";
import { Op } from "sequelize";
import { convertToQr } from "../utils/qr.js";

export const getInfo = async () => {
    let data = await Info.findOne();
    return data;
};

export const updateInfo = async(body) => {
    let info = await Info.findOne();
    let data;
    let menu_qr = await convertToQr(body.menu_url);
    console.log("############################################################################");
    console.log(menu_qr);
    body.menu_qr = menu_qr;
    if ( info ) {
            data = await Info.update(body, {where: {id: info.id}});
    }else {
        data = await Info.create(body)
    }
    return data;
};



