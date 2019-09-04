import * as React from "react";
import {any} from "prop-types";

class Input extends React.Component<{}, { inputValue: any, typeData: string, styleData: any, classData: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputValue: '',
            typeData: '',
            styleData: any,
            classData: '',
        }
    }

    render() {
        return (
            <input
                className={this.state.classData}
                style={this.state.styleData}
                type={this.state.typeData} value={this.state.inputValue}/>);
    }
}
