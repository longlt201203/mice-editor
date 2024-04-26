import { PropsWithChildren } from "react";

export const paragraphStyling = "font-body text-sm text-myNeutral-charcoalGrey";

export default function Paragraph(props: PropsWithChildren) {
    return (
        <p className={paragraphStyling}>{props.children}</p>
    );
}