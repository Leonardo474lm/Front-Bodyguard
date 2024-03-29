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

     this.localUser=new User();
   }
  ngOnInit(): void {
    this.store = localStorage.getItem("userProfile");
    if(this.store) this.localUser=JSON.parse(this.store);
    this.bodyService.getByUserMail(this.localUser.email).subscribe(body=>{
      this.iService.listPeticiones(body.id).subscribe(data=>this.dataSource.data=data);
      this.iService.getListPeticiones().subscribe(data=>this.dataSource.data=data);
    })

  }


  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }
  aceptarPeticion(id:number){
    this.iService.listById(id).subscribe(data=>{
      data.st_aceptar=true;
      this.iService.update(data).subscribe(()=>{
        this.iService.listPeticiones(data.bodyguards.id).subscribe(list=>this.iService.setListPeticiones(list))
      })
    })

  }
  denegarPeticion(id:number){
    this.iService.listById(id).subscribe(data=>{
      data.st_anulado=true;
      this.iService.update(data).subscribe(()=>{
        this.iService.listPeticiones(data.bodyguards.id).subscribe(list=>this.iService.setListPeticiones(list))
      })
    })

  }

}
