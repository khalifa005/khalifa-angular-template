import { Title } from '@angular/platform-browser';

export class TicketListDto {
  id: number
  title:string;
  description:string;
  
  constructor(id:number, title:string, description:string)
  {
    this.id = id;
    this.description= description;
    this.title = title;
  }
}
