import { Component } from '@angular/core';
import { SideviewService } from '../../services/sideview.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent {
  sideviewVisible$: Observable<
    boolean
  > = this.sideviewService.getSideviewVisibleStream();

  constructor(private sideviewService: SideviewService) {}

  hideSideview(): void {
    this.sideviewService.hideSideview();
  }
}
