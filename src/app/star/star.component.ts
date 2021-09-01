import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})
export class StarComponent implements OnChanges {

    // Notação usada para pegar um valor de um outro componente
    @Input()
    rating: number = 0;

    starWidth!: number;

    // Utilizado para ser iniciado no momento de uma mudança
    ngOnChanges(): void {
        // Proporção da tag div de acordo com a quantidade de estrelas
        this.starWidth = this.rating * 74 / 5; // 74 || 94
    }
}