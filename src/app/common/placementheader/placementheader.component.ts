import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placementheader',
  templateUrl: './placementheader.component.html',
  styleUrls: ['./placementheader.component.css']
})
export class PlacementheaderComponent {
  constructor( private route:Router){}

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login']);
  }


}
