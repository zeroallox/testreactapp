import React from 'react'
import {WidgetProps} from "./Common"


interface Props extends WidgetProps {
    text?: string;
    name?: string
    onClicked?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: Props) => {
    return (
        <button
            id={props.id}
            title={props.tooltip}
            hidden={props.hidden}
            name={props.name}
            onClick={props.onClicked}
        >
            {props.text}
        </button>
    );
}

export default Button