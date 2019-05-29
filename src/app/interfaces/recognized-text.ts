import { Region } from './region';

export interface RecognizedText {
    language: string;
    textAngle: number;
    orientation: string;
    regions: Region[];
}
