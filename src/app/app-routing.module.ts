import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './userprofile/login/login.component';
import { MyprofileComponent } from './userprofile/myprofile/myprofile.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
 { path: 'profile', component: MyprofileComponent },
  // Default route (optional)
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
