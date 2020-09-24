import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  

  @Input('valor') progreso: number = 50;
  // @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {
    if(this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }
    if(this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);

      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);

  }

  onChange(event: number) {
    // console.log(event);
    if(event >= 100) {
      this.progreso = 100;
    }
    else if (event <= 0) {
      this.progreso = 0;
    }
    else {
      this.progreso = event;
    }

    this.valorSalida.emit(this.progreso);
  }

}
