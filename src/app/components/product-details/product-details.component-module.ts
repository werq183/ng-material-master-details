import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ProductDetailsComponent } from './product-details.component';
import { AsyncPipe, NgIf } from '@angular/common';

@NgModule({
  imports: [
    MatTableModule,
    NgIf,
    AsyncPipe,
    MatButtonModule,
    CommonModule
  ],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
