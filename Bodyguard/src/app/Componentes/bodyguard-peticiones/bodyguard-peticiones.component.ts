import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Service } from 'src/app/Model/service';
import { BodyguardService } from 'src/app/Services/bodyguard.service';
import { iServiceService } from 'src/app/Services/iService.service';

@Component({
  selector: 'app-bodyguard-peticiones',
  templateUrl: './bodyguard-peticiones.component.html',
  styleUrls: ['./bodyguard-peticiones.component.css']
})
export class BodyguardPeticionesComponent {
  //lista:Service[] = [];
   displayedColumns = ['Precio', 'Fecha', 'Hora', 'Duracion','Cliente','Direccion', 'Acciones'];

   dataSource = new MatTableDataSource<Service>();
   store:any;
   localUser:User;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

   constructor(
    private iService: iServiceService,
    private router: Router,
    private bodyService:BodyguardService,

  ){
     console.log("Load Constructor");
     this.localUser=new User();
   }
  ngOnInit(): void {
    this.store = localStorage.getItem("userProfile");
    if(this.store) this.localUser=JSON.parse(this.store);
    console.log("local user desde peticiones ",this.localUser)
    this.bodyService.getByUserMail(this.localUser.email).subscribe(body=>{
      console.log("body de bac",body)
      this.iService.listPeticiones(body.id).subscribe(data=>this.dataSource.data=data);
      this.iService.getListPeticiones().subscribe(data=>this.dataSource.data=data);
    })

  }


  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }
  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
  aceptarPeticion(id:number){
    

  }
  denegarPeticion(id:number){

  }

}
