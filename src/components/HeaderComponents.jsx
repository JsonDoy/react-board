import React, {Component} from "react";

class HeaderComponents extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="http://localhost:3000" className="navbar-brand"> DOY APP </a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;
