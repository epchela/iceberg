const CSS_CLASS = {
  wrapper: 'feedback-modal',
  img: 'feedback-modal__picture',
  name: 'feedback-modal__name',
  type: 'feedback-modal__type',
  text: 'feedback-modal__text',
};

class Feedback {
  static clone(template, selector) {
    const cloneTarget = template.content.querySelector(selector);
    const cloneElm = document.importNode(cloneTarget, true);
    cloneElm.id = '';
    return cloneElm;
  }

  static createElm(elm) {
    const {
      imgSrcset,
      name,
      type,
      text,
      datetime,
    } = elm.dataset;

    let imgWrapper;
    let img;

    const feedbackType = datetime ? 'SERVICE' : 'HOME';

    const wrapper = document.createElement('div');
    wrapper.className = CSS_CLASS.wrapper;

    if (imgSrcset) {
      imgWrapper = document.createElement('div');
      imgWrapper.className = CSS_CLASS.img;

      img = document.createElement('img');
      img.srcset = imgSrcset;
      img.width = 290;
      img.height = 290;
      img.loading = 'lazy';
    }

    const h3 = document.createElement('h3');
    h3.className = CSS_CLASS.name;
    h3.innerText = name;

    let span;

    if (feedbackType === 'SERVICE') {
      span = document.createElement('time');
      span.setAttribute('datetime', datetime);
    } else {
      span = document.createElement('span');
    }

    span.className = CSS_CLASS.type;
    span.innerText = type;

    const p = document.createElement('p');
    p.className = CSS_CLASS.text;
    p.innerText = text;

    wrapper.appendChild(h3);
    wrapper.appendChild(span);
    wrapper.appendChild(p);

    if (imgSrcset) {
      imgWrapper.appendChild(img);
      wrapper.appendChild(imgWrapper);
    }

    return wrapper;
  }

  static add(parent, id) {
    if (!('content' in document.createElement('template'))) {
      return;
    }

    const template = document.querySelector('template#template-feedbacks');
    // const feedback = this.createElm(this.clone(template), "#template-feedback");
    const feedback = this.createElm(this.clone(template, `#feedback-${id}`));

    parent.innerHTML = '';
    parent.appendChild(feedback);
  }
}

export default Feedback;
