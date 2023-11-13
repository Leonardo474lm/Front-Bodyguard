import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  user:User;
  // client:Client;
  gastoTotal:any;
  totalServicios:any;
  constructor(
    private userServ:UserService,
    private iService:iServiceService,
    private clientService:ClientService,

  ){
    this.user= new User();
    // this.client=new Client();

  }
  ngOnInit(): void {
    const store = localStorage.getItem("userProfile");
    if(store)this.user= JSON.parse(store) as User;

    this.userServ.getByEmail(this.user.email).subscribe((res)=>{
      this.clientService.getByUserId(res.id).subscribe((res2)=>{
        this.iService.getTotalGastosByClient(res2.id).subscribe(resp=>this.gastoTotal=resp);
        this.iService.getTotalServiciosContratadosByClient(res2.id).subscribe(resp=>this.totalServicios=resp);
      })
    })

  }



}
