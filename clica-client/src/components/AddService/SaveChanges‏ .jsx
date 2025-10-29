import { setServices, getServices } from "../../store/server";

export default async function SaveChanges(name, description, cost) {
    await setServices(name, description, cost);
    getServices();
}