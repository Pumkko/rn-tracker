import type { JusticeCaseSource } from "./JusticeCaseSource";

export type JusticeCase = {
    state: 'En Cours' | 'Condamné',
    name: string;
    description: string;
    source: JusticeCaseSource[]
}