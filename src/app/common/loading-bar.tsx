import * as React from "react";
import { Line, Circle } from 'rc-progress';

export default class LoadingBar extends React.Component<Props, State>{

    interval: any;

    constructor(props, context) {
        super(props, context);

        this.state = {
            frame: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({ frame: this.state.frame + 25 })
            , this.props.interval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        return (
            <div style={{ position: "relative", top: "-30px" }}>
                <Line percent={this.state.frame} strokeWidth="4" strokeColor="#2db7f5" strokeLinecap="square" style={{ height: "5px", width: "100%" }} />
            </div>
        )
    }
}

interface State {
    frame: number
}

interface Props {
    interval: any
}

