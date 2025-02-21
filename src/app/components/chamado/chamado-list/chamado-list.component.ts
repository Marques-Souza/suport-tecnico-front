import { Component, OnInit, ViewChild } from '@angular/core';
import { Chamado } from '../../home/models/chamado';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: '2021-04-21',
      dataFechamento: '2021-04-21',
      prioridade: 'ALTA',
      status: 'ANDAMENTO',
      titulo: 'Chamado 1',
      descricao: 'Descricao do chamado 1',
      tecnico: '1',
      cliente: '6',
      nomeCliente: 'marques souza',
      nomeTecnico: 'yore'
  
    }

  ]
  
    displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
    dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
