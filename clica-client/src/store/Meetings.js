import{makeObservable, observable, action} from "mobx";

class Meetings{
    meetingsList=[];

    constructor()
    {
        makeObservable(this,{
            meetingsList:observable,
            setMeetings:action
        }) 
    }

    setMeetings=(s)=>{
        this.meetingsList = [...s];
        this.meetingsList.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
    }
}
export default new Meetings();
