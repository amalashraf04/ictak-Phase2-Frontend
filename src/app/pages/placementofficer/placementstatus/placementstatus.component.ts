import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-placementstatus',
  templateUrl: './placementstatus.component.html',
  styleUrls: ['./placementstatus.component.css']
})
export class PlacementstatusComponent {


  constructor(private router:Router,private api:BackendService,
    private fb:FormBuilder,private route:ActivatedRoute){}


  addplacementstatusForm=this.fb.group(
    {
      placementstatus: ['', Validators.required]

    })


    addstatusplacement(){
      let learner = this.addplacementstatusForm.value
      this.api.addLearner(learner).subscribe((res: any) => {
        console.log(res)

        this.router.navigate(['/edit-status-placement'])
      })
    }

    }

