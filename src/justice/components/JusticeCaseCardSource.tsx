import type { JusticeCaseSource } from "../JusticeCaseSource";

type JusticeCaseCardSourceProps = {
    source: JusticeCaseSource;
}

export default function JusticeCaseCardSource({ source }: JusticeCaseCardSourceProps) {


    return (<a className="text-primary underline" target="_blank" href={source.sourceUrl}
    >{source.name}</a
    >);
}
