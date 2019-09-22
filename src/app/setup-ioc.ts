import { container } from './ioc/container';

import { REDUX_STORE, TRANSLATION_SERVICE } from './tokens';
import { TranslationService } from './services/translation.service';
import { store } from './store/store';

container.provide(REDUX_STORE, () => store);
container.provide(TRANSLATION_SERVICE, () => new TranslationService('de'));
