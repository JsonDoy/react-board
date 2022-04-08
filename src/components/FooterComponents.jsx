import React, {Component} from "react";

class FooterComponents extends Component{

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <footer className="footer" style={{textAlign : 'center', fontSize : '20px'}}>
                    <span>Create By DoyApp 2022. </span>
                </footer>
            </div>
        );
    }

}

export default FooterComponents;
