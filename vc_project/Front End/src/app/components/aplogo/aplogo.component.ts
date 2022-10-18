import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplogo',
  templateUrl: './aplogo.component.html',
  styleUrls: ['./aplogo.component.css']
})
export class AplogoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

}
