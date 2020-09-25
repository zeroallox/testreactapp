import React, {ChangeEvent} from 'react'
import {TextProps} from "./Common"


interface Props extends TextProps {
    onTextChanged?: React.ChangeEventHandler<HTMLInputElement>
}

const TextEdit = (props: Props) => {
    return (
        <input
            id={props.id}
            title={props.tooltip}
            hidden={props.hidden}
            placeholder={props.placeholderText}
            value={props.text}
            onChange={props.onTextChanged}
        />
    );
}

export default TextEdit