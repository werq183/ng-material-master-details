import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogsDetailsComponent } from './components/dogs-details/dogs-details.component';
import { DogsDetailsComponentModule } from './components/dogs-details/dogs-details.component-module';
import { DogsServiceModule } from './services/dogs.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'dogs', component: DogsDetailsComponent }]), DogsDetailsComponentModule, DogsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
