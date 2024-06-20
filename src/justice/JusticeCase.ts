import type { JusticeCaseSource } from "./JusticeCaseSource";

export type JusticeCase = {
  state: 'En Cours'|'Condamné', name: string; date: number; description: string;
  source: JusticeCaseSource[]
}