import { PropsWithChildren } from "react";

export const codeBlockStyling = "font-code p-3 bg-myNeutral-softGrey block rounded text-myNeutral-charcoalGrey text-sm";

export default function CodeBlock(props: PropsWithChildren) {
    return (
        <code className={codeBlockStyling}>{props.children}</code>
    );
}