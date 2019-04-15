// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedItem
	// make an img element inside
	// import Likes, include it underneath img
	// export default the component!

// Exercise 3: Prop It Up
	// pass in props as params to the component
	// destructure what you need from the props
	// Hint: what do you need in order to get the image to display?
	// Hint: what do you need in order to get likes to display in the Likes component?

import React from 'react';
import Likes from './Likes.jsx';

class FeedItem extends React.Component {
    render() {

		// pulling in imagePost of key and imagePost from FeedList for use to create ind FeedItems
		const { imagePost } = this.props;
		//destruct imagePost in order to pass likes to Likes component
		const {id, title, url, likes, userLiked} = imagePost;

        return (
            <div className="FeedItem">
                <h2>{imagePost.id}.{imagePost.title}</h2>
				<img className="Image" src={imagePost.url}/> 				
                <Likes likes={likes} userLiked={userLiked}/>
            </div>
        );
    }
}

export default FeedItem;
