import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-editar',
  templateUrl: './client-editar.component.html',
  styleUrls: ['./client-editar.component.css']
})
export class ClientEditarComponent implements OnInit {
  constructor(public route: ActivatedRoute,)
  {

  }
  ngOnInit(): void {
      
  }
}
