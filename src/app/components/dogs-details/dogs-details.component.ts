import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DogsModel } from '../../models/dogs.model';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs-details',
  styleUrls: ['./dogs-details.component.scss'],
  templateUrl: './dogs-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsDetailsComponent {
  readonly list$: Observable<DogsModel[]> = this._dogsService.getAll();
  private _detailsSubject: Subject<DogsModel | undefined> = new Subject<DogsModel | undefined>();
  public details$: Observable<DogsModel | undefined> = this._detailsSubject.asObservable();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<DogsModel[]> = this.refresh$.pipe(switchMap(data => this._dogsService.getAll()));

  constructor(private _dogsService: DogsService) {
  }

  selectDog(dog: DogsModel): void {
    this._detailsSubject.next(dog);
  }

  delete(id: string): void {
    this._dogsService.delete(id).subscribe(() => this._refreshSubject.next());
  }

  hideProduct(): void {
    this._detailsSubject.next(undefined);
  }
}
