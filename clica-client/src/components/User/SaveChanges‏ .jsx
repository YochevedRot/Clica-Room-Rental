import { setMeetings, getMeetings } from "../../store/server";

export default async function SaveChanges(service, date, name, phone) {
    if (service == "" || name == "" || phone == "" || phone.length != 10 && phone.length != 9) {
        alert("לא כל הפרטים מלאים");
    }
    else {
        const res = await setMeetings(service, date, name, phone);
        alert(res);
        getMeetings();
    }

}