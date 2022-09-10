import { ReactElement, createElement } from "react";
import { DynamicStyledContainerPreviewProps } from "../typings/DynamicStyledContainerProps";

// eslint-disable-next-line no-empty-pattern
export function preview({}: DynamicStyledContainerPreviewProps): ReactElement {
    return <div />;
}

export function getPreviewCss(): string {
    return "";
}
