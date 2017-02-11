import React from "react";
import FilteredMultiSelect from "react-filtered-multiselect";
import { render } from "react-dom";


   var CULTURE_SHIPS = [
  {id: 1, name: '5*Gelish-Oplule'},
  {id: 2, name: '7*Uagren'},
// ...
  {id: 249, name: 'Zero Gravitas'},
  {id: 250, name: 'Zoologist'}
]

   var MyMultiSelect = React.createClass({
  getInitialState() {
    return {selectedShips: []}
  },


  
  handleDeselect(index) {
    var selectedShips = this.state.selectedShips.slice()
    selectedShips.splice(index, 1)
    this.setState({selectedShips})
  },
  handleSelectionChange(selectedShips) {
    this.setState({selectedShips})
  },

  render() {
    var {selectedShips} = this.state
    return <div>
      <FilteredMultiSelect
        onChange={this.handleSelectionChange}
        options={CULTURE_SHIPS}
        selectedOptions={selectedShips}
        textProp="name"
        valueProp="id"
      />
      {selectedShips.length === 0 && <p>(nothing selected yet)</p>}
      {selectedShips.length > 0 && <ul>
        {selectedShips.map((ship, i) => <li key={ship.id}>
          {`${ship.name} `}
          <button type="button" onClick={this.handleDeselect.bind(null, i)}>
            &times;
          </button>
        </li>)}
      </ul>}
    </div>
  }
})



