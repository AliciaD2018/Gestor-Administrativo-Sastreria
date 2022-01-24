import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Subject } from 'rxjs';
import { FullCalendarModule } from 'primeng/fullcalendar';
import slicingUtils from '@fullcalendar/core/common/slicing-utils';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {



  public events: any;
  public options: any;
  public refresh: Subject<any> = new Subject();
  public eventosUp = [];

  constructor(private api: ApiService) {
    this.events = []
  }

  async ngOnInit() {


    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false,
    }

    this.agregarEventos();
    let eventosLocalStorage = JSON.parse(localStorage.getItem('eventos'));
    console.log(eventosLocalStorage);
    

    await this.resolveAfterXSeconds();

  }


  resolveAfterXSeconds() {
    var x = 1000
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }

  imprimirEvento() {
    console.log(`2- Evento: ${JSON.stringify(this.events[0])}`);

  }
  // agrega eventos a la vista calendario 
  agregarEventos() {
    console.log('entra');

    const promise = this.api.selectOrdersDetailsForCalendar().then()
    promise.then(async (ordersDetails) => {

      // var calendar = document.getElementById('calendar');

      for (var order of ordersDetails) {
        /**
         * .substring(ini, fin) obtiene el substring desde el índice 'ini' hasta el índice 'fin'
         * Ejemplo: índice:  0123456789
         *                  '2022/03/13'.substring(0 4); // Resultad0: '2022'
         *  */

        var year = order['FechaEntrega'].substring(0, 4);// los numeros son los caracteres de la fecha.
        var month = order['FechaEntrega'].substring(5, 7);
        var day = order['FechaEntrega'].substring(8);
        var hora = 8;
        var minuto = 1;
        var segundo = 0;

        let event = {
          title: `Orden ${order['IdOrden']}`,
          start: new Date(year, month, day, hora, minuto, segundo),
        }

        this.events.push(event);

      }

      let eventosJson = JSON.stringify(this.events);
      this.compararJSON(localStorage.getItem('eventos'),eventosJson);
      //console.log(eventosJson)

      localStorage.removeItem('eventos')
      localStorage.setItem('eventos', `${eventosJson}`);

      this.agregarEnEvents(localStorage.getItem('eventos'));

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  compararJSON(actual, nuevo) {
    console.log(actual);
    console.log();
    console.log(nuevo);
    if (JSON.stringify(actual) === JSON.stringify(nuevo)) {
      console.log("son iguales, es decir ya existe");
    }
    else{
      console.log("NO iguales");
    }
  }

  agregarEnEvents(actual){
    for(var x in this.events){
      let datojs=JSON.stringify(this.events[x]);

      console.log(JSON.stringify(this.events[x]));
      if(datojs in actual){
        console.log('si');
      }
      console.log('no');
    }
  }

}

