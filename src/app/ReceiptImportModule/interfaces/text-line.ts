import { Word } from './word';

export interface TextLine {
    boundingBox: number[];
    text: string;
    words: Word[];
}
