import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1 } from './componente-1/componente-1';
import { Componente2 } from './componente-2/componente-2';
import { Componente3 } from './componente-3/componente-3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Componente1,Componente2,Componente3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tuo_perini');
}
