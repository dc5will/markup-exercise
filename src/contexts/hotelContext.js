import React, { Component } from "react";

const HotelContext = React.createContext({
  activeTab: "",
  error: null,
  setError: () => {},
  clearError: () => {}
});

export default HotelContext;

export class HotelProvider extends Component {
  constructor(props) {
    super(props);
    const state = {
      user: {},
      error: null,
      activeTab: 'DESCRIPTION',
    };
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
      activeTab: this.state.activeTab,
      setError: this.setError,
      clearError: this.clearError,
      onClickTabItem: this.onClickTabItem,
    };

    return (
      <HotelContext.Provider value={value}>
        {this.props.children}
      </HotelContext.Provider>
    );
  }
}
