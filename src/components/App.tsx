import * as React from 'react'
import { connect } from 'react-redux';

interface Props {
  start: string,
}

const App: React.FC<Props> = (props) => {

  return (
    <div>
      <h1>{props.start}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    start: state.start,
  }
}

export default connect(mapStateToProps, null)(App);
