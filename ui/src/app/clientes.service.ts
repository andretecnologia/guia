import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Cliente } from './clientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

    getAll(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.baseUrl + `/clientes`);
    }
}
