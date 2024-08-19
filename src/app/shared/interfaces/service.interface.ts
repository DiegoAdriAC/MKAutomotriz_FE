import { Observable } from "rxjs";

export interface ICrudService<T> {
    insert(item: T): Observable<boolean>;
    get(id: number): Observable<T>;
    getAll(): Observable<T[]>;
    update(item: T): Observable<boolean>;
    delete(id: number): Observable<boolean>;
}