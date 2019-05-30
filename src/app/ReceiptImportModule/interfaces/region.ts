import { TextLine } from './text-line';

export interface Region {
    boundingBox: string;
    lines: TextLine[];
}
