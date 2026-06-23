import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private apiUrl = 'http://localhost:8080/filmes';
  private http = inject(HttpClient);

  findCartaz(): Observable<Filme[]>{
    return this.http.get<Filme[]>(`${this.apiUrl}/em-cartaz`);
  }

  findName(nomeFilme: string): Observable<Filme>
  {
    return this.http.get<Filme>(`${this.apiUrl}/buscarNome/${nomeFilme}`);
  }
  
  findById(id: Number): Observable<Filme>{
    return this.http.get<Filme>(`${this.apiUrl}/${id}`);
  }

  /*
  O metódo abaixo optei por fazer em sessao-service, através
  de uma releitura em que substitui id por nome.
  */ 

  //findSessoesByFilmeId(id: Number): Observable<Sessao[]>{
  //  return null;
  //}

}
