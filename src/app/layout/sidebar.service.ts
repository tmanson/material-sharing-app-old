import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SidebarService {
  public sidebarToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public toggle() {
    return this.sidebarToggleSubject.next(null);
  }
}
