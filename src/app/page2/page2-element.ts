import { LitElement, TemplateResult, customElement, html } from 'lit-element';
import { withTranslations } from '../mixins/translation.mixin';

import '../elements/joke.element';

@customElement('sz-page2-view')
export class Page2Element extends withTranslations(LitElement) {
  public get dialog(): any {
    return this.shadowRoot.querySelector('mwc-dialog');
  }

  public open(): void {
    this.dialog.open = true;
  }

  public render(): TemplateResult {
    return html`
      <h1>${this.t('Page2')}</h1>

      <p>${this.t('Hello')}</p>

      <my-joke></my-joke>

      <mwc-button raised @click="${this.open}">Click me please!</mwc-button>

      <mwc-dialog>
        <div>Discard draft?</div>
        <mwc-button slot="primaryAction" dialogAction="discard">
          Discard
        </mwc-button>
        <mwc-button slot="secondaryAction" dialogAction="cancel">
          Cancel
        </mwc-button>
      </mwc-dialog>
    `;
  }
}
