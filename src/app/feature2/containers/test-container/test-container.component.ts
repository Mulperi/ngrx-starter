import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromFeature from '../../store';
import * as fromRoot from '../../../root/store';
import * as authActions from '../../../root/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feature2-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature2TestContainerComponent implements OnInit {
  authenticated: Observable<boolean> = this.rootStore.select(
    fromRoot.getAuthenticated
  );

  constructor(
    private featureStore: Store<fromFeature.State>,
    private rootStore: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.featureStore.select(fromFeature.getData).subscribe(data => {
      console.log('Feature 2 data: ' + data);
    });
  }

  onAuthenticateClick() {
    this.rootStore.dispatch(new authActions.AuthAuthenticate());
  }
}
