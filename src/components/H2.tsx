import { PropsWithChildren } from "react";

export const h2Styling = "font-heading font-semibold text-2xl text-myNeutral-charcoalGrey";

export default function H2(props: PropsWithChildren) {
    return (
        <h2 className={h2Styling}>{props.children}</h2>
    );
}