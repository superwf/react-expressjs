import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class ListView extends Component {
  renderList() {
    const { listItems, previewItem } = this.props;
    return Object.keys(listItems).map((key) => {
      const item = listItems[key];
      return (
        <li key={item.name}>
          <button onClick={() => previewItem(item.name)}>{item.name}</button>
        </li>
      );
    });
  }
  render() {
    return (
      <div className={`${style.item} list_items`}>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.object.isRequired,
  previewItem: PropTypes.func.isRequired,
};

export default ListView;
