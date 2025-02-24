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
    let menu_qr = convertToQr(body.menu_url);
    body.menu_qr = menu_qr;
    if ( info ) {
            data = Info.update(body, {where: {id: info.id}});
    }else {
        data = Info.create(body)
    }
    return data;
};



