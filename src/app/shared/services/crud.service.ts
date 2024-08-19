import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICrudService } from '../interfaces/service.interface';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T> implements ICrudService<T> {

  constructor(
    protected http: HttpClient,
    protected baseUrl: string 
  ) { }

  insert(item: T): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}Insert`, item);
  }
  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}Get?id=${id}`);
  }
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}GetAll`);
  }
  update(item: T): Observable<boolean> {
    return this.http.put<boolean>(`${this.baseUrl}Update`, item);
  }
  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}Delete?id=${id}`);
  }
}
