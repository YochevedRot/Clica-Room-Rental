import { setBusinessData, getBusinessData } from "../../store/server";
import AdminEdit from "../../store/AdminEdit";


export default async function SaveChanges(name, address, phone, details) {
    await setBusinessData(name, address, phone, details);
    getBusinessData();
    AdminEdit.editDetails(false)
}