import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { TextAnimationTrigger } from 'src/app/share/animation/text-animation.trigger';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss'],
  animations: [TextAnimationTrigger()],
})
export class Layout1Component {
  textHead = 'Hello! Tớ là Trung :3';
  timeOutHead = 1000;

  textBody1 = "Là người hướng ngoại";
  timeOutBody1 = 2500;

  textBody2 = "Nhưng lại hay ngại!";
  timeOutBody2 = 3300;
  @Output() nextAction = new EventEmitter<number>();
}
