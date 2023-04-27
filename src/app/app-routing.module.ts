import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { AddlearnerComponent } from './pages/addlearner/addlearner.component';
import { UpdateleanerComponent } from './pages/updateleaner/updateleaner.component';
import { AddstaffComponent } from './admin/addstaff/addstaff.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { UploadfileComponent } from './pages/uploadfile/uploadfile.component';
import { PlacementofficerComponent } from './pages/placementofficer/placementofficer.component';
import { PlacementstatusComponent } from './pages/placementofficer/placementstatus/placementstatus.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'learners',canActivate:[AuthGuard],component:TrainerComponent},
  {path:'add',canActivate:[AuthGuard],component:AddlearnerComponent},
  {path:'update/:id',canActivate:[AuthGuard],component:UpdateleanerComponent},
  {path:'add-user',canActivate:[AuthGuard],component:AddstaffComponent},
  {path:'users',canActivate:[AuthGuard],component:AdmindashboardComponent},
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'edit/:id',canActivate:[AuthGuard],component:EdituserComponent},
  {path:'csv',component:UploadfileComponent},
  {path:'placement',canActivate:[AuthGuard],component:PlacementofficerComponent},
  {path:'edit-status-placement', canActivate:[AuthGuard],component:PlacementstatusComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
