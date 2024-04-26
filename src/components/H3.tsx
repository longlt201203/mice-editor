import { PropsWithChildren } from "react";

export const h3Styling = "font-heading font-semibold text-xl text-myNeutral-charcoalGrey";

export default function H3(props: PropsWithChildren) {
    return (
        <h3 className={h3Styling}>{props.children}</h3>
    );
}