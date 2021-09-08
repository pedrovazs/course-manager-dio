import { Pipe, PipeTransform } from "@angular/core";

// Notação para tornar a classe elegível a ser um pipe
@Pipe({
    //Nome que será utilizado para o pipe
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace)
    }

}