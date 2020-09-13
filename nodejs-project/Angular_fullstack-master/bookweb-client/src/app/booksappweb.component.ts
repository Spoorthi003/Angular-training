import {Component} from '@angular/core'

@Component({
    selector: 'app-bookweb',
    template: 
        `
        <app-bookwebheader></app-bookwebheader>
        <div class=''>
        <app-booklist></app-booklist>
        </div>
        <app-bookwebfooter></app-bookwebfooter>
        
        `
})
export class BooksAppWebComponent{
}