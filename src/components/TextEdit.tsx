import React, {ChangeEvent} from 'react'
import {TextProps} from "./Common"


interface Props extends TextProps {
    onTextChanged?: React.ChangeEventHandler<HTMLInputElement>
}

const TextEdit = (props: Props, ref: React.Ref<any>) => {
    return (
        <input
            ref={ref}
            id={props.id}
            title={props.tooltip}
            hidden={props.hidden}
            placeholder={props.placeholderText}
            value={props.text}
            onChange={props.onTextChanged}
        />
    );
}

export default React.forwardRef(TextEdit)