import React, { Component } from "react";

const HotelContext = React.createContext({
  activeTab: '',
  error: null,
  setError: () => {},
  clearError: () => {}
});

export default HotelContext;

export class HotelProvider extends Component {
  constructor(props) {
    super(props);
    const state = { user: {}, error: null };
    this.state = state;
  }

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const value = {
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError
    };

    return (
      <HotelContext.Provider value={value}>
        {this.props.children}
      </HotelContext.Provider>
    );
  }
}
