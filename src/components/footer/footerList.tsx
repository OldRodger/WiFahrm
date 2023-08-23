import { footerConstantType } from "@/shared/types";
import FooterItem from "./footerItem";

type Props = {
    list: footerConstantType[]
}

function FooterList({ list }: Props) {

    return <>
        {list.map((props) => <FooterItem key={props.title} {...props} />)}
    </>;
}

export default FooterList;