import { Injectable } from '@angular/core';
import { Credenciais } from '../components/home/models/credenciais';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../components/home/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais ){
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text'
    })
  }

  successfullLogin(authToken: string){
    localStorage.setItem('token', authToken);
  }
}
