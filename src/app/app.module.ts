import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent} from './pages/trainer/trainer.component';
import { AddlearnerComponent } from './pages/addlearner/addlearner.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {NgxCsvParserModule}  from 'ngx-csv-parser'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateleanerComponent } from './pages/updateleaner/updateleaner.component';
import { AddstaffComponent } from './admin/addstaff/addstaff.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { EdituserComponent } from './admin/edituser/edituser.component';
import { UploadfileComponent } from './pages/uploadfile/uploadfile.component';
import { HeaderComponent } from './common/header/header.component';
import { LearnerHeaderComponent } from './common/learner-header/learner-header.component';
import { PlacementofficerComponent } from './pages/placementofficer/placementofficer.component';
import { PlacementstatusComponent } from './pages/placementofficer/placementstatus/placementstatus.component';
import { PlacementheaderComponent } from './common/placementheader/placementheader.component';
import { BackendService } from './backend.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    AddlearnerComponent,
    UpdateleanerComponent,
    AddstaffComponent,
    AdmindashboardComponent,
    HomeComponent,
    LoginComponent,
    EdituserComponent,
    UploadfileComponent,
    HeaderComponent,
    LearnerHeaderComponent,
    PlacementofficerComponent,
    PlacementstatusComponent,
    PlacementheaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCsvParserModule,
    ReactiveFormsModule
  ],
   providers: [BackendService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptorService,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
