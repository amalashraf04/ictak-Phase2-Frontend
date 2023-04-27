import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent {
 learner:any
  constructor(private api:BackendService, private route:Router){}

    ngOnInit() {
      this.getData()
    }
    
    getData(){
      this.api.getData().subscribe((res:any)=>{
        console.log("incoming data")
        this.learner=res.data
        console.log(this.learner)
      })
    }
    editlearner(id:any){
      
      this.route.navigate(['update',id])
    }
    deletelearner(id:any){
      this.api.deletelearner(id).subscribe((res:any)=>{
        alert('Deleted Successfully!!!')
        this.learner= this.learner.filter((e:any)=>e._id !== id)
      })
    }
    logout(){
      localStorage.removeItem('token')
      this.route.navigate(['/login']);
    }
  }




