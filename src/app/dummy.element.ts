export class DummyElement extends HTMLElement {
  constructor() {
    super();
    console.log(this);

    const root = this.attachShadow({ mode: 'closed' });

    const wer = 'CLEAR-IT';

    root.innerHTML = `
    <style>
      p {
        color: var(--error-color);
      }
    </style>
      <p>
        Hallo ${wer}
        Hallo Welt
        Hallo Welt
        Hallo Welt
        Hallo Welt
        Hallo Welt
        Hallo Welt
      </p>`;
  }

  public doSomething(): void {
    console.log('I am doing something', this);
  }
}

customElements.define('my-dummy-element', DummyElement);
