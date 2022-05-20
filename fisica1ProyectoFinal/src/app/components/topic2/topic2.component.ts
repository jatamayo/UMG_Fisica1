import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.scss'],
})
export class Topic2Component implements OnInit {
  fuerza = 0;
  masa = 0;
  aceleracion = 0;

  constructor() {}

  ngOnInit(): void {}

  GETFuerza(masa: number, aceleracion: number) {
    let response = 0;
    response = masa * aceleracion;
    return response;
  }

  GETMasa(fuerza: number, aceleracion: number) {
    let response = 0;
    response = fuerza / aceleracion;
    return response;
  }

  GETAceleracion(fuerza: number, masa: number) {
    let response = 0;
    response = fuerza / masa;
    return response;
  }

  segundaLeyNewton() {
    // CALCULAR FUERZA
    if (this.fuerza === 0) {
      if (this.masa && this.aceleracion) {
        this.fuerza = this.GETFuerza(this.masa, this.aceleracion);
      }
    }
    // CALCULAR MASA
    if (this.masa === 0) {
      if (this.fuerza && this.aceleracion) {
        this.masa = this.GETMasa(this.fuerza, this.aceleracion);
      }
    }
    // CALCULAR ACELERACION
    if (this.aceleracion === 0) {
      if (this.masa && this.fuerza) {
        this.aceleracion = this.GETFuerza(this.fuerza, this.masa);
      }
    }
  }

  clear() {
    this.fuerza = 0;
    this.masa = 0;
    this.aceleracion = 0;
  }
}
