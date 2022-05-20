import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-measurement-conversion',
  templateUrl: './measurement-conversion.component.html',
  styleUrls: ['./measurement-conversion.component.scss'],
})
export class MeasurementConversionComponent implements OnInit {
  object1: Food[] = [
    { value: 'kilogramo', viewValue: 'Kilogramo' },
    { value: 'gramo', viewValue: 'Gramo' },
    { value: 'libra', viewValue: 'Libra' },
    { value: 'onza', viewValue: 'Onza' },
  ];
  object2: Food[] = [
    { value: 'segundo', viewValue: 'Segundo' },
    { value: 'minuto', viewValue: 'Minuto' },
    { value: 'hora', viewValue: 'Hora' },
    { value: 'dia', viewValue: 'Dia' },
    { value: 'anio', viewValue: 'Anio' },
  ];
  nameValue1 = 'kilogramo';
  nameValue2 = 'kilogramo';
  nameValue3 = 'segundo';
  nameValue4 = 'segundo';
  numericValue1 = 1;
  numericValue2 = 1;
  numericValue3 = 1;
  numericValue4 = 1;

  constructor() {}

  ngOnInit(): void {}

  onChangeValueMeasureNumericValue1() {
    /** KILOGRAMO */
    if (this.nameValue1 === 'kilogramo') {
      if (this.nameValue2 === 'kilogramo') {
        this.numericValue2 = this.numericValue1;
      } else if (this.nameValue2 === 'gramo') {
        this.numericValue2 = this.numericValue1 * 1000;
      } else if (this.nameValue2 === 'libra') {
        this.numericValue2 = this.numericValue1 * 2.20462;
      } else if (this.nameValue2 === 'onza') {
        this.numericValue2 = 0.0283495;
      }
    } else if (this.nameValue1 === 'gramo') {
      /** GRAMO */
      if (this.nameValue2 === 'kilogramo') {
        this.numericValue2 = this.numericValue1 * 0.001;
      } else if (this.nameValue2 === 'gramo') {
        this.numericValue2 = this.numericValue1;
      } else if (this.nameValue2 === 'libra') {
        this.numericValue2 = this.numericValue1 * 0.00220462;
      } else if (this.nameValue2 === 'onza') {
        this.numericValue2 = 0.035274;
      }
    } else if (this.nameValue1 === 'libra') {
      /** LIBRA */
      if (this.nameValue2 === 'kilogramo') {
        this.numericValue2 = this.numericValue1 * 0.453592;
      } else if (this.nameValue2 === 'gramo') {
        this.numericValue2 = this.numericValue1 * 453.592;
      } else if (this.nameValue2 === 'libra') {
        this.numericValue2 = this.numericValue1;
      } else if (this.nameValue2 === 'onza') {
        this.numericValue2 = 0.0625;
      }
    } else if (this.nameValue1 === 'onza') {
      /** ONZA */
      if (this.nameValue2 === 'kilogramo') {
        this.numericValue2 = this.numericValue1 * 0.0283495;
      } else if (this.nameValue2 === 'gramo') {
        this.numericValue2 = this.numericValue1 * 28.3495;
      } else if (this.nameValue2 === 'libra') {
        this.numericValue2 = this.numericValue1 * 0.0625;
      } else if (this.nameValue2 === 'onza') {
        this.numericValue2 = this.numericValue1;
      }
    }
  }

