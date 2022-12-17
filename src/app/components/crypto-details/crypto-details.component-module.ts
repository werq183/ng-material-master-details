import { NgModule } from '@angular/core';
import { CryptoDetailsComponent } from './crypto-details.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatGridListModule,
    MatListModule,
    NgForOf,
    AsyncPipe,
    MatButtonModule,
    NgIf
  ],
  declarations: [CryptoDetailsComponent],
  providers: [],
  exports: [CryptoDetailsComponent]
})
export class CryptoDetailsComponentModule {
}
