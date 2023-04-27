import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learner-header',
  templateUrl: './learner-header.component.html',
  styleUrls: ['./learner-header.component.css']
})
export class LearnerHeaderComponent {
  constructor( private route:Router){}

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login']);
  }

}
