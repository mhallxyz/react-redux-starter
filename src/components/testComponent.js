import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText } from '../actions/textChange';


class TestComponent extends Component {

    onTextChange = text => {
        this.props.changeText(text)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input onChange={event => this.onTextChange(event.target.value)} value={this.props.textValue} />
                <p className="main-text">Test</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        textValue: state.text.text
    })
}

const mapDispatchToProps = dispatch => {
    return( {
        changeText: text => dispatch(updateText(text))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);