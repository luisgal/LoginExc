import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  public email: string;
  private readonly TOKEN_KEY = 'my_app_jwt';

  constructor() {}

  // Método para guardar el token en el almacenamiento local
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // Método para obtener el token desde el almacenamiento local
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Método para eliminar el token del almacenamiento local
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
