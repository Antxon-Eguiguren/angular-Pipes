import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  precio: number;
  fechaActual: Date;
  numero: number;
  numAleatorio: number;
  arrNumeros: number[];
  inicio: number;
  fin: number;
  promesaUsers: Promise<any[]>;

  constructor(private httpClient: HttpClient) {
    this.precio = 1345.54576435;
    this.fechaActual = new Date();
    this.numero = 3434213.93243242;
    this.numAleatorio = Math.random();
    this.arrNumeros = [3, 45, 67, 3, 2, 9, 96, 41, 4, 56, 78, 73, 2];
    this.inicio = 2;
    this.fin = 6;
  }

  ngOnInit() {
    setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);

    // Promesa sin resolver
    this.promesaUsers = this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').toPromise();

  }

  manejarChangeInicio($event) {
    console.log($event.target.value);
    this.inicio = $event.target.value;
  }

  manejarChangeFin($event) {
    console.log($event.target.value);
    this.fin = $event.target.value;
  }

}
