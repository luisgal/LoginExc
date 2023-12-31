import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router, private jwt: JWTService) {}

  login() {
    const loginData = {
      username: this.username,
      password: this.password
    };

    console.log(loginData);

    // Envía la petición HTTP al API REST para la autenticación
    this.http.post<any>('http://localhost:9019/login', loginData).subscribe(
        (response) => {
          // La petición fue exitosa, maneja la respuesta del servidor
          console.log(response);
          this.router.navigate(['/adress']);
          this.jwt.setToken(response.token);
          this.jwt.email = response.Username;
        },
        (error) => {
          // La petición falló, maneja el error
          console.error(error);
          this.jwt.removeToken();
          this.jwt.email = "";
        }
      );
  }
}