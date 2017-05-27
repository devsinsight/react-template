import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/config';
import Home from './home/home';
import AppRoutes from "./routes";
import { Header } from "./header/header";
import { connect } from 'react-redux';


class App extends React.Component<Props, any> {
    render() {
        return (
                <Router>
                    <div>
                        <Header
                            loading={this.props.loading} />
                        <div className="container">
                            <AppRoutes />
                        </div>
                    </div>
                </Router>
        )
    }

    private static mapStateToProps(state: any, ownProps: any){
        return {
            loading: state.ajaxCallsInProgress > 0
        }
    }

    static connection(){
        return connect(App.mapStateToProps)(App);
    }

}

export default App.connection();

interface Props{
    loading: any
}

