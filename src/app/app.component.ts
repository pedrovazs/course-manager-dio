import { Component } from '@angular/core';

// Decorator para dar mais funções
@Component({
  // Cria uma diretiva que no final será transformado numa tag html
  selector: 'app-root',
  // Aqui diz para o Angular qual html que será usado para este componente
  templateUrl: './app.component.html',
  // Aqui diz para o Angular que o style que será usado estará sendo passado por aqui
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  // Em TypeScript podemos tipar as nossas variáveis, mostrando que tipo de valor se
  // espera em uma variável
  name: string = 'John';
}
