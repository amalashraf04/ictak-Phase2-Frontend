import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BackendService } from 'src/app/backend.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  EditUserForm: any = new FormGroup({
    'name': new FormControl(''),
    'email': new FormControl(''),
    'password': new FormControl(''),
    'role': new FormControl('')
  })
  constructor(private router:Router,private api:BackendService,
    private route:ActivatedRoute){}
    ngOnInit(): void {
       console.log(this.route.snapshot.params['id'])
           this.api.getCurrentdata(this.route.snapshot.params['id']).subscribe((result=>{
             this.EditUserForm = new FormGroup({
               'name': new FormControl((result as any).name),
               'email': new FormControl((result as any).email),
               'password': new FormControl((result as any).password),
               'role': new FormControl((result as any).role)
             })
           }))
     }
     Userupdate(){
      this.api.updateUser(this.EditUserForm.value,this.route.snapshot.params['id']).subscribe((result)=>{
        console.log(result)
        alert(' User Data Updated ')
         this.router.navigate(['/users'])
      })
     }
}
