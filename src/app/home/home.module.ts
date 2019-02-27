import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvzZqfFFeSF3OY83zKEJ_rwwiz8Xfn7sQ'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
