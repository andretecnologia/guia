import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Cliente} from './clientes';
import { ClientesService} from './clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(private service: ClientesService){};
  ngOnInit(): void{
    this.service.getAll().subscribe(data=>{this.clientes = data});
  }
}
