import * as React from 'react';

interface IProps {
    countBy?: number;
    name?: string;
}

interface IState {
    count: number;
}

export class HelloComponent extends React.Component<IProps, IState> {
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

    public render() {
        return (
            <div>
                <p>{this.props.name} favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
