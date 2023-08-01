import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { SetAdressComponent } from './Components/set-adress/set-adress.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateUserComponent},
  { path: 'adress', component: SetAdressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
