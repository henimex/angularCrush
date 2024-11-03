import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodoDirective {
  
  isCompleted = input(false);
  element = inject(ElementRef);

  stylesEffect = effect(() => {
    const nativeElement = this.element.nativeElement;
    if (this.isCompleted()) {
      nativeElement.classList.add('completed-todo');
      nativeElement.classList.remove('incomplete-todo');
    } else {
      nativeElement.classList.add('incomplete-todo');
      nativeElement.classList.remove('completed-todo');
    }
  });

  //Dom Manupulation with Direct Inline Style

  // stylesEffect = effect(() => {
  //   if (this.isCompleted()) {
  //     this.element.nativeElement.style.textDecoration = 'line-through';
  //     this.element.nativeElement.style.backgroundColor = '#d3f9d8';
  //     this.element.nativeElement.style.color = '#6c757d';
  //   } else {
  //     this.element.nativeElement.style.textDecoration = 'none';
  //     this.element.nativeElement.style.backgroundColor = '#fff';
  //     this.element.nativeElement.style.color = '#000';
  //   }
  // })
}
