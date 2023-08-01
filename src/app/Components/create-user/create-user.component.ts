import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  nombre: string;
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) {}

  create() {
    const loginData = {
      nombre: this.nombre,
      email: this.email,
      password: this.password
    };

    console.log(loginData);

    // Envía la petición HTTP al API REST para la autenticación
    this.http.post<any>('http://localhost:9019/usuario/create', loginData).subscribe(
        (response) => {
          // La petición fue exitosa, maneja la respuesta del servidor
          console.log(response);
          this.router.navigate(['/login']);
        },
        (error) => {
          // La petición falló, maneja el error
          console.error(error);
        }
      );
  }
}
