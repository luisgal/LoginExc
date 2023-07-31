import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    console.log(loginData);

    // Envía la petición HTTP al API REST para la autenticación
    this.http.post<any>('http://localhost:9011/login', loginData).subscribe(
        (response) => {
          // La petición fue exitosa, maneja la respuesta del servidor
          console.log(response);
        },
        (error) => {
          // La petición falló, maneja el error
          console.error(error);
        }
      );
  }
}