  onChangeValueMeasureNumericValue2() {
    /** KILOGRAMO */
    if (this.nameValue2 === 'kilogramo') {
      if (this.nameValue1 === 'kilogramo') {
        this.numericValue1 = this.numericValue2;
      } else if (this.nameValue1 === 'gramo') {
        this.numericValue1 = this.numericValue2 * 1000;
      } else if (this.nameValue1 === 'libra') {
        this.numericValue1 = this.numericValue2 * 2.20462;
      } else if (this.nameValue1 === 'onza') {
        this.numericValue1 = 0.0283495;
      }
    } else if (this.nameValue2 === 'gramo') {
      /** GRAMO */
      if (this.nameValue1 === 'kilogramo') {
        this.numericValue1 = this.numericValue2 * 0.001;
      } else if (this.nameValue1 === 'gramo') {
        this.numericValue1 = this.numericValue2;
      } else if (this.nameValue1 === 'libra') {
        this.numericValue1 = this.numericValue2 * 0.00220462;
      } else if (this.nameValue1 === 'onza') {
        this.numericValue1 = 0.035274;
      }
    } else if (this.nameValue2 === 'libra') {
      /** LIBRA */
      if (this.nameValue1 === 'kilogramo') {
        this.numericValue1 = this.numericValue2 * 0.453592;
      } else if (this.nameValue1 === 'gramo') {
        this.numericValue1 = this.numericValue2 * 453.592;
      } else if (this.nameValue1 === 'libra') {
        this.numericValue1 = this.numericValue2;
      } else if (this.nameValue1 === 'onza') {
        this.numericValue1 = 0.0625;
      }
    } else if (this.nameValue2 === 'onza') {
      /** ONZA */
      if (this.nameValue1 === 'kilogramo') {
        this.numericValue1 = this.numericValue2 * 0.0283495;
      } else if (this.nameValue1 === 'gramo') {
        this.numericValue1 = this.numericValue2 * 28.3495;
      } else if (this.nameValue1 === 'libra') {
        this.numericValue1 = this.numericValue2 * 0.0625;
      } else if (this.nameValue1 === 'onza') {
        this.numericValue1 = this.numericValue2;
      }
    }
  }

  onChangeValueMeasureNumericValue3() {
    /** SEGUNDO */
    if (this.nameValue3 === 'segundo') {
      if (this.nameValue4 === 'segundo') {
        this.numericValue4 = this.numericValue3;
      } else if (this.nameValue4 === 'minuto') {
        this.numericValue4 = this.numericValue3 * 0.0166667;
      } else if (this.nameValue4 === 'hora') {
        this.numericValue4 = this.numericValue3 * 0.000277778;
      } else if (this.nameValue4 === 'dia') {
        this.numericValue4 = this.numericValue3 * 0.0000115741;
      } else if (this.nameValue4 === 'anio') {
        this.numericValue4 = this.numericValue3 * 0.0000000031688;
      }
    } else if (this.nameValue3 === 'minuto') {
      /** MINUTO */
      if (this.nameValue4 === 'segundo') {
        this.numericValue4 = this.numericValue3 * 60;
      } else if (this.nameValue4 === 'minuto') {
        this.numericValue4 = this.numericValue3;
      } else if (this.nameValue4 === 'hora') {
        this.numericValue4 = this.numericValue3 * 0.0166667;
      } else if (this.nameValue4 === 'dia') {
        this.numericValue4 = this.numericValue3 * 0.000694444;
      } else if (this.nameValue4 === 'anio') {
        this.numericValue4 = this.numericValue3 * 0.0000019013;
      }
    } else if (this.nameValue3 === 'hora') {
      /** HORA */
      if (this.nameValue4 === 'segundo') {
        this.numericValue4 = this.numericValue3 * 360;
      } else if (this.nameValue4 === 'minuto') {
        this.numericValue4 = this.numericValue3 * 60;
      } else if (this.nameValue4 === 'hora') {
        this.numericValue4 = this.numericValue3;
      } else if (this.nameValue4 === 'dia') {
        this.numericValue4 = this.numericValue3 * 0.041667;
      } else if (this.nameValue4 === 'anio') {
        this.numericValue4 = this.numericValue3 * 0.00011408;
      }
    } else if (this.nameValue3 === 'dia') {
      /** DIA */
      if (this.nameValue4 === 'segundo') {
        this.numericValue4 = this.numericValue3 * 86400;
      } else if (this.nameValue4 === 'minuto') {
        this.numericValue4 = this.numericValue3 * 1440;
      } else if (this.nameValue4 === 'hora') {
        this.numericValue4 = this.numericValue3 * 24;
      } else if (this.nameValue4 === 'dia') {
        this.numericValue4 = this.numericValue3;
      } else if (this.nameValue4 === 'anio') {
        this.numericValue4 = this.numericValue3 * 0.00273785;
      }
    } else if (this.nameValue3 === 'anio') {
      /** ANIO */
      if (this.nameValue4 === 'segundo') {
        this.numericValue4 = this.numericValue3 * 31557600;
      } else if (this.nameValue4 === 'minuto') {
        this.numericValue4 = this.numericValue3 * 525960;
      } else if (this.nameValue4 === 'hora') {
        this.numericValue4 = this.numericValue3 * 8766;
      } else if (this.nameValue4 === 'dia') {
        this.numericValue4 = this.numericValue3 * 365;
      } else if (this.nameValue4 === 'anio') {
        this.numericValue4 = this.numericValue3;
      }
    }
  }

