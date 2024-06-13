import type { JusticeCaseSource } from "./JusticeCaseSource";

export type JusticeCase = {
    state: 'OnGoing' | 'Convicted',
    description: string;
    source: JusticeCaseSource[]
}