import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.url_base + "/heroes/";

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.baseUrl);
  }

  getHeroePorID(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(this.baseUrl + id);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(this.baseUrl + '?q=' + termino + '&_limit=5');
  }

  agregarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(this.baseUrl, heroe);
  }

  actualizarHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(this.baseUrl + heroe.id, heroe);
  }

  borrarHeroe(id: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
