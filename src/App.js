import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  MoveUp() {
    console.log("up called");
    var ddl = document.getElementById('contentlist');
    var selectedItems = new Array();
    var temp = { innerHTML: null, value: null };
    for (var k = 0; k < ddl.length; k++)
      if (ddl.options[k].selected)
        selectedItems.push(k);

    if (selectedItems.length > 0)
      if (selectedItems[0] !== 0)
        for (var i = 0; i < selectedItems.length; i++) {
          temp.innerHTML = ddl.options[selectedItems[i]].innerHTML;
          temp.value = ddl.options[selectedItems[i]].value;
          ddl.options[selectedItems[i]].innerHTML = ddl.options[selectedItems[i] - 1].innerHTML;
          ddl.options[selectedItems[i]].value = ddl.options[selectedItems[i] - 1].value;
          ddl.options[selectedItems[i] - 1].innerHTML = temp.innerHTML;
          ddl.options[selectedItems[i] - 1].value = temp.value;
          ddl.options[selectedItems[i] - 1].selected = true;
          ddl.options[selectedItems[i]].selected = false;
        }
  }
  MoveDown() {
    var ddl = document.getElementById('contentlist');
    var selectedItems = new Array();
    var temp = { innerHTML: null, value: null };
    for (var k = 0; k < ddl.length; k++)
      if (ddl.options[k].selected)
        selectedItems.push(k);

    if (selectedItems.length > 0)
      if (selectedItems[selectedItems.length - 1] !== ddl.length - 1)
        for (var i = selectedItems.length - 1; i >= 0; i--) {
          temp.innerHTML = ddl.options[selectedItems[i]].innerHTML;
          temp.value = ddl.options[selectedItems[i]].value;
          ddl.options[selectedItems[i]].innerHTML = ddl.options[selectedItems[i] + 1].innerHTML;
          ddl.options[selectedItems[i]].value = ddl.options[selectedItems[i] + 1].value;
          ddl.options[selectedItems[i] + 1].innerHTML = temp.innerHTML;
          ddl.options[selectedItems[i] + 1].value = temp.value;
          ddl.options[selectedItems[i] + 1].selected = true;
          ddl.options[selectedItems[i]].selected = false;
        }
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <select id="contentlist" style={{overflowY:"hidden",height:"150px",width:"100%"}} name="itemId" multiple="multiple">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button id="Up" onClick={this.MoveUp}>Up</button>
            <button id="Down" onClick={this.MoveDown}>Down</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
