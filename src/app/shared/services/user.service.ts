import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../../environment/enviroment';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User> {

  public nameController = 'User/';

  constructor(http: HttpClient) {
    super(http, `${enviroment.urlBackEnd}User/`);
  }

  Login(name: string, pwd: string): Observable<boolean> {
    return this.http.get<boolean>(`${enviroment.urlBackEnd + this.nameController}Login?name=${name}&pwd=${pwd}`);
  }
}
