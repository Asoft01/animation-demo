import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { bounceOutLeftAnimation, fade, slide, fadeInAnimation } from './../animations';
// import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    // trigger('fade', [
    //   state('void', style({ opacity: 0 })), 

    //   transition(':enter, :leave', [ // void <=> *
    //   // transition('void => *, * => void', [
    //   // transition('void <=> *', [
    //     // style({ backgroundColor : 'yellow', opacity: 0 }),
    //     // style({ opacity: 0 }),
    //     animate(2000)
    //     // animate(2000, style({ backgroundColor: 'white', opacity: 1}))
    //   ]), 

    //   // transition('* => void', [
    //   //   animate(2000
    //   //     // , 
    //   //     // style({ opacity: 0 })
    //   //   )
    //   // ])
    // ])

    // fade
    // slide

    trigger('todoAnimation', [
      transition(':enter', [
        // style({ opacity: 0 }),
        // animate(2000)      
        useAnimation(fadeInAnimation, {
          params: {
            duration: '500ms'
          }
        })  
      ]),
      transition(':leave', [
        style({ backgroundColor: 'red' }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
