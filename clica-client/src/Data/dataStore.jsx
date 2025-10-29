import { makeObservable, observable,action } from 'mobx';

class dataStore {
    isLogin = false;
    isMakeMeeting = true;
    services = [];
    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                services: observable,
                isMakeMeeting: observable,
                setIsLogin: action,
                setIsMakeMeeting: action
            }
        )
    }
    setIsLogin(status) {
        this.isLogin = status;
    }

    setIsMakeMeeting(status){
        this.isMakeMeeting = status;
    }

}

export default new dataStore();
