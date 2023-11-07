import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
    value:string="";
     hide = true;

  constructor(public route: ActivatedRoute,)
  {

  }
  ngOnInit(): void {

  }
}
