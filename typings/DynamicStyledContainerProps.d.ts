/**
 * This file was generated from DynamicStyledContainer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { DynamicValue } from "mendix";

export interface DynamicStyledContainerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    dataDynamicStyle?: DynamicValue<string>;
    childNode?: ReactNode;
}

export interface DynamicStyledContainerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    dataDynamicStyle: string;
    childNode: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
}