  onChangeValueMeasureNumericValue4() {
    /** SEGUNDO */
    console.log('entramos');
    if (this.nameValue4 === 'segundo') {
      console.log('stop 2');
      if (this.nameValue3 === 'segundo') {
        console.log('stop 3');
        this.numericValue3 = this.numericValue4;
      } else if (this.nameValue3 === 'minuto') {
        this.numericValue3 = this.numericValue4 * 0.0166667;
      } else if (this.nameValue3 === 'hora') {
        this.numericValue3 = this.numericValue4 * 0.000277778;
      } else if (this.nameValue3 === 'dia') {
        this.numericValue3 = this.numericValue4 * 0.0000115741;
      } else if (this.nameValue3 === 'anio') {
        this.numericValue3 = this.numericValue4 * 0.0000000031688;
      }
    } else if (this.nameValue4 === 'minuto') {
      /** MINUTO */
      if (this.nameValue3 === 'segundo') {
        this.numericValue3 = this.numericValue4 * 60;
      } else if (this.nameValue3 === 'minuto') {
        this.numericValue3 = this.numericValue4;
      } else if (this.nameValue3 === 'hora') {
        this.numericValue3 = this.numericValue4 * 0.0166667;
      } else if (this.nameValue3 === 'dia') {
        this.numericValue3 = this.numericValue4 * 0.000694444;
      } else if (this.nameValue3 === 'anio') {
        this.numericValue3 = this.numericValue4 * 0.0000019013;
      }
    } else if (this.nameValue4 === 'hora') {
      /** HORA */
      if (this.nameValue3 === 'segundo') {
        this.numericValue3 = this.numericValue4 * 360;
      } else if (this.nameValue3 === 'minuto') {
        this.numericValue3 = this.numericValue4 * 60;
      } else if (this.nameValue3 === 'hora') {
        this.numericValue3 = this.numericValue4;
      } else if (this.nameValue3 === 'dia') {
        this.numericValue3 = this.numericValue4 * 0.041667;
      } else if (this.nameValue3 === 'anio') {
        this.numericValue3 = this.numericValue4 * 0.00011408;
      }
    } else if (this.nameValue4 === 'dia') {
      /** DIA */
      if (this.nameValue3 === 'segundo') {
        this.numericValue3 = this.numericValue4 * 86400;
      } else if (this.nameValue3 === 'minuto') {
        this.numericValue3 = this.numericValue4 * 1440;
      } else if (this.nameValue3 === 'hora') {
        this.numericValue3 = this.numericValue4 * 24;
      } else if (this.nameValue3 === 'dia') {
        this.numericValue3 = this.numericValue4;
      } else if (this.nameValue3 === 'anio') {
        this.numericValue3 = this.numericValue4 * 0.00273785;
      }
    } else if (this.nameValue4 === 'anio') {
      /** ANIO */
      if (this.nameValue3 === 'segundo') {
        this.numericValue3 = this.numericValue4 * 31557600;
      } else if (this.nameValue3 === 'minuto') {
        this.numericValue3 = this.numericValue4 * 525960;
      } else if (this.nameValue3 === 'hora') {
        this.numericValue3 = this.numericValue4 * 8766;
      } else if (this.nameValue3 === 'dia') {
        this.numericValue3 = this.numericValue4 * 365;
      } else if (this.nameValue3 === 'anio') {
        this.numericValue3 = this.numericValue4;
      }
    }
  }

  onChangeNumericValue1(event: any) {
    this.numericValue1 = event.target.value;
    this.onChangeValueMeasureNumericValue1();
  }

  onChangeNumericValue2(event: any) {
    this.numericValue2 = event.target.value;
    this.onChangeValueMeasureNumericValue2();
  }

  onChangeSelected1() {
    this.onChangeValueMeasureNumericValue1();
  }

  onChangeSelected2() {
    this.onChangeValueMeasureNumericValue2();
  }

  // ***************************************************
  // ***************************************************

  onChangeNumericValue3(event: any) {
    this.numericValue3 = event.target.value;
    this.onChangeValueMeasureNumericValue3();
  }

  onChangeNumericValue4(event: any) {
    this.numericValue4 = event.target.value;
    this.onChangeValueMeasureNumericValue4();
  }

  onChangeSelected3() {
    this.onChangeValueMeasureNumericValue3();
  }

  onChangeSelected4() {
    this.onChangeValueMeasureNumericValue4();
  }
}
