import React from 'react'

const Content = () => {
  console.log('Content Rendering  !!!!!')
  // Log để check xem component có bị render hay không

  return (
    <h1 style={{ textAlign: 'center' }}>Content NE</h1>
  )
}

export default React.memo(Content)

// import React, { Component, PureComponent } from 'react'

// class Content extends PureComponent {
//   render() {
//     console.log('Content render');
//     return (
//       <div>index</div>
//     )
//   }
// }

// export default Content
