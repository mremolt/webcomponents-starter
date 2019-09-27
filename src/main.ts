import './app/setup-ioc';
import './application.css';

import de from './i18n/messages.de.json';
import en from './i18n/messages.en.json';

import '@material/mwc-button';
import '@material/mwc-dialog';

import './app/app.element';

import { TRANSLATION_SERVICE } from './app/tokens';
import { container } from './app/ioc/container';
// import './app/best.element';
// import './app/dummy.element';

const translationService = container.inject(TRANSLATION_SERVICE);

translationService.addTranslations('de', de);
translationService.addTranslations('en', en);
translationService.setLocale('de');

// console.log('Hallo Welt!');
