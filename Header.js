import React from 'react';
import './Header.css'; // Importing the CSS file for styling the Header component
import SearchIcon from '@material-ui/icons/Search'; // Importing the Search icon from Material-UI icons
import LanguageIcon from '@material-ui/icons/Language'; // Importing the Language icon from Material-UI icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'; // Importing the ExpandMore icon from Material-UI icons
import { Avatar } from '@material-ui/core'; // Importing the Avatar component from Material-UI core

// Header component definition
function Header() {
    return (
        <div className='header'> {/* Main container for the header */}
            <img
                className='header__icon' // Class for styling the header icon
                src='https://via.placeholder.com/150' // Placeholder image URL for the logo
                alt='Logo' // Alternative text for the image
            />
            <div className='header__center'> {/* Container for the search bar */}
                <input type='text' /> {/* Input field for search */}
                <SearchIcon /> {/* Search icon next to the input field */}
            </div>
            <div className='header__right'> {/* Container for the right side of the header */}
                <p>Register Hotel</p> {/* Text for registering a hotel */}
                <LanguageIcon /> {/* Language icon */}
                <ExpandMoreIcon /> {/* Expand more icon */}
                <Avatar /> {/* Avatar icon */}
            </div>
        </div>
    );
}

export default Header; // Exporting the Header component to be used in other parts of the application
