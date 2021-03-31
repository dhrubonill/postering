import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../../environments/environment';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents = [
  MatToolbarModule,
  MatGridListModule,
  MatTabsModule,
  MatMenuModule,
  MatIconModule,
];

@NgModule({
  imports: [MaterialComponents , AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule],
  exports: [MaterialComponents]
})
export class MaterialModule { }
