// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// TODO: BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state
  /* this.setState((prevState) => {
        return {
            counter: prevState.counter + 1
        }
    }) */
import React from 'react';

class Likes extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLiked: false, 
		}
	}
	
	handleClick = () => {
		this.setState ({
			isLiked: !this.state.isLiked 
		}) //set to be NOT the current state
	}

    render() {
		//pulling in destructed prop from FeedItem to use in Likes component
		const { likes} = this.props;
		
    	return (
    		<div className="Likes">
    			<span>{likes} likes</span>
    			<button className="LikesButton" onClick={this.handleClick}>
    				{this.state.isLiked ? "Liked!" : "Like?"}
    			</button>
    		</div>
    	);
    }
}

export default Likes;
