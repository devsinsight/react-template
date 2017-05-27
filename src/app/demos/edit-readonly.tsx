import * as React from "react";
import { connect, Dispatch } from 'react-redux';
import { EditReadonlyTextInput } from "./edit-readonly-textinput";
import { bindActionCreators } from "redux";
import { switchBetweenEditReadonly } from "./actions/edit-readonly-thunk";

export class EditReadonly extends React.Component<Props, State> {


    constructor(props, context){
        super(props, context);

        this.state = {
            isVisible: false
        }

        this.changeEditReadonlyState = this.changeEditReadonlyState.bind(this);
    }


    changeEditReadonlyState(event) {
        
        this.setState({ isVisible: !this.state.isVisible});
        this.props.actions.switchState(!this.state.isVisible);
    }

    public render() {
        return (
            <span>
                <input type="button" className="btn btn-primary" value={this.state.isVisible ? 'Save' : 'Edit'} onClick={this.changeEditReadonlyState} />
                <input type="button" className={this.state.isVisible ? 'btn btn-default' : 'hidden'} value="Cancel" onClick={this.changeEditReadonlyState} />
                <br />
                <br />
                <EditReadonlyTextInput isVisible={this.state.isVisible} />
            </span>
        );
    }

    private static mapStateToProps(state: any, ownProps: any) {
        return {};
    };

    private static mapDispatchToProps(dispatch: Dispatch<any>) {
        return {
            actions: {
                switchState: bindActionCreators(switchBetweenEditReadonly, dispatch)
            }
        };
    };

    static connection() {
        return connect(EditReadonly.mapStateToProps, EditReadonly.mapDispatchToProps)(EditReadonly);
    }
}

export default EditReadonly.connection();


interface Props{
    actions: any
   
}

interface State{
 isVisible: boolean
}