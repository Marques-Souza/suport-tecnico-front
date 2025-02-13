import { Component, OnInit } from '@angular/core';
import { Credenciais } from '../home/models/credenciais';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  logar() {
    this.toastr.error('Usuário e/ou senha inválidos', 'Login');
    this.creds.senha = '';
    

  }

  validarCampos(): boolean {
    return this.email.valid && this.senha.valid
    }
}
