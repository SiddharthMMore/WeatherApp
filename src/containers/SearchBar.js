import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, updateSearchTerm } from '../actions';

const SearchBar = (props) => {
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.fetchWeather(props.term);
    props.updateSearchTerm('');
  };
  const onInputChange = (event) => {
    props.updateSearchTerm(event.target.value);
  };
  return (
    <form onSubmit={onFormSubmit} className="input-group">
      <input
        placeholder="Enter City"
        className="form-control"
        value={props.term}
        onChange={onInputChange}
      />
      <span className="input-group-button">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { term: state.searchTerm };
};

export default connect(mapStateToProps, { fetchWeather, updateSearchTerm })(
  SearchBar
);
