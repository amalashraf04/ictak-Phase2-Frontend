import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';


@Component({
  selector: 'app-placementofficer',
  templateUrl: './placementofficer.component.html',
  styleUrls: ['./placementofficer.component.css']
})
export class PlacementofficerComponent {

  learner:any
  constructor(private api:BackendService, private route:Router){}

    ngOnInit() {
      this.getData()
    }
   

    logout(){
      localStorage.removeItem('token')
      this.route.navigate(['/login']);
    }
  
    getData(){
      this.api.getData().subscribe((res:any)=>{
        console.log("incoming data")
        this.learner=res.data
        console.log(this.learner)
      })
    }
    editplacementstatus(){

      this.route.navigate(['/edit-status-placement'])
    }



  }




