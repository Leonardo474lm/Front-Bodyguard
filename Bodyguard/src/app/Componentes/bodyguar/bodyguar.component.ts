import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bodyguar',
  templateUrl: './bodyguar.component.html',
  styleUrls: ['./bodyguar.component.css']
})
export class BodyguarComponent implements OnInit{
  constructor(public route:ActivatedRoute){}

  ngOnInit(): void {     
  }
}
