import { LitElement, TemplateResult, customElement, html } from 'lit-element';
import { withTranslations } from '../mixins/translation.mixin';

@customElement('sz-page2-view')
export class Page2Element extends withTranslations(LitElement) {
  public render(): TemplateResult {
    return html`
      <h1>${this.t('Page2')}</h1>

      <p>${this.t('Hello')}</p>
    `;
  }
}
