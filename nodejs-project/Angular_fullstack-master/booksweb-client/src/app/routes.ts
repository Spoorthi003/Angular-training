import {Route} from '@angular/router'; 
import {BookListComponent} from './book-list/book-list.component'; 
import {BookCompositeComponent} from './book-composite/book-composite.component'; 
import {BookInfoComponent} from './book-info/book-info.component'; 
import {CaNotFoundComponent} from './ca-not-found/ca-not-found.component'; 
import {AddAuthorComponent} from './add-author/add-author.component'; 
import {AddBookComponent} from './add-book/add-book.component'; 





export const appRoutes:Route[]=[
    
    {path: '', pathMatch:'full', component:BookCompositeComponent},

    {path: 'book/list', component: BookListComponent },
    {path: 'author/add', component: AddAuthorComponent },
    {path: 'book/add', component: AddBookComponent},
    
    {path: 'book/info/:bookId', component:BookInfoComponent},

    {path: '404', component:CaNotFoundComponent},

   //define a catch all route. must be your last route
   //no other routes would be processed after this one
    {path:'**', component:CaNotFoundComponent}

];
