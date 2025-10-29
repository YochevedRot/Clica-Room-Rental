export default function colorMeeting(dateTime) {
    const currentDate = new Date();
    const meetingDate = new Date(dateTime);


    const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
    if (meetingDate.getDate() === currentDate.getDate() &&
        meetingDate.getMonth() === currentDate.getMonth() &&
        meetingDate.getFullYear() === currentDate.getFullYear())
        return '#ff5252';

    if (meetingDate < currentDate)
        return 'whitesmoke'

    if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
        return '#ffb74d'

    return '#9ccc65';
}