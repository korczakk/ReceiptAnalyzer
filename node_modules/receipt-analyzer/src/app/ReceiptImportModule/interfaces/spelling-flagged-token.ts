import { SpellingTokenSuggestion } from './spelling-token-suggestion';

export interface SpellingFlaggedToken {
    token: string,
    suggestions: SpellingTokenSuggestion[]
}
