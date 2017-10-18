import React, {Component} from "react";
import axios from "axios";
import Main from "../layout/Masterpage/Main";

class Home extends Component{
    render(){
        return(
            <div className="Home">
                <Main>
                    HOME
                </Main>
            </div>    
        );
    }    
}

export default Home;