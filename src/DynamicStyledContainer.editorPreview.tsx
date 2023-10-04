import { ReactElement, createElement } from "react";
import { DynamicStyledContainerPreviewProps } from "../typings/DynamicStyledContainerProps";

// eslint-disable-next-line no-empty-pattern
export function preview({ childNode }: DynamicStyledContainerPreviewProps): ReactElement {
    return (
        <div>
            <childNode.renderer caption="Dynamic Styled Container">
                <div style={{ border: "1px dashed #CCC", margin: 10, padding: 10 }} />
            </childNode.renderer>
        </div>
    );
}

export function getPreviewCss(): string {
    return "";
}
