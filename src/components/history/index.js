//=============== Dependencies ===============\\
import React from 'react';
import './history.scss';
import Results from '../results/results';
import { If, Then, Else } from 'react-if';
import { Link } from 'react-router-dom';

//=============== History Component ===============\\
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorBody: '', isError: false, Count: 0, Results: [], Headers: {} };
  }

  handelClick = (e) => {
    let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
    const obj = { url: e.currentTarget.childNodes[1].firstChild.data, method: e.currentTarget.childNodes[0].firstChild.data };
    if (this.props.isHistory === true) {

      history.forEach((element) => {
        if ((obj.url === element.url) && (obj.method === element.method)) {
          this.setState({ isError: false, Headers: element.headers, Results: element.data, Count: element.data.length ? element.data.length : element.data.count ? element.data.count : 1 });
        }
      })
    } else {
      const selected = document.getElementById(`link`);
      selected.value = obj.url;
      const radiobtn = document.getElementById(obj.method + 'input');
      radiobtn.checked = true;
      const button = document.getElementById('btn')
      button.click();
    }
  }
//=============== Render ===============\\
  render() {
    let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
    return (
      <If condition={this.props.isHistory}>
        <Then>
          <Results errorBody={this.state.errorBody} isError={this.state.isError} headers={this.state.Headers} count={this.state.Count} results={this.state.Results} />
          <ul>
            <h3>History</h3>
            {
              history.map((query) => {
                return (
                  <div className='historyElement' key={query.method + query.url}>
                    <li className='listHistory' onClick={this.handelClick} ><section id='spanMethod'>{query.method}</section><section id='spanURL'>{query.url}</section></li>
                     <Link className='reRun' to={{ pathname: '/', query: { url: query.url, method: query.method, body: query.body } }}>Re-Run</Link>
                   </div>
                );
              })
            }
          </ul>
        </Then>
        <Else>
          <ul>
            <h3>History</h3>
            {
              history.map((query) => {
                return <li onClick={this.handelClick} key={query.method + query.url}><section id='spanMethod'>{query.method}</section><section id='spanURL'>{query.url}</section></li>;
              })
            }
          </ul>
        </Else>
      </If>
    )
  }
}

export default History;