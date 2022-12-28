import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [
    MatTableModule,
    NgIf,
    AsyncPipe,
    MatButtonModule,
    CommonModule,
    MatGridListModule
  ],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
