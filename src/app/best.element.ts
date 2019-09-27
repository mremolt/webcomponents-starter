import { LitElement, TemplateResult, customElement, html, property } from 'lit-element';

import './even-better.element';

@customElement('my-best')
export class BestElement extends LitElement {
  @property() public wer = 'Welt';

  @property({ type: Object }) public person = { firstName: '', lastName: '' };

  @property({ type: Number }) public zahl = 12;

  private numbers = [1, 2, 3, 4, 5, 6, 7];

  constructor() {
    super();

    setTimeout(() => {
      // this.numbers = [9, 8, 7, 6, 5, 4, 3];
      this.numbers = [...this.numbers, 9, 8, 7, 6, 5, 4, 3];
      this.requestUpdate();
    }, 4000);
  }

  public render(): TemplateResult {
    return html`
      <h1>Headline</h1>
      <p>Hallo ${this.wer}!</p>
      <p>Die Zahl ${this.zahl + 5}!</p>

      <my-even-better .person="${this.person}" .numbers="${this.numbers}"></my-even-better>
    `;
  }
}
