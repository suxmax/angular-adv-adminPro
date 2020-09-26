import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription;

  constructor() { 
    
    // this.retornaObservable().pipe(retry(2))
    // .subscribe(
    //   valor => console.log('Subs:', valor),
    //   err => console.warn('Error', err),
    //   () => console.info('Observable terminado') 
    //   );


    this.intervalSub = this.retornaIntervalo()
      .subscribe( valor => console.log(valor))
   }
   
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

    retornaIntervalo(): Observable<number> {
      return interval(100)
              .pipe(
                // take(10),
                map(valor => {
                return  valor + 1;
              }), 
              filter(valor => (valor%2 === 0) ? true: false))                       
    }
    
    retornaObservable(): Observable<number> {
      
      let i = 0;
        const observable$ = new Observable<number>( observer => {
      
          const intervalo = setInterval(() => {
            
            i++;
            
            observer.next(i);
            
            if(i === 4) {
              clearInterval(intervalo);
              observer.complete();
            }
            
            if(i === 2) {
              observer.error('i llegò al valor de 2')
            }
          }, 1000)
          
        });

        return observable$;
      }

  

 

}
