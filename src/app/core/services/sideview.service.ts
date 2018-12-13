import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideviewService {
  sideviewVisible = new BehaviorSubject<boolean>(false);

  getSideviewVisibleStream(): Observable<boolean> {
    return this.sideviewVisible.asObservable();
  }

  isSideviewVisible(): boolean {
    return this.sideviewVisible.getValue();
  }

  showSideview(): void {
    this.sideviewVisible.next(true);
  }
  hideSideview(): void {
    this.sideviewVisible.next(false);
  }
}
