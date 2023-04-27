import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-updateleaner',
  templateUrl: './updateleaner.component.html',
  styleUrls: ['./updateleaner.component.css']
})
export class UpdateleanerComponent {

  learnerId:any
  updateForm:any
  current:any

  
   
  constructor(private fb:FormBuilder, private api:BackendService,
   private router:Router,private route:ActivatedRoute){

   this.updateForm = this.fb.group(
    {
      learnerid: ['', Validators.required],
      name: ['', Validators.required],
      course: ['', Validators.required],
      project: ['', Validators.required],
      batch: ['', Validators.required],
      coursestatus: ['', Validators.required],
      placementstatus: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getcurrent()

  }

  updateLearner() {
    console.log("Clicked update button"); // Add a console.log statement to check if the button click is registering
    this.learnerId = this.route.snapshot.params['id'];
    let learner = this.updateForm.value;
    // this.api.updateBook(this.bookId, book).Observable<Object>.subscribe((res: any) => {
    this.api.updateLearner(this.learnerId, learner).subscribe((res: any)=>{
    console.log(res);
      this.router.navigate(['/learners']);
    }) 
  }


  getcurrent() {
    this.learnerId = this.route.snapshot.params['id'];
    this.api.getcurrent(this.learnerId).subscribe((res:any)=>{
      console.log(res)
      this.current=res.data
      

    })
  }
  

}