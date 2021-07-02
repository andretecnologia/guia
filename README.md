# Guia 

`ng new ui --routing=true --style=css --skip-tests --verbose`

`ng serve`

`npm install rxjs`

`ng g class clientes`

`ng g s clientes`

`npm install --save angular-material@latest`

`npm install --save @angular/cdk@latest`

`ng serve`

`git remote add origin https://github.com/user/repo.git`

`git checkout -b develop && git add . && git commit -m "Initial commit" && git push origin develop`

### app.module.ts

`import { HttpClientModule } from '@angular/common/http';`

Dentro de imports `imports: []`

`HttpClientModule`


### clientes.ts

```
export class Cliente {
    id: number | undefined;
    nome: string | undefined;
}
```


### clientes.service.ts

```
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Cliente } from './clientes';
import { Observable } from 'rxjs';
```

`baseUrl = environment.baseUrl;`

 `constructor(private http: HttpClient) { }`

```
getAll(): Observable<Cliente[]> {
  return this.http.get<Cliente[]>(this.baseUrl + `/clientes`);
}
```

### enviroment.ts

`baseUrl: 'http://localhost:8080'`

### app.component.ts

```
import { OnInit } from '@angular/core';
import {Cliente} from './clientes';
import { ClientesService} from './clientes.service';
```

```
export class AppComponent implements OnInit {

  clientes: Cliente[] | undefined;

  constructor(private service: ClientesService){};
  ngOnInit(): void{
    this.service.getAll().subscribe(data=>{this.clientes = data});
  }
}
```


### app.component.html

`<div *ngFor="let cliente of clientes">{{cliente.nome}}</div>`

