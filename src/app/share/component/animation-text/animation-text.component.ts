import { AfterViewInit, Component, Input } from '@angular/core';
import { TextAnimationTrigger } from '../../animation/text-animation.trigger';

@Component({
  selector: 'app-animation-text',
  templateUrl: './animation-text.component.html',
  styleUrls: ['./animation-text.component.scss'],
  animations: [TextAnimationTrigger()],
})
export class AnimationTextComponent implements AfterViewInit{
  show = false;
  @Input() text = 'Hello! Tớ là Trung :3';
  @Input() textStyle = "";
  @Input() timeOut = 1000;
  characters: any;

  ngAfterViewInit() {
    this.characters = this.text.split('');
    setTimeout(()=> {
      this.show = true;
    }, this.timeOut);
  }
}
