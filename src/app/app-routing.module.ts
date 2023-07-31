import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { InitPageComponent } from './Components/init-page/init-page.component';
import { AuthGuard } from './auth.guard';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'init', component: InitPageComponent, canActivate: [AuthGuard] },
  { path: 'inicio', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
