import { Component, OnInit } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';
import { TicketService } from '../ticket/ticket.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  constructor(public ticketService: TicketService) { }

  toggleTicket(){
    this.ticketService.showTicket=!this.ticketService.showTicket
  }
  ngOnInit(): void {
  }

}
