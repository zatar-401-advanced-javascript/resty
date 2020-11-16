import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 0, Results:[], Headers:{} };
  }

  update = async (results) =>{
    this.setState({Headers:results.headers,Results:results.body, Count:results.body.length?results.body.length:results.body.count?results.body.count:1});
  }

  render() {
    return (
      <>
        <Header />
        <main>
        <Form handler={this.update}/>
        <Results headers={this.state.Headers} count={this.state.Count} results={this.state.Results}/>
        </main>
        <Footer />
      </>
    );
  }
}
export default App;
