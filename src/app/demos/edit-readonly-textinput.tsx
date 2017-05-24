import * as React from "react";

interface Props {
    isVisible: boolean
}

export const EditReadonlyTextInput = (props: Props) => {
    return (
        <form className="form">
            <div className={props.isVisible ? '' : 'hidden'}>
                <div className="form-group">
                    <label htmlFor="someName">Some attribute: </label>
                    <input type="text" name="someName" className="col-md-1 form-control" />
                </div>

            </div>
            <div className={!props.isVisible ? '' : 'hidden'}>
                <div  className="form-group">
                    <label htmlFor="someName">Some attribute: </label>
                    <span style={{ marginLeft:15 }}>this is a readonly value</span>
                </div>
            </div>
        </form>
    )

}   