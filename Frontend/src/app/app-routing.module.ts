import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginComponent } from './Login/Login.component';
import { Sign_up } from './Sign_up/Sign_up.component';
import { Detail_Page } from './Detail_Page/Detail_page.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'Login', component:loginComponent},
    {path:'Sign_up', component: Sign_up},
    {path:'ProductDetails', component: Detail_Page}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
