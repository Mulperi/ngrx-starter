import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromFeature from '../../store';
import * as fromRoot from '../../../root/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feature2-test-container',
  templateUrl: './test-container.component.html',
  styleUrls: ['./test-container.component.scss']
})
export class Feature2TestContainerComponent implements OnInit {
  authenticated: Observable<boolean> = this.store.select(
    fromRoot.getAuthenticated
  );

  constructor(private store: Store<fromFeature.State>) {}

  ngOnInit() {
    this.store.select(fromFeature.getData).subscribe(data => {
      console.log('Feature 2 data : ' + data);
    });

    // this.store.select(fromAuth.getAuthenticated).subscribe(authenticated => {
    //   console.log('Authenticated: ' + authenticated);
    //   this.authenticated = authenticated;
    // });
  }
}
