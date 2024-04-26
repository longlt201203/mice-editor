import { PropsWithChildren } from "react";

export const h1Styling = "font-heading font-semibold text-4xl text-myNeutral-charcoalGrey";

export default function H1(props: PropsWithChildren) {
    return (
        <h1 className={h1Styling}>{props.children}</h1>
    );
}