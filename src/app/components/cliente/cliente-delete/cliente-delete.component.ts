import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from '../../home/models/cliente';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

 cliente: Cliente = {
       id: '',
       nome: '',
       cpf: '',
       email: '',
       senha: '',
       perfis: [],
       dataCriacao: ''
     }
 
    
   constructor(
     private service: ClienteService,
     private toastr: ToastrService,
     private router: Router,
     private route: ActivatedRoute
   ) { }
 
   ngOnInit(): void {
     this.cliente.id = this.route.snapshot.paramMap.get('id');
     this.findById();
     
   }
 
   findById(): void {
     this.service.findById(this.cliente.id).subscribe(response => {
       response.perfis = [];
       this.cliente = response;
     })
   }
   delete() {
     this.service.delete(this.cliente.id).subscribe(() =>{
       this.toastr.success('Cliente deletado com sucesso', 'Delete');
       this.router.navigate(['clientes'])
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
 
 
  
 }
