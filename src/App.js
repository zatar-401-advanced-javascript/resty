import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';
import History from './components/history';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {errorBody:'', isError:false, Count: 0, Results: [], Headers: {} };
  }

  update = async (results) => {
    this.setState({ isError:false, Headers: results.headers, Results: results.body, Count: results.body.length ? results.body.length : results.body.count ? results.body.count : 1 });
  }

  error = (err) =>{
    console.log('test2')
    this.setState({isError:true, errorBody:err})
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <ul>
            <History />
          </ul>
          <Form errorHandler={this.error} handler={this.update}/>
          <Results errorBody={this.state.errorBody} isError={this.state.isError} headers={this.state.Headers} count={this.state.Count} results={this.state.Results} />
        </main>
        <Footer />
      </>
    );
  }
}
export default App;
