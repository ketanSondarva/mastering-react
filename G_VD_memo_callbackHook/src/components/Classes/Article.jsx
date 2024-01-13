import Paragraph from "../Paragraph"
import Button from "../Button";
import React from "react";

const list = ["The way of React 16:","There is no hooks before react 16.","There is class based component used before react 16.3 (approx). ","after react 16 there are some hooks intorduced and new era of functional programming begin"];

class Article extends React.Component {

    constructor() {
        super();
        this.state = {
            title:'Class-Based components',
        }
    }

    onCLickHandler = () => {
        this.setState({title:'Changed title'})
        console.log('on button click',this.state.title);
    }

    componentDidMount() {
        console.log("in component did mount");
    }

    componentWillUnmount() {
        console.log("in comonent will mount");
    }

    componentDidUpdate() {
        console.log("in component did update");
    }
    
    render() {
        return (
            <div>
                <p>{this.state.title}</p>
                <Paragraph show={true}  list={list}/>
                {/* <Button type="button" name="Add to Favorite" onClick={onCLickHandler.bind()} /> */}
                <button onClick={this.onCLickHandler}>Add to Favorite</button>
            </div>
        )
    }
}

export default Article