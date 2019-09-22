import { CSSResult, LitElement, TemplateResult, css, customElement, html } from 'lit-element';
import { withTranslations } from '../mixins/translation.mixin';

@customElement('sz-header')
export class HeaderElement extends withTranslations(LitElement) {
  public static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        margin-bottom: 10px;
      }

      ul {
        list-style-type: none;
        border: 1px solid #e7e7e7;
        background-color: var(--theme-card-background-color);
        display: flex;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
      }

      a {
        display: block;
        padding: 15px;
        text-decoration: none;
        color: inherit;
      }

      a:hover,
      a.active {
        color: var(--theme-active-color);
        background-color: var(--theme-active-background-color);
      }

      .title {
        padding: 15px;
        font-weight: bold;
        font-size: 1.2em;
      }
    `;
  }

  public render(): TemplateResult {
    return html`
      <nav>
        <ul>
          <li class="title">Webcomponents App</li>
          <li><a href="/">${this.t('Home')}</a></li>
          <li><a href="/page2">${this.t('Page2')}</a></li>
          <li><a @click="${() => this.setLocale('de')}">DE</a></li>
          <li><a @click="${() => this.setLocale('en')}">EN</a></li>
        </ul>
      </nav>
    `;
  }

  private setLocale(locale: string): void {
    this.translationService.setLocale(locale);
  }
}
