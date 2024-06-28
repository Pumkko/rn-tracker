import type { RessourceLink } from "../RessourceLink";
import RessourceLinkCard from "./RessourceLinkCard";

type RessourceLinkProps = {
    links: RessourceLink[]
}

export default function RessourceLinks(props: RessourceLinkProps) {

    return (
        props.links.map(c => <RessourceLinkCard ressourceLink={c} />)
    );
}