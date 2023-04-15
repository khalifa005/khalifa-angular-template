// import { Pipe, PipeTransform } from '@angular/core';
// import { pluck } from 'rxjs/operators';

// import { Observable } from 'rxjs';

// // Used for translation in lazy loaded modules as translate pipe and translate service provided from ngx-translate has bug.

// @Pipe({
//   name: 'translateLazy',
//   pure: false
// })
// export class TranslateLazyPipe implements PipeTransform {

//   translations$: Observable<any>; // we can set which type we want

//   constructor(private readonly store: Store<IAppState>) {
//     // Here I get translations from redux but it can be from servise or http call, whatever...
//     this.translations$ = this.store.pipe(select('layout'), pluck('translations'));
//   }


//   transform(value: string): Observable<string> { // Returns observable, therefore in html do | async after this pipe.

//     return new Observable((observer) => {

//       this.translations$.subscribe(item => {

//         if (!item) {
//           return;
//         }

//         observer.next((item[value] !== undefined) ? item[value] : `?${value}`);
//         observer.complete();
//       });
//     });
//   }
// }
