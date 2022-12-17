import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { CryptoDetailsComponent } from './components/crypto-details/crypto-details.component';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeDetailsComponentModule } from './components/employee-details/employee-details.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';
import { CryptoDetailsComponentModule } from './components/crypto-details/crypto-details.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductDetailsComponent }, { path: 'employees', component: EmployeeDetailsComponent }, { path: 'crypto', component: CryptoDetailsComponent }]), ProductDetailsComponentModule, ProductServiceModule, EmployeeDetailsComponentModule, EmployeesServiceModule, CryptoDetailsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
