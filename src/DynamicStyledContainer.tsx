import { createElement, FC, useEffect, useMemo, useState } from "react";

import { ValueStatus } from "mendix";
import { DynamicStyledContainerContainerProps } from "../typings/DynamicStyledContainerProps";
import { convertStylesStringToObject } from "./util/style";

export const DynamicStyledContainer: FC<DynamicStyledContainerContainerProps> = ({
    class: className,
    childNode,
    dynamicStyle
}) => {
    const [styledState, setStyledState] = useState("");
    const style = useMemo(() => convertStylesStringToObject(styledState), [styledState]);
    const dynamicStyleProp = dynamicStyle && dynamicStyle.status === ValueStatus.Available ? dynamicStyle.value : null;

    useEffect(() => {
        if (dynamicStyleProp !== null && dynamicStyleProp !== styledState) {
            setStyledState(dynamicStyleProp);
        }
    }, [dynamicStyleProp, styledState]);

    return (
        <div className={className} style={style}>
            {childNode}
        </div>
    );
};
