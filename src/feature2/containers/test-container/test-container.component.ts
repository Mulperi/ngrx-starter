import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as fromTest from '../../store/selectors/test.selectors';

@Component({
  selector: 'app-feature2-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature2TestContainerComponent implements OnInit {
  constructor(private store: Store<fromStore.Feature2State>) {}

  ngOnInit() {
    this.store.select(fromTest.getData).subscribe(data => {
      console.log(data);
    });
  }
}
