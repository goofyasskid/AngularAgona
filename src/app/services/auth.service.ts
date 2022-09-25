import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LocalStorage } from '../utils/local-storage';
import { IAuthParams, IUser } from '../interface/IUser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  @LocalStorage() user?: any | null;
  @LocalStorage() token?: string | null;

  constructor(private http: HttpClient) {
  }

  authorize(credentials: IAuthParams): Observable<any> {
    return this.http.post('login', credentials);
  }

  registration(data: IUser): Observable<any> {
    return this.http.post('account', data);
  }

  get isAuthorized(): boolean {
    return this.token !== null;
  }

  saveToStorage(res: any): void {
    this.token = res.access_token;
  }

  deleteInStorage(): void {
    this.token = null;
  }

  getProfile(): Observable<any> {
    return this.http.get('profile');
  }
}
