import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Hello World',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 24,
      created_at: 'Wed Oct 30 2018 16:33:22'
    },
    {
      title: 'Les Closures ',
      content: 'Encore cette histoire qui casse la tete',
      loveIts: 0,
      created_at: 'Wed Oct 27 2018 16:33:22'
    },
    {
      title: 'Hello Java',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 12,
      created_at: 'Wed Oct 12 2018 16:33:22'
    },
    {
      title: 'Hello Python',
      content: 'Encore un bout de code pour le bien etre de la tradittion',
      loveIts: 10,
      created_at: 'Wed Oct 01 2018 16:33:22'
    }
  ];
}
