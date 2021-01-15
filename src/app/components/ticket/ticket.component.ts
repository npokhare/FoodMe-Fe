import { Component, HostListener, OnInit } from '@angular/core';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  constructor(public ticketService: TicketService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event) {
    console.log(window.pageYOffset, event);
    if(window.pageYOffset> -1 )
     this.ticketService.showTicket = false;
    else
      this.ticketService.showTicket = true;
 }
}
