import React from 'react'
import {TextProps} from "./Common"


interface Props extends TextProps {

}

const TextArea = (props: Props) => {
    return (
        <textarea
            id={props.id}
            title={props.tooltip}
            hidden={props.hidden}
            placeholder={props.placeholderText}
            value={props.text}
        />
    );
}

export default TextArea