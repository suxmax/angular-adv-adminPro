import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html'
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => console.log(usuarios));


    // const promesa = new Promise( (resolve, reject) => {
    //   if(false){
    //     resolve('Hola mundo');
    //   }
    //   else {
    //     reject('Algo saliò mal');
    //   }
    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch(err => console.log('Er promesa', err))
    // console.log('fin de init')
  }

  getUsuarios() {

    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });

    return promesa;

  }

}
