import React from 'react';
import './form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: 'http://test.com/', method: 'GET' };
  }

  // handleChange = (e) => {
  //   const event = e.target;
  //   let name = event.name;
  //   let value = event.value;

  //   this.setState({ [name]: value });
  // };

  handleClick = (e) => {
    const methods = ['GET', 'POST', 'PUT', 'DELETE'];

    methods.forEach((elemnt) => {
      const selected = document.getElementById(`${elemnt}`);
      selected.style.color = '#05386B';
      selected.style.fontWeight = 'normal';
    });
    e.preventDefault();
    const event = e.target;
    console.log(event.method.value);
    const selected = document.getElementById(`${event.method.value}`);
    selected.style.color = 'red';
    selected.style.fontWeight = 'bold';
    this.setState({ url: event.url.value, method: event.method.value });
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleClick}>
          <section id='url'>
            <label>URL: </label>
            <input placeholder='http://test.com' name='url' type='url' required />
          </section>
          <section id='method'>
            <input type="radio" name='method' value='GET' />
            <label id='GET'>GET</label>
            <input type="radio" name='method' value='POST' />
            <label id='POST'>POST</label>
            <input type="radio" name='method' value='PUT' />
            <label id='PUT'>PUT</label>
            <input type="radio" name='method' value='DELETE' />
            <label id='DELETE'>DELETE</label>
          </section>
          <button >GO!</button>
        </form>

        <section id='result'>
          <p>Method: {this.state.method} | URL: {this.state.url}</p>
        </section>
      </main>
    );
  }
}

export default Form;