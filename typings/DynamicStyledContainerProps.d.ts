/**
 * This file was generated from DynamicStyledContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface DynamicStyledContainerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dynamicStyle?: DynamicValue<string>;
    childNode?: ReactNode;
}

export interface DynamicStyledContainerPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dynamicStyle: string;
    childNode: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
