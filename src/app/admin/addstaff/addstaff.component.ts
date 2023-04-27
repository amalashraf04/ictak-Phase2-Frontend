import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent {
  constructor(private router:Router,private api:BackendService,
    private fb:FormBuilder,private route:ActivatedRoute){}


    addUserForm = this.fb.group(
      {
        name: ['', [Validators.required,Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      role:['']
  
  
      })
      adduser(){
        
        let user = this.addUserForm.value
        this.api.addsiteUser(user).subscribe((res: any) => {
          console.log(res)
    
          this.router.navigate(['/users'])
        })
      }

}
