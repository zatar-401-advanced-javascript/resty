//=============== Dependencies ===============\\
import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';

//=============== Render ===============\\
function Results(props) {
  return (

    <If condition={props.isHistory === true}>
      <Then>
        <section id='result'>
          <ReactJson name='Response' src={props.results} />
        </section>
      </Then>

      <Else>
        <If condition={props.isError === false}>
          <Then>
            <If condition={props.count > 0 || typeof props.count == 'string'}>
              <Then>
                <section data-testid='count' id='count'><p>Count: {props.count}</p></section>
                <section id='result'>
                  <ReactJson name='Headers' src={props.headers} />
                  <ReactJson name='Response' src={props.results} />
                </section>
              </Then>
              
              <Else>
                <section id='result'>

                </section>
              </Else>
            </If>
          </Then>

          <Else>
            <section id='result'>
              <strong>Error: </strong>{props.errorBody}
            </section>
          </Else>
        </If>
      </Else>
    </If>
  )
}


export default Results;