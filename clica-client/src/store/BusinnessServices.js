import{makeObservable, observable, action} from "mobx";
import { render } from 'react-dom';
import UserHome from "../components/User/UserHome";

class BusinnessServices{
    servicesList=[];
    
    constructor()
    {
        makeObservable(this,{
            servicesList:observable,
            setServices:action,
            getServices: action,
        }) 
    }

    setServices=(s)=>{
        this.servicesList = [...s];
    }

    getServices = () =>{
        
    }

}
export default new BusinnessServices();
