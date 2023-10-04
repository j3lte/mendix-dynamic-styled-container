import { createElement, FC, useEffect, useState } from "react";

import { ClassNames } from "@emotion/react";

import { DynamicStyledContainerContainerProps } from "../typings/DynamicStyledContainerProps";
import { useDynamicValueString } from "@j3lte/pluggable-widget-utils";

export const DynamicStyledContainer: FC<DynamicStyledContainerContainerProps> = ({
    class: className,
    childNode,
    dataDynamicStyle
}) => {
    const [styledState, setStyledState] = useState("");
    const dynamicStyleNewProp = useDynamicValueString(dataDynamicStyle);

    useEffect(() => {
        if (dynamicStyleNewProp !== null && dynamicStyleNewProp !== styledState) {
            setStyledState(dynamicStyleNewProp);
        }
    }, [styledState, dynamicStyleNewProp]);

    return (
        <ClassNames>
            {({ css, cx }) => (
                <div className={cx(className, css`${styledState}`)}>
                    {childNode}
                </div>
            )}
        </ClassNames>
    );
};
