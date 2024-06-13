import type { JusticeCaseSource } from "./JusticeCaseSource";

export type JusticeCase = {
    state: 'En Cours' | 'Condamné',
    description: string;
    source: JusticeCaseSource[]
}