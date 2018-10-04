import * as React from 'react';

interface IProps {
    countBy?: number;
    name?: string;
}

interface IState {
    count: number;
}

export class MyReactComponentTwo extends React.Component<IProps, IState> {
    public static defaultProps: React.Partial<IProps> = {
        countBy: 1,
    };

    public state: IState = {
        count: 0,
    };

    public increase = () => {
        const countBy: number = this.props.countBy;
        const count = this.state.count + countBy;
        this.setState({ count });
    };

    public style = {
        "background-color": "#a5e6aa",
        "padding": "5px",
        "margin": "5px"
    };

    public render() {
        return (
            <div style={this.style}>
                <h3>2. ngReact component</h3>
                <p>{this.props.name} favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
