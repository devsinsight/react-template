import * as React from 'react';

interface Props {
    name: string, 
    label: string, 
    onChange: any, 
    placeholder: string, 
    value: string, 
    error: string
}

export const TextInput = (props: Props) => {
    let wrapperClass = 'form-group';
    wrapperClass += props.error && props.error.length ? ' has-error' : '';

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange} />
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    )
}