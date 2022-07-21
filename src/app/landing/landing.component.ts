import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  email:String =''
  password:String =''
  title = 'CharityFund';
  constructor(){

  }
  async login(){
    
  }
  ngOnInit(): void {
  }

}
