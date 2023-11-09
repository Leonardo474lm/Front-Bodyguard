import { User } from "./User";
import { Specialization } from "./specialization";

export class Bodyguard {
    id: number = 0;
    district:string=""
    price_per_hour: number = 0
    st_activo: boolean = false
    specialization: Specialization = new Specialization()
    user: User = new User()

    star:number=0
}


