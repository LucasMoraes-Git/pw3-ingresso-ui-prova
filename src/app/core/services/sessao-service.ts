import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Sessao } from '../model/sessao';

@Injectable({
  providedIn: 'root',
})
export class SessaoService {

  private apiUrl = "http://localhost:8080/sessoes";
  private http = inject(HttpClient);

  buscarSessoesPorFilme(nomeFilme: string)
  {
    return this.http.get<Sessao[]>(this.apiUrl + "/buscarPorNomeFilme/" + nomeFilme);
  }

  
}