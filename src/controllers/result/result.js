import React, {Component} from 'react'
import ResultsPage from 'components/pages/results/results.js';
import EngagementFooterNav from "core-components/navigation/engagement_footer_nav.js"
export default class ResultsController extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentWillMount(){
        const {resultData, engagement} = this.props.location.state;

        this.setState({resultData,engagement})
      }

    render(){
        const {resultData,engagement} = this.state;
        const {history} = this.props;
        return(
            <div>
                {
                    resultData&&
                    <div>
                        <ResultsPage
                        result={resultData}
                        engagement={engagement}
                    />
                
                        <EngagementFooterNav
                    exit={()=>history.push("/")}
                />
                    </div>
                    
                }
            </div>
        )
    }
}