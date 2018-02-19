import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import NewMessage from './components/NewMessage.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      entries:[]
    };

  }


  componentDidMount() {
    $.ajax({
      method:"GET",
      url: '/item',
      success: (data) => {
        console.log(data)
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
    return (<div style={{ textAlign: 'center'}}>
      <h1>Complaint Board</h1>
      <NewMessage onSubmit={this.handleSubmit}/>

    </div>)
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

  //    <list item={this.state.items}/>