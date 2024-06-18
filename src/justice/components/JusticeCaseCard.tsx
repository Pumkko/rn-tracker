import type { JusticeCase } from "../JusticeCase";
import JusticeCaseCardSource from "./JusticeCaseCardSource";


type JusticeCaseCardProps = {
    justiceCase: JusticeCase;
}

export default function JusticeCaseCard({ justiceCase }: JusticeCaseCardProps) {

    return (
        <div className="border-2 rounded-lg w-4/5 sm:w-1/6 p-2">
            <div className="text-primary flex justify-center border-b-2">{justiceCase.state}</div>
            <div className="text-primary flex border-b-2">{justiceCase.name}</div>
            <div className="my-2">
                {justiceCase.description}
            </div>

            <div className="border-t-2">
                {
                    justiceCase.source.map(s => <JusticeCaseCardSource
                        source={s} />)
                }


            </div>
        </div>);

}