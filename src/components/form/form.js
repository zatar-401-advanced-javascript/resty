import React from 'react';
import './form.scss';
import superagent from 'superagent'
import { If, Then } from 'react-if';

class FormTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFeatching: false };
  }

  handleClick = (e) => {
    this.setState({ isFeatching: true })
    const methods = ['GET', 'POST', 'PUT', 'DELETE'];
    methods.forEach((elemnt) => {
      const selected = document.getElementById(`${elemnt}`);
      selected.style.color = '#05386B';
      selected.style.fontWeight = 'normal';
    });
    const { url, method, body } = e.target.elements;
    const selected = document.getElementById(`${method.value}`);
    selected.style.color = '#f05454';
    selected.style.fontWeight = 'bold';

    e.preventDefault();
    if (method.value === 'DELETE') method.value = 'DEL';
    return superagent[method.value.toLowerCase()](url.value).set('Content-Type', 'application/json').send(body.value).then((data) => {

      let query = { url: url.value, method: method.value, body: body.value, data: data.body }
      let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
      let check = false;

      history.forEach((item) => {
        if ((item.url === query.url) && (item.method === query.method)) {
          check = true
        }
      })
      this.setState({ isFeatching: false })
      if (check) {
        return this.props.handler(data)
      } else {
        history.push(query)
        localStorage.setItem("history", JSON.stringify(history))
        return this.props.handler(data)
      }
    }).catch((err) => {
      this.setState({ isFeatching: false })
      console.log(err.message)
      this.props.errorHandler(err.message)
    })
  }

  fromHistory = (query) => {
    const selected = document.getElementById(`link`);
    selected.value = query.url;
    const radiobtn = document.getElementById(query.method + 'input');
    radiobtn.checked = true;
  }

  componentDidMount(){
    if (this.props.fromHistory) {
      this.fromHistory(this.props.fromHistory)
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleClick}>
          <section id='url'>
            <label>URL: </label>
            <input placeholder='http://test.com' id='link' data-testid='url' name='url' type='url' required />
          </section>
          <section id='method'>

            <label id='GET'>GET <input id='GETinput' defaultChecked type="radio" name='method' value='GET' /></label>

            <label id='POST'>POST <input id='POSTinput' type="radio" name='method' value='POST' /></label>

            <label id='PUT'>PUT <input id='PUTinput' type="radio" name='method' value='PUT' /></label>

            <label id='DELETE'>DELETE <input id='DELETEinput' type="radio" name='method' value='DELETE' /></label>
          </section>
          <textarea id='body' name='body'></textarea>
          <button id='btn' data-testid='button'>GO!</button>
        </form>
        <If condition={this.state.isFeatching === true}>
          <Then>
            <img data-testid='loading' alt='loading' src='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'></img>
          </Then>
        </If>
      </>
    );
  }
}

export default FormTest;