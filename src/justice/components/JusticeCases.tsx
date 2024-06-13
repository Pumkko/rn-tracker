import type { JusticeCase } from "../JusticeCase";
import JusticeCaseCard from "./JusticeCaseCard";

type JusticeCardsProps = {
    cases: JusticeCase[]
}

export default function JusticeCases(props: JusticeCardsProps) {

    return (
        props.cases.map(c => <JusticeCaseCard justiceCase={c} />)
    );
}