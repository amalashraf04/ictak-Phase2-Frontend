import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  constructor(private http:HttpClient) { }
  api='http://localhost:2341'

  getData() {
  return this.http.get(`${this.api}/api`)
  }
  
  //admin
  login(data:any){
    return this.http.post(`${this.api}/api/auth`,data)
  }
  getUserData(){
    return this.http.get(`${this.api}/api/stafflist`)
  }
  addsiteUser(user:any){
    return this.http.post(`${this.api}/api/staff`,user)
  }
  deletestaff(id:any){
    return this.http.delete(`${this.api}/api/staff/${id}`)
  }
  getCurrentdata(id:any){
    return this.http.get(`${this.api}/api/staff/${id}`)
  }

  updateUser(data:any,id:any){
    console.log(id)
    return this.http.put(`${this.api}/api/staff/${id}`,data)
     }
  //learner
  addLearner(learner:any){
    return this.http.post(`${this.api}/api`,learner)
  }


  updateLearner(id:any,learner:any){
  return this.http.put(`${this.api}/api/${id}`,learner)
}
  
deletelearner(id:any){
  return this.http.delete(`${this.api}/api/${id}`)
 }

 addcsv(formdata:any){
  
  return this.http.post(`${this.api}/api/file`,formdata)
 }

 getcurrent(id:any){
  console.log(`backend service id is ${id}`)
  return this.http.get(`${this.api}/api/${id}`)
}
gettoken() :boolean{
  return !!localStorage.getItem('token')
}

}
