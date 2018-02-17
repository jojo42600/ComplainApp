import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import NewMessage from './components/NewMessage.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };

  }


  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>

      <h1>Complaint Board</h1>

      <NewMessage/>
    </div>)
  }
}
//<List items={this.state.items} || dog/>
ReactDOM.render(<App />, document.getElementById('app'));