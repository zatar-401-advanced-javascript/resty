import React from 'react';
import './history.scss';

export default function History(props) {
  let history = localStorage.getItem("history") ? JSON.parse(localStorage.getItem("history")) : [];
  return (
    <>
      {
        history.map((query) => {
          return <li onClick={handelClick} key={query.method + query.url}><span>{query.method}</span><span>{query.url}</span></li>;
        })
      }
    </>
  )
}

function handelClick(e) {
  const obj = { url: e.currentTarget.childNodes[1].firstChild.data, method: e.currentTarget.childNodes[0].firstChild.data };

  const selected = document.getElementById(`link`);
  selected.value = obj.url;
  const radiobtn = document.getElementById(obj.method+'input');
  radiobtn.checked = true;
  const button = document.getElementById('btn')
  button.click();
}