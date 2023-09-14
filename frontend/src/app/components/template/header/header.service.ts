import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.data.model';

@Injectable({
  providedIn: 'root', //irá usar um injetor raiz, significa que vai ter uma unica instancia desse service na aplicação
})
export class HeaderService {
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: '',
  });
  constructor() {}

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
