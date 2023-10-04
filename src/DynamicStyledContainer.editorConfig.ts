import {
    ContainerProps,
    DropZoneProps,
    // RowLayoutProps,
    StructurePreviewProps,
    TextProps
} from "@j3lte/pluggable-widget-utils";
import { Problem, Properties } from "@mendix/pluggable-widgets-tools";

import { DynamicStyledContainerPreviewProps } from "../typings/DynamicStyledContainerProps";

export type Platform = "web" | "desktop";

export function getProperties(_values: DynamicStyledContainerPreviewProps, defaultProperties: Properties): Properties {
    // hidePropertyIn(defaultProperties, values, "dynamicStyle");
    return defaultProperties;
}

export function check(_values: DynamicStyledContainerPreviewProps): Problem[] {
    const errors: Problem[] = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    return errors;
}

// export function getPreview(values: GoogleMapsPreviewProps, isDarkMode: boolean, version: number[]): PreviewProps {
export function getPreview(
    values: DynamicStyledContainerPreviewProps,
    isDarkMode: boolean,
    _version: number[]
): StructurePreviewProps {
    const title: TextProps = {
        type: "Text",
        content: "Dynamic Styled Container",
        fontColor: isDarkMode ? "#FFF" : "#000",
        fontSize: 8
    };

    const dropZone: DropZoneProps = {
        type: "DropZone",
        property: values.childNode,
        placeholder: "Place your content here",
        grow: 1
    };

    const container: ContainerProps = {
        type: "Container",
        grow: 1,
        borders: true,
        children: [title, dropZone]
    };

    return container;
}

export function getCustomCaption(_values: DynamicStyledContainerPreviewProps, _platform: Platform): string {
    return "GoogleMaps";
}
