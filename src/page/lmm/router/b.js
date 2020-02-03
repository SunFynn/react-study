import React from 'react'

export default function b(props) {
  let search=props.location.search;
  let url=new URLSearchParams(search);
  return (
    <div>
      bbbbbbbbbb
      {url.get('title')}

    </div>
  )
}
