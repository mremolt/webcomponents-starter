import { CSSResult, LitElement, TemplateResult, css, customElement, html, property } from 'lit-element';

@customElement('my-joke')
export class JokeElement extends LitElement {
  public static get styles(): CSSResult {
    return css`
      :host {
        display: block;

        border: 1px solid black;
        margin: 10px;
        padding: 10px;
      }
    `;
  }

  @property() public joke = 'Placeholder';

  public async connectedCallback(): Promise<void> {
    super.connectedCallback();

    this.updateJoke();
  }

  public render(): TemplateResult {
    return html`
      <p>${this.joke}</p>

      <mwc-button raised @click="${this.updateJoke}">Refresh</mwc-button>
    `;
  }

  private async updateJoke(): Promise<void> {
    const joke = await this.fetchJoke();
    this.joke = joke.value.joke;
  }

  private async fetchJoke(): Promise<any> {
    const response = await fetch('http://api.icndb.com/jokes/random');

    return response.json();
  }
}
