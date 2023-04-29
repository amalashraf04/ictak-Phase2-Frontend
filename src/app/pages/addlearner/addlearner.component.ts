import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-addlearner',
  templateUrl: './addlearner.component.html',
  styleUrls: ['./addlearner.component.css']
})
export class AddlearnerComponent {

  constructor(private router:Router,private api:BackendService,
    private fb:FormBuilder,private route:ActivatedRoute){}

  addlearnerForm = this.fb.group(
    {
      learnerid: ['', Validators.required],
      name: ['', Validators.required],
      course: ['', Validators.required],
      project: ['', Validators.required],
      batch: ['', Validators.required],
      coursestatus: ['', Validators.required],
      placementstatus: ['', Validators.required]


    })



  clickadd(){
    // this.router.navigate(['books'])
    let learner = this.addlearnerForm.value
    this.api.addLearner(learner).subscribe((res: any) => {
      console.log(res)

      this.router.navigate(['/learners'])
    })
  }
 

}
