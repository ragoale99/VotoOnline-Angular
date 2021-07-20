import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  error = new Subject<string>();
  private role = 'admin';
  constructor(private http: HttpClient) {}

  getRole() {
    return this.role;
  }

  setRole(ruolo: string) {
    this.role = ruolo;
  }

  loginUser(email: string, password: string, url: string) {
    const postData: User = { email: email, password: password };
    return this.http.post<{ name: string }>(url, postData).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
