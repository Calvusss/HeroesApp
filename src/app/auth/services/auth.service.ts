import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url_base: string = environment.url_base;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) { }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token'))
      return of(false);

    return this.http.get<Auth>(`${this.url_base}/usuarios/1`)
      .pipe(
        map(auth => {
          console.log('map', auth);
          return true;
        }));
  }

  login() {
    return this.http.get<Auth>(`${this.url_base}/usuarios/1`)
      .pipe(
        tap(auth => {
          this._auth = auth;
          localStorage.setItem('token', auth.id);
        }));
  }

  logout() {
    this._auth = undefined;
  }
}
