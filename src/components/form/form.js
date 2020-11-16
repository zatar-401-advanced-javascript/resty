import React from 'react';
import './form.scss';
const superagent = require('superagent');

function Form(props) {
  return (
    <>
      <form onSubmit={handleClick}>
        <section id='url'>
          <label>URL: </label>
          <input placeholder='http://test.com' data-testid='url' name='url' type='url' required />
        </section>
        <section id='method'>

          <label id='GET'>GET <input defaultChecked type="radio" name='method' value='GET' /></label>

          <label id='POST'>POST <input type="radio" name='method' value='POST' /></label>

          <label id='PUT'>PUT <input type="radio" name='method' value='PUT' /></label>

          <label id='DELETE'>DELETE <input type="radio" name='method' value='DELETE' /></label>
        </section>
        <button data-testid='button'>GO!</button>
      </form>
    </>
  );

  function handleClick(e) {
    const methods = ['GET', 'POST', 'PUT', 'DELETE'];
    methods.forEach((elemnt) => {
      const selected = document.getElementById(`${elemnt}`);
      selected.style.color = '#05386B';
      selected.style.fontWeight = 'normal';
    });
    const { url, method } = e.target.elements;
    const selected = document.getElementById(`${method.value}`);
    selected.style.color = 'red';
    selected.style.fontWeight = 'bold';

    e.preventDefault();
    return superagent[method.value.toLowerCase()](url.value).then((data) => {
      return props.handler(data)
    })
  }
}

export default Form;