import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.scss'],
})
export class Topic1Component implements OnInit {
  altura = 0;
  tiempo = 0;
  velocidadInicial = 0;
  velocidadFinal = 0;
  gravedad = 9.8;
  volocidadInicialActivar = false;

  constructor() {}

  ngOnInit(): void {}

  GETVelocidadInicial(
    velocidadFinal: number,
    gravedad: number,
    tiempo: number
  ) {
    let response = 0;
    response = velocidadFinal - gravedad * tiempo;
    return response;
  }

  GETvelocidadFinalPositivo(
    velocidadInicial: number,
    gravedad: number,
    tiempo: number
  ) {
    let response = 0;
    response = velocidadInicial + gravedad * tiempo;
    return response;
  }

  GETvelocidadFinalNegativo(
    velocidadInicial: number,
    gravedad: number,
    tiempo: number
  ) {
    let response = 0;
    response = velocidadInicial - gravedad * tiempo;
    return response;
  }

  GETVelocidadFinalCudaradoPositivo(
    velocidadInicial: number,
    gravedad: number,
    altura: number
  ) {
    let response = 0;
    let response1 = 0;
    let response2 = 0;
    response1 = velocidadInicial * velocidadInicial;
    response2 = 2 * gravedad * altura;
    response = response1 + response2;
    return response;
  }

  GETVelocidadFinalCudaradoNegativo(
    velocidadInicial: number,
    gravedad: number,
    altura: number
  ) {
    let response = 0;
    let response1 = 0;
    let response2 = 0;
    response1 = velocidadInicial * velocidadInicial;
    response2 = 2 * gravedad * altura;
    response = response1 - response2;
    return response;
  }

  GETAltura(velocidadInicial: number, velocidadFinal: number, tiempo: number) {
    let response = 0;
    response = ((velocidadInicial + velocidadFinal) / 2) * tiempo;
    return response;
  }

  GETAlturaPositivo(
    velocidadInicial: number,
    tiempo: number,
    gravedad: number
  ) {
    let response = 0;
    let response1 = 0;
    let response2 = 0;
    response1 = velocidadInicial * tiempo;
    response2 = gravedad * (tiempo * tiempo);
    response = response1 + response2 / 2;
    return response;
  }

  GETAlturaNegativo(
    velocidadInicial: number,
    tiempo: number,
    gravedad: number
  ) {
    let response = 0;
    let response1 = 0;
    let response2 = 0;
    response1 = velocidadInicial * tiempo;
    response2 = gravedad * (tiempo * tiempo);
    response = response1 - response2 / 2;
    return response;
  }

  GETtiempo(
    velocidadFinal: number,
    velocidadInicial: number,
    gravedad: number
  ) {
    let response = 0;
    response = (velocidadFinal - velocidadInicial) / gravedad;
    return response;
  }

  caidaLibre() {
    // CALCULAR ALTURA
    if (this.altura === 0) {
      if (this.velocidadInicial >= 0 && this.velocidadFinal && this.tiempo) {
        this.altura = this.GETAltura(
          this.velocidadInicial,
          this.velocidadFinal,
          this.tiempo
        );
      } else if (this.velocidadInicial >= 0 && this.tiempo && this.gravedad) {
        this.altura = this.GETAlturaPositivo(
          this.velocidadInicial,
          this.tiempo,
          this.gravedad
        );
      }
    }
    // CALCULAR TIEMPO
    if (this.tiempo === 0) {
      if (this.velocidadInicial >= 0 && this.velocidadFinal && this.gravedad) {
        this.tiempo = this.GETtiempo(
          this.velocidadFinal,
          this.velocidadInicial,
          this.gravedad
        );
      }
    }
    // CALCULAR VELOCIDAD INICIAL
    if (this.velocidadInicial === 0 && this.volocidadInicialActivar) {
      console.log('calcular velocidad inicial');
      if (this.velocidadFinal > 0 && this.gravedad && this.tiempo) {
        this.velocidadInicial = this.GETVelocidadInicial(
          this.velocidadFinal,
          this.gravedad,
          this.tiempo
        );
      }
    }
    // CALCULAR VELOCIDAD FINAL
    if (this.velocidadFinal === 0) {
      if (this.velocidadInicial >= 0 && this.gravedad && this.tiempo) {
        this.velocidadFinal = this.GETvelocidadFinalPositivo(
          this.velocidadInicial,
          this.gravedad,
          this.tiempo
        );
      }
    }
  }

  clear() {
    this.altura = 0;
    this.tiempo = 0;
    this.velocidadInicial = 0;
    this.velocidadFinal = 0;
  }
}
