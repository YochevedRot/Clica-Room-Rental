import { observer } from "mobx-react";
import BusinnessServices from "../../store/BusinnessServices";
import Services from "./service3+";
import Services1 from "./service1";
import Services2 from "./service2";

const SwitchService = (observer(() => {

    switch (BusinnessServices.servicesList.length) {
        case 0:
            return <><h3>אין שרותים זמינים</h3></>;
        case 1:
            return <Services1 />
        case 2:
            return <Services2 />
        case 3:
            return <Services />
        default:
            return <Services />;
    }
}))

export default SwitchService;
