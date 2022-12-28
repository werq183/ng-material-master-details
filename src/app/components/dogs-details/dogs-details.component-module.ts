import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { DogsDetailsComponent } from './dogs-details.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonModule],
  declarations: [DogsDetailsComponent],
  providers: [],
  exports: [DogsDetailsComponent]
})
export class DogsDetailsComponentModule {
}
