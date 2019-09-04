import * as React from "react";

class Button extends React.Component<{}, { name: string, className: string, type: string, style: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            className: '',
            type: '',
            style: null,
        }
    }

    render() {
        return (<button className={this.state.className} style={this.state.style}
                        type={this.state.type}>{this.state.name}</button>);
    }
}
