import React from "react";
import PropTypes from 'prop-types';

// Main.js -> 
class Search extends React.Component {
  
  static contextTypes = { // 静态属性
    router: PropTypes.object.isRequired
  }
  // public 属性 react 不能去dom querySelector 
  searchRef = React.createRef();
  // => 可以指向外部
  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value; 
    console.log(this.context);
    // console.log(searchTerm, '-------------');
    this.context.router.history.push(`/search/${searchTerm}`);
  }

  render() {
    console.log(this.searchRef);
    return (
      // 表单  
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef}
           placeholder="Hoppy, Malt, Angry, New..."/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;