import * as React from 'react';

interface IProps {
    foo?: string;
    bar?: string;
    person?: string
    $http: ng.IHttpService
}

interface IState {
    data?: any;
}

export class MyReactComponentOne extends React.Component<IProps, IState> {

    public state: IState = {
        data: 'empty',
    };

    public componentDidMount() {
        this.props.$http.get('/app/assets/test.json').then(res =>
            this.setState({ data: res.data })
        )
    }

    public style = {
        "background-color": "#a5e6aa",
        "padding": "5px",
        "margin": "5px"
    };

    public render() {
        return (
            <div style={this.style}>
                <h3>1. react2angular component</h3>
                <p>{this.props.person.name} - {this.props.foo} and {this.props.bar}</p>
                Response via $http angular service is: <b>{this.state.data.test}</b>
            </div>
        );
    }
}
