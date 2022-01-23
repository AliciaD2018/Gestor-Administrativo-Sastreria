import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { FullCalendar } from 'primeng/fullcalendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})

export class CalendarioComponent implements OnInit {

  public events = [];
  public options: any;

  constructor(private api: ApiService) {
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
    console.log(`1- Evento: ${JSON.stringify(this.events[0])}`);
  }

  imprimirEvento() {
    console.log(`2- Evento: ${JSON.stringify(this.events[0])}`);
  }

  agregarEventos(): void {
    const promise = this.api.selectOrdersDetailsForCalendar().then()
    promise.then((ordersDatails) => {
      // var calendar = document.getElementById('calendar');
      
      for (var order of ordersDatails) {

        var year = order['FechaEntrega'].substring(0, 4);
        var month = order['FechaEntrega'].substring(5, 7);
        var day = order['FechaEntrega'].substring(8);
        var hora = 8;
        var minuto = 0;
        var segundo = 0;

        var event = {
          title: `Orden ${order['IdOrden']}`,
          start: new Date(year, month, day, hora, minuto, segundo),
        }
        
        this.events.push(event);
        // calendario.addEvent(event)
      }

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}
