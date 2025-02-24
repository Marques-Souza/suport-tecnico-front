import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../home/models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    creds: Credenciais = {
      email: '',
      senha: ''
    }

    email = new FormControl(null, Validators.email);
    senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private toastr: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  logar() {
    this.service.authenticate(this.creds).subscribe(resposta => {
      this.service.successfullLogin(resposta.headers.get('Authorization').substring(7));
      this.router.navigate(['']);
     
    }, () => {
      this.toastr.error('Usúario e/ou senha inválidos');
    })
    

  }

  validarCampos(): boolean {
       return this.email.valid && this.senha.valid
    }
}
