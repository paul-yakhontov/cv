import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EducationDetails extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`education_item_${i}`}>
        <h3 className="degree">{item.name}</h3>
        <div className="meta">{item.school}</div>
        <div className="time">{item.date}</div>
      </div>
    );
  }
  render() {
    return (
      <div className="education-container container-block">
        <h2 className="container-block-title">{this.props.title || 'Education'}</h2>
        {this.props.list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </div>
    );
  }
}

EducationDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  title: PropTypes.string.isRequired
};

