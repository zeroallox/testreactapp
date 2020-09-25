import React from 'react'
import {TextProps} from "./Common"


interface Props extends TextProps {

}

const Label = (props: Props) => {
    return (
        <label
            id={props.id}
            title={props.tooltip}
            hidden={props.hidden}
        >
            {props.text}
        </label>
    );
}

export default Label