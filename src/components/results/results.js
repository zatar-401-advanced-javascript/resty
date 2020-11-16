import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view'

function Results(props) {
  if (props.count > 0 || typeof props.count == 'string') {
    return (
      <>
        <section data-testid='count' id='count'><p>Count: {props.count}</p></section>
        <section id='result'>
          <ReactJson name='Headers' src={props.headers} />
          <ReactJson name='Response' src={props.results} />
        </section>
      </>
    )
  } else {
    return (
      <section id='result'>

      </section>
    )
  }
}


export default Results;