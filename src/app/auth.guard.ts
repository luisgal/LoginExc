import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Aquí verificas si el usuario está autenticado, por ejemplo, a través de algún servicio o variable de estado

    const isUserAuthenticated = true; // Aquí debes implementar la lógica para verificar la autenticación

    if (isUserAuthenticated) {
      return true; // Permite el acceso a la ruta protegida
    } else {
      // Si el usuario no está autenticado, redirígelo a la página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}