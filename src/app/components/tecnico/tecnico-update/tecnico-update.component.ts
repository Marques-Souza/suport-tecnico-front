import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from '../../home/models/tecnico';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

tecnico: Tecnico = {
      id: '',
      nome: '',
      cpf: '',
      email: '',
      senha: '',
      perfis: [],
      dataCriacao: ''
    }

    nome: FormControl = new FormControl(null, Validators.minLength(3));
    cpf: FormControl = new FormControl(null, Validators.required);
    email: FormControl = new FormControl(null, Validators.email);
    senha: FormControl = new FormControl(null, Validators.minLength(3));
   
  constructor(
    private service: TecnicoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    
  }

  findById(): void {
    this.service.findById(this.tecnico.id).subscribe(response => {
      response.perfis = [];
      this.tecnico = response;
    })
  }
  update() {
    this.service.update(this.tecnico).subscribe(() =>{
      this.toastr.success('Técnico atualizado com sucesso', 'Update');
      this.router.navigate(['tecnicos'])
    }, ex =>{
      console.log(ex);
      if(ex.error.errors){
        ex.error.errors.forEach(element => {
          this.toastr.error(element.message);
        });
      } else{
        this.toastr.error(ex.error.message);
        
      }

    })
}

  addPerfil(perfil: any): void {

      if (this.tecnico.perfis.includes(perfil)) {
        this.tecnico.perfis.splice(this.tecnico.perfis.indexOf(perfil), 1);
      } else{
        this.tecnico.perfis.push(perfil);
      }
  }
  validarCampos(): boolean {
    return this.nome.valid && this.cpf.valid && this.email.valid && this.senha.valid;
  }

 
}
