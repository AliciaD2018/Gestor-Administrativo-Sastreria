import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public events: any[];
  public options: any;

  constructor() { }

  ngOnInit() {

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin,interactionPlugin],
      defaulDate: new Date(),
      locale: esLocale,
      header:{
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      editable: false
    }

    this.events = [
      {
        title: "Orden 1284",
        start: new Date(),
      },
      {
        title: "Orden 1288",
        start: new Date(),
      },
      {
        title: "Orden 1289",
        start: new Date(2022, 0, 10, 16, 30, 0, 0),
      },
      {
        title: "Orden 1290",
        start: new Date(2022, 0, 10, 8, 1, 0, 0),
      },
      {
        title: "Orden 1292",
        start: new Date(2022, 0, 10, 14, 45, 0, 0),
      },
      {
        title: "Orden 1292",
        start: new Date(2022, 0, 13, 13, 5, 0, 0),
      },
      {
        title: "Orden 1292",
        start: new Date(2022, 0, 14, 3, 30, 0, 0),
      },
    ]
    
  }

}
