import { Word } from './word';

export interface TextLine {
    boundingBox: string;
    words: Word[];
}
