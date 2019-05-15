import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {
	render () {
		const { info } = this.props
        
		return (
		  <div>
            <h1>{ info }</h1>
		  </div>
		)
	}
}
const mapStateToProps = (state) => ({
	info: state.post.info
})
export default connect(mapStateToProps)(Card)