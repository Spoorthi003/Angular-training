import {Component} from '@angular/core'

@Component({
    selector: 'app-booksweb',
    template: 
        `
        <app-bookwebheader></app-bookwebheader>
         <div>
            <h2>Book list</h2>
        </div>
        <app-bookwebfooter></app-bookwebfooter>

        `
})
export class  BooksWebAppComponent{
}