import { User } from "./User";
import { Specialization } from "./specialization";

export class Bodyguard {
    id:number=0;
    price_per_hour: number = 0
    st_activo: boolean = false
    user: User = new User()
    specialization: Specialization = new Specialization()
    district:string=""
    star:number=0
}


