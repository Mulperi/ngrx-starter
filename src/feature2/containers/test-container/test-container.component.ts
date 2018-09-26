import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as fromTest from '../../store/selectors/test.selectors';
import * as fromAuth from '../../../app/store/auth/selectors/auth.selectors';

@Component({
  selector: 'app-feature2-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature2TestContainerComponent implements OnInit {
  authenticated = false;

  constructor(private store: Store<fromStore.Feature2State>) {}

  ngOnInit() {
    this.store.select(fromTest.getData).subscribe(data => {
      console.log(data);
    });

    this.store.select(fromAuth.getAuthenticated).subscribe(authenticated => {
      console.log('Authenticated: ' + authenticated);
      this.authenticated = authenticated;
    });
  }
}
