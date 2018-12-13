import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromFeature from '../../store';
import { SideviewService } from 'src/app/core/services/sideview.service';

@Component({
  selector: 'app-feature1-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature1TestContainerComponent implements OnInit {
  constructor(
    private store: Store<fromFeature.State>,
    private sideviewService: SideviewService
  ) {}

  ngOnInit() {
    this.store.select(fromFeature.getData).subscribe(data => {
      console.log('Feature 1 data: ' + data);
    });
  }

  toggleSideView(): any {
    return this.sideviewService.isSideviewVisible()
      ? this.sideviewService.hideSideview()
      : this.sideviewService.showSideview();
  }
}
