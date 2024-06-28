import type { RessourceLink } from "../RessourceLink";

type RessourceLinkCardProps = {
    ressourceLink: RessourceLink;
}


  
export default function RessourceLinkCard({ ressourceLink }: RessourceLinkCardProps) {
    return (
        
        <div className="border-2 rounded-lg w-4/5 sm:w-1/6 p-2">

            <div >
                {
                    <a className="text-primary underline" target="_blank" href={ressourceLink.sourceUrl}
                    >{ressourceLink.name}</a>
                }
            </div>

        </div>);
}
