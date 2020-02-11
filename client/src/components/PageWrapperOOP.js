import React from 'react'

class Wrapper extends React.Component {
  // constructor(props) {
  //   super(props)
  //   const { navigation } = props
  //   this.state = {
  //
  //   }
  // }

  navigateTo = (route) => {
    this.props.history.push(route)
  }
}

export default Wrapper
