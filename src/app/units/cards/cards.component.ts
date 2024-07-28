import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
 constructor(private api:ApiService) { }
 products:any=""
 ngOnInit() {
  this.api.getProducts().subscribe((data:any) => {this.products=data})
 }
}
