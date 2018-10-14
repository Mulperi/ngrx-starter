import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromFeature from '../../store';

@Component({
  selector: 'app-feature1-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature1TestContainerComponent implements OnInit {
  constructor(private store: Store<fromFeature.State>) {}

  ngOnInit() {
    this.store.select(fromFeature.getData).subscribe(data => {
      console.log('Feature 1 data: ' + data);
    });
  }
}
