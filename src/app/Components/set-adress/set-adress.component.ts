import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from 'src/app/Service/jwt.service';

@Component({
  selector: 'app-set-adress',
  templateUrl: './set-adress.component.html',
  styleUrls: ['./set-adress.component.css']
})
export class SetAdressComponent {
  email: string;
  cp: number;

  constructor(private http: HttpClient, private router: Router, private jwt: JWTService) {
    this.email = jwt.email;
  }

  setAdress() {
    const token: any = this.jwt.getToken();

    if(token == null){
      alert("No se encuentra autenticado");
      this.router.navigate(['/login']);
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    };

    const loginData = {
      email: this.email,
      cp: this.cp
    };

    console.log(loginData);

    // Envía la petición HTTP al API REST para la autenticación
    this.http.post<any>('http://localhost:9019/usuario/adress', loginData, httpOptions).subscribe(
        (response) => {
          // La petición fue exitosa, maneja la respuesta del servidor
          console.log(response);
          alert("Se ingreso el CP: " + response.cp);
        },
        (error) => {
          // La petición falló, maneja el error
          console.error(error);
        }
      );
  }
}
