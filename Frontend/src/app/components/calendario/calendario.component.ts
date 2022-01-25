import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { Subject } from 'rxjs';
import { isNumericLiteral } from 'typescript';

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

        this.eventosUp.push(event); //inserta los resultados en lista temporal
      }

      /* -----Manejo de los datos en local storage----- */

      //se crean en el localStorage
      let eventosJson = JSON.stringify(this.eventosUp);
      localStorage.setItem('eventos', `${eventosJson}`);
      localStorage.setItem('reload2', `${true}`);

      // se valida el estado y se cambia el estado para no repetir
      if (localStorage.getItem('reload2') == 'true') {
        //this.events=this.eventosUp;
        localStorage.setItem('reload2', `${false}`);
      }

      // se valida el estado en false para calgar una unica vez en el calendario los eventos.
      if (localStorage.getItem('reload2') == 'false') {
        console.log('yeayea');
        let eventosLocalStorage = JSON.parse(localStorage.getItem('eventos'));
        console.log("algo: ", eventosLocalStorage);
        this.events = eventosLocalStorage
      }

      /* -----FIN Manejo de los datos en local storage----- */

    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

}

