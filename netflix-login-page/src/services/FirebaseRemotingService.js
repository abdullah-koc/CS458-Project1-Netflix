import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../firebase";

const sendLoginInfoToDB = async (mailOrPhone, phoneCode, password) => {
    const usersRef = collection(db, "users");
    let dbQuery;
    let tempInfo = "";
    let isPhone = false;
    if (/^-?\d+$/.test(mailOrPhone)) {
        tempInfo = phoneCode + mailOrPhone;
        isPhone = true;
    }

    if (!isPhone) {
        dbQuery = query(usersRef, where("mail", "==", mailOrPhone), where("password", "==", password));
    } else {
        //send phone number information to DB (phone: tempInfo, PW: password)
        dbQuery = query(usersRef, where("phone", "==", tempInfo), where("password", "==", password));
    }

    return getDocs(dbQuery);
};

export { sendLoginInfoToDB };