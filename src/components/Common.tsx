import React from "react";

export interface WidgetProps {
    id?: string
    hidden?: boolean
    tooltip?: string
    ref?: React.Ref<any>
}

export interface TextProps extends WidgetProps {
    name?: string
    text?: string;
    placeholderText?: string
}

