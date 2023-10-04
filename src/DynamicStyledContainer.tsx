import { createElement, FC, useEffect, useMemo, useState } from "react";

import { DynamicStyledContainerContainerProps } from "../typings/DynamicStyledContainerProps";
import { convertStylesStringToObject } from "./util/style";
import { useDynamicValueString } from "@j3lte/pluggable-widget-utils";

export const DynamicStyledContainer: FC<DynamicStyledContainerContainerProps> = ({
    class: className,
    childNode,
    dataDynamicStyle
}) => {
    const [styledState, setStyledState] = useState("");
    const style = useMemo(() => convertStylesStringToObject(styledState), [styledState]);

    const dynamicStyleNewProp = useDynamicValueString(dataDynamicStyle);

    useEffect(() => {
        if (dynamicStyleNewProp !== null && dynamicStyleNewProp !== styledState) {
            setStyledState(dynamicStyleNewProp);
        }
    }, [styledState, dynamicStyleNewProp]);

    return (
        <div className={className} style={style}>
            {childNode}
        </div>
    );
};
