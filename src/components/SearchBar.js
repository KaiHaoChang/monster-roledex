import React from "react";

class SearchBar extends React.Component {
  render() {
    const { onSearchChange, placeHolder, inputType } = this.props;
    return (
        <input type={inputType}
               className="search-box"
               placeholder={placeHolder}
               onChange = {onSearchChange}
        />
    )
  }
}

export default SearchBar;