import { TimelineLite } from 'gsap';

const defaults = {
  accardionClass: 'custom-accordion',
  linkClass: 'accordion__headline',
  contentClass: 'accordion__dropdown',
  activeLinkClass: 'active',
  duration: 0.5,
};

export default class Accordion {
  constructor(options = {}) {
    this.options = Object.assign(defaults, options);

    this.accardions = document.querySelectorAll(`.${this.options.accardionClass}`);

    this.animation = new TimelineLite({
      autoRemoveChildren: true,
    });
    this.animateShowTween = null;
    this.animateHideTween = null;

    this.activeElement = null;
    this.activeElementContent = null;

    this.addClickHandler(() => {
      for (let i = this.accardions.length - 1; i >= 0; i--) {
        this.accardions[i].addEventListener('click', this.clickHandler, true);
      }
    });
  }

  destroy() {
    for (let i = this.accardions.length - 1; i >= 0; i--) {
      this.accardions[i].removeEventListener('click', this.clickHandler);
    }
  }

  addClickHandler(afterAdd) {
    this.clickHandler = event => {
      if (event.target.classList.contains(this.options.linkClass)) {
        let clearAnimation = true;
        const activeElementContent = event.target.parentElement.querySelector(
          `.${this.options.contentClass}`
        );

        if (event.target.classList.contains(this.options.activeLinkClass)) {
          this.animateHide(activeElementContent);
          this.activeElement = null;
          this.activeElementContent = null;
        } else {
          if (this.activeElementContent && this.activeElementContent !== activeElementContent) {
            this.animateHide(this.activeElementContent);
            this.activeElement.classList.toggle(this.options.activeLinkClass);
            clearAnimation = false;
          }
          this.activeElement = event.target;
          this.activeElementContent = activeElementContent;
          this.animateShow(activeElementContent, clearAnimation);
        }
        event.target.classList.toggle(this.options.activeLinkClass);
        event.preventDefault();
      }
    };

    afterAdd();
  }

  animateShow(element, clear = true) {
    const delay = 0;
    let contentHeight = 0;

    const { children } = element;
    for (let i = children.length - 1; i >= 0; i--) {
      contentHeight += children[i].getBoundingClientRect().height;
    }

    if (clear) {
      this.animation.clear();
    }

    this.animation.to(element, this.options.duration, { height: contentHeight }, delay);

    this.animation.play();
  }

  animateHide(element, clear = true) {
    const delay = 0;

    if (clear) {
      this.animation.clear();
    }

    this.animation.to(element, this.options.duration, { height: 0 }, delay);

    if (clear) {
      this.animation.play();
    }
  }
}
