import { InjectionToken } from './ioc/injection-token.class';
import { TranslationService } from './services/translation.service';
import { store } from './store/store';

export const REDUX_STORE = new InjectionToken<typeof store>('REDUX_STORE');
export const TRANSLATION_SERVICE = new InjectionToken<TranslationService>('TRANSLATION_SERVICE');
