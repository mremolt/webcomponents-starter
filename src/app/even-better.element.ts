import { LitElement, TemplateResult, customElement, html, property } from 'lit-element';

@customElement('my-even-better')
export class EvenBetterElement extends LitElement {
  @property({ type: Object }) public person = { firstName: '', lastName: '' };

  @property({ type: Array }) public numbers: number[] = [];

  public render(): TemplateResult {
    return html`
      <p>Vorname: ${this.person.firstName}</p>
      <p>Nachname: ${this.person.lastName}</p>

      <ul>
        <li>${this.numbers[0]}</li>
        ${this.renderNumbers(this.numbers)}
      </ul>
    `;
  }

  public renderNumbers(numbers: number[]): TemplateResult[] {
    function renderLi(num: number): TemplateResult {
      return html`
        <li>${num}</li>
      `;
    }

    return numbers.map(renderLi);
  }
}
