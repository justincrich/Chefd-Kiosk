import React from 'react';
import RoundCheckbox from 'core-components/input/checkbox/round/input_checkbox_round'
import Checkbox from 'core-components/input/checkbox/standard/input_checkbox_standard'
import { Check } from '../../index';
export default class CheckPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            defaultChecked:false,
            roundChecked:false,
        }

    }



    render(){
        return(
            <div
                style={{
                    display:'flex',
                    flexDirection:'column'
                }}
            >
                <Checkbox
                        value='default'
                        checked={this.state.defaultChecked}
                        onClick={(event)=>this.setState({defaultChecked:!this.state.defaultChecked})}
                    ></Checkbox>
                Round Checkbox
                <RoundCheckbox
                    checked={this.state.defaultChecked}
                    onClick={(event)=>this.setState({defaultChecked:!this.state.defaultChecked})}
                    hoverable='true'
                />
            </div>
        )
    }
}