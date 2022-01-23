import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {



  public events = [];
  public options: any;
  public refresh: Subject<any> = new Subject();
  public eventosUp = {};

  constructor(private api: ApiService) { }

  async ngOnInit() {


    //this.events = [...this.events];
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

    await this.resolveAfterXSeconds();

    //console.log("/////",this.events[0]);
    this.events.push(JSON.parse(JSON.stringify(this.events[0])));
  

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

        var year = order['FechaEntrega'].substring(0, 4);// los numeros son los caracteres de la fecha.
        var month = order['FechaEntrega'].substring(5, 7);
        var day = order['FechaEntrega'].substring(8);
        var hora = 8;
        var minuto = 0;
        var segundo = 0;

        let event = {
          title: `Orden ${order['IdOrden']}`,
          start: new Date(year, month, day, hora, minuto, segundo),
        }
        
        this.events.push(event);
      }

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}

