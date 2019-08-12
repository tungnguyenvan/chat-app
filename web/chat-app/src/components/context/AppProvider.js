import React from 'react';
const AppContext = React.createContext();

class AppProvider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppContext.Propvider value={this.state}>

            </AppContext.Propvider>
        );
    }
}