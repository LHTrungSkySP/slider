import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export function TextAnimationTrigger({
  name = 'textAnimation',
  delay = 50,
  distance = '10px',
  duration = '250ms',
} = {}): AnimationTriggerMetadata {
  return trigger(name, [
    transition(':enter', [
      query(
        '.char',
        [
          style({ opacity: 0, transform: `translateX(${distance})` }),
          stagger(`${delay}ms`, [
            animate(`${duration} ease-out`, style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]);
}
