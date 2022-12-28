import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  private _detailsSubject: Subject<ProductModel> = new Subject<ProductModel>();
  public details$: Observable<ProductModel> = this._detailsSubject.asObservable();
  constructor(private _productService: ProductService) {
  }

  selectProduct(product: ProductModel): void {
    this._detailsSubject.next(product);
  }
}
