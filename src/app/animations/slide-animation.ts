import { Animation, createAnimation } from '@ionic/angular';

export const customAnimation = (baseEl: HTMLElement, opts: any): Animation => {
  const DURATION = opts.duration || 400;

  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;

  const enteringAnimation = createAnimation()
    .addElement(enteringEl)
    .beforeRemoveClass('ion-page-invisible')
    .duration(DURATION)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .fromTo('transform', 'translateX(100%)', 'translateX(0)');

  const leavingAnimation = createAnimation()
    .addElement(leavingEl)
    .duration(DURATION)
    .easing('cubic-bezier(0.36,0.66,0.04,1)')
    .fromTo('transform', 'translateX(0)', 'translateX(-100%)');

  return createAnimation().addAnimation([enteringAnimation, leavingAnimation]);
};
