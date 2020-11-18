//=============== Dependencies ===============\\
import React from 'react';
import './form.scss';
import superagent from 'superagent'
import { If, Then } from 'react-if';

//=============== Form Component ===============\\
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFeatching: false };
  }
  handleClick = (e) => {
    e.preventDefault();
    // Spanner image while fetching
    this.setState({ isFeatching: true })
    // Color the method you choose
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
   
    // Handle delete method for superagent
    if (method.value === 'DELETE') method.value = 'DEL';
    // superagent the required URL with correct method and send the body
    return superagent[method.value.toLowerCase()](url.value).set('Content-Type', 'application/json').send(body.value).then((data) => {

      // Object with all data user filled for the query
      let query = { url: url.value, method: method.value, body: body.value, data: data.body }
      // Getting the localstorge | if not exist make it empty array
      let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
      // Flag to check if query already exist in the localstorge
      let check = false;
      // Loop through the localstorge to check if already exist and change the flag to true
      history.forEach((item) => {
        if ((item.url === query.url) && (item.method === query.method)) {
          check = true
        }
      })
      // End spanner image
      this.setState({ isFeatching: false })

      // Check if the flag true or not and send the data to the handler
      if (check) {
        return this.props.handler(data)
      } else {
        history.push(query)
        localStorage.setItem("history", JSON.stringify(history))
        return this.props.handler(data)
      }

      // Error handling
    }).catch((err) => {
      this.setState({ isFeatching: false })
      this.props.errorHandler(err.message)
    })
  }

  // Fill the form
  fromHistory = (query) => {
    const selected = document.getElementById(`link`);
    selected.value = query.url;
    const radiobtn = document.getElementById(query.method + 'input');
    radiobtn.checked = true;
  }

  // After all component mount check if there any props coming from the history page
  componentDidMount() {
    if (this.props.fromHistory) {
      this.fromHistory(this.props.fromHistory)
    }
  }

//=============== Render ===============\\
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

export default Form;

