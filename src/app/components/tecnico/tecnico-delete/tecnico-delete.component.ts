import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Tecnico } from '../../home/models/tecnico';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

 tecnico: Tecnico = {
       id: '',
       nome: '',
       cpf: '',
       email: '',
       senha: '',
       perfis: [],
       dataCriacao: ''
     }
 
    
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
   delete() {
     this.service.delete(this.tecnico.id).subscribe(() =>{
       this.toastr.success('Técnico deletado com sucesso', 'Delete');
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
 
 
  
 }
