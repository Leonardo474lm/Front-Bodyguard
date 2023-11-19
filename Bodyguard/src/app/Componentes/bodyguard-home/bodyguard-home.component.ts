import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { BodyguardService } from 'src/app/Services/bodyguard.service';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-bodyguard-home',
  templateUrl: './bodyguard-home.component.html',
  styleUrls: ['./bodyguard-home.component.css']
})
export class BodyguardHomeComponent implements OnInit {

  ingreso:number;
  hora:number;
  numClientes:number;
  localUser: User ;
  constructor(


    private bodyServ:BodyguardService,
    private iServ:iServiceService,
  ){
    this.hora=0;
    this.numClientes=0;
    this.ingreso=0;
    const user = localStorage.getItem("userProfile")
    this.localUser = user ? JSON.parse(user): new User();
  }

  ngOnInit(): void {
    this.bodyServ.getByUserMail(this.localUser.email).subscribe(resp=>{
      this.iServ.getTotalEarningsForBodyguard(resp.id).subscribe(data=>this.ingreso=data);
      this.iServ.getTotalHoursWorkedForBodyguard(resp.id).subscribe(data=>this.hora=data);
      this.iServ.countClientsByBodyguard(resp.id).subscribe(data=>this.numClientes=data);
    })

  }

}
