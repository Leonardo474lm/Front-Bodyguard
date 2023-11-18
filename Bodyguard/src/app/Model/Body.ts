 
import { Specialization } from "./specialization";
import { UserBody } from "./userBody";

export class Body{
    price_per_hour: number = 0
    st_activo: boolean = false
    user: UserBody = new UserBody()
    specialization: Specialization = new Specialization()
    district:string=""
    star:number=0
}
