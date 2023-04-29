import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login: any
  constructor(private fb: FormBuilder, private api: BackendService, private router: Router) {

    // form building // inside constructor
    this.Login = this.fb.group({
      email: [''],
      password: ['']
    })
  }
    // login(){

    //   let value=this.Login.value
    // console.log(value)
    // this.api.login(value).subscribe((res:any)=>{
    //   console.log(res.data)
    //   console.log(res.status)

    //   if(res.data === 'admin'){
    //     this.router.navigate(['/users'])
    //   }
    //   else if(res.data === 'Trainer Head'){
    //     alert(res.data)
    //     this.router.navigate(['/learners'])
    //   }
    //   else if(res.data === 'Placement Officer'){
    //      this.router.navigate(['/placement'])
    //   }   
    //   else if(res.statusText === 'Unauthorized'){
    //     console.log(res.status)
    //     alert(res.message)
    //   }
    // }) 
    // }
    login() {
      let value = this.Login.value;
      console.log(value);
    
      this.api.login(value).subscribe(
        (res: any) => {
          console.log(res.data);
          console.log(res.status);
          if(res.token){
            localStorage.setItem('token',res.token)
            if (res.data === 'admin') {
            
              
            this.router.navigate(['/users']);
          
            }
            else if (res.data === 'Trainer Head') {
            alert(res.data);
            this.router.navigate(['/learners']);
            }
            else if (res.data === 'Placement Officer') {
            this.router.navigate(['/placement']);
            }
        }
      },
        (error: any) => {
          console.error(error);
          alert('Login failed. Please check your credentials and try again.');
        }
      );
    }
    
  

}
