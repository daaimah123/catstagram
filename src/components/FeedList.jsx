// Exercise 2: Set It Up
	// write a class component
	// make it a div with className FeedList
	// import FeedItem and include it inside the div
	// export default the component!

// Exercise 3: Prop It Up
	// FeedList should accept props as params
	// destructure photos from props
	// iterate over the data and map each photo data to a FeedItem

import React from 'react';
import FeedItem from './FeedItem.jsx';

class FeedList extends React.Component {
    render() {

        // destructure by pulling in photos from HomePage photos array
        const { photos } = this.props;
		//iterate over each image data from each element in array
		const images = photos.map((singleImage, i) => 
		//no curly brackets here because returning components
			//console.log(image.id + " : " +  image.title) //want to show the id and title to be sure mapping works and show we have access to each photo element
			//multiple instances so, assign it a unique of id of i (description='dataItemName')
			//key is for react
            <FeedItem key={i} imagePost={singleImage} />
        )
 
        //
        return (
            <div className="FeedList"> 
                {/* <FeedItem /> dont need anymore because using in images above*/}
                {images}
            </div>
        );
    }
};

export default FeedList;

