import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  title ='uploadfile'
  @ViewChild('singleInput', { static: false })
  singleInput!: ElementRef;
  files:any
  learner:any

  constructor(private api:BackendService,private router:Router ){}

  selectfile(event:any){
    if(event.target.files.length > 0){
    const file = event.target.files[0]
    console.log(file)
    this.files = file
    }
  }

 
  addcsv(){

    const formdata = new FormData()
    formdata.append('file',this.files)
    this.router.navigate(['/learners'])
    this.api.addcsv(formdata).subscribe((res:any)=>{
      console.log(res)    
    
    },err =>{
      console.log(err)
    })

  }
  
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
 

  

}
