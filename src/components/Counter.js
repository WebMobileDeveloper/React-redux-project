/**
 * Created by Pro on 7/16/2017.
 */

import React, {Component, PropTypes} from 'react';
import Value from './Value';
import Control from './Control';
//import {connect, bindActionCreators} from 'react-redux';
import {connect} from 'react-redux';
import * as actions from '../actions';


const propTypes = {};
const defaultProps = {};
class Counter extends Component {
    constructor(props) {
        super(props);
        this.setRamdomColor = this.setRamdomColor.bind(this);
    }

    setRamdomColor() {
        console.log("onRandomizeColor");
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];
        this.props.handleSetColor(color);
    }

    render() {
        const color=this.props.color;
        const style={
            background:`rgb(${color[0]},${color[1]},${color[2]} )`
        };
        return (
            <div style={style}>
                <Value number={this.props.number} />
                <Control onPlus={this.props.handleIncrement}
                         onSubtract={this.props.handleDecrement}
                         onRandomizeColor={this.setRamdomColor}/>

            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    };
};
const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions,dispatch);
    return {
        handleIncrement: () => {
            dispatch(actions.increment())
        },
        handleDecrement: () => {
            dispatch(actions.decrement())
        },
        handleSetColor: (color) => {
            dispatch(actions.setColor(color))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

