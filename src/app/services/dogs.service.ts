import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogsModel } from '../models/dogs.model';

@Injectable()
export class DogsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<DogsModel[]> {
    return this._httpClient.get<DogsModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/dogs');
  }

  delete(id: string): Observable<DogsModel> {
    return this._httpClient.delete<DogsModel>('https://636ce2d8ab4814f2b2712854.mockapi.io/dogs/' +id);
  }
}
