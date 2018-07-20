import React, {Component} from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import './input_text_standard.scss';

export default class Input extends Component {
    static defaultProps = {
        type: 'text',
        value: '',
        onChange: (e) => {},
        autoComplete: 'on',
        autoFocus: false,
        hidden: false,
        disabled: false,
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            type,
            hidden,
            value,
            placeholder,
            disabled,
            className,
            error,
            autoComplete,
            autoFocus,
            onChange,
            onClick,
            onBlur,
            onCopy,
            onCut,
            onPaste,
            onMouseDown,
            onMouseUp,
            onMouseEnter,
            onMouseLeave,
            onInput,
            onKeyDown,
            onKeyPress,
            onKeyUp,
            onSubmit
        } = this.props;
        const classes = classNames(
            'input_text_standard',
            {
                'disabled':disabled
            },
            {
                'hidden':hidden
            },
            {
                'error':error
            },
            {
                [className]:className
            }
        );
        const input = (
        <input
            type={type}
            hidden={hidden}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            className={classes}
            onChange={onChange}
            autoComplete={autoComplete}
            autoFocus={hidden
            ? false
            : autoFocus}
            onClick={onClick}
            onBlur={onBlur}
            onCopy={onCopy}
            onCut={onCut}
            onPaste={onPaste}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onInput={onInput}
            onKeyDown={onKeyDown}
            onKeyPress={onKeyPress}
            onKeyUp={onKeyUp}
            onSubmit={onSubmit}/>
        )

        return input;
    }
}

Input.propTypes = {
    type: propTypes.oneOf([
        'text',
        'number',
        'password',
        'tel',
        'search',
        'url',
        'email',
        'hidden'
    ]),
    style: propTypes.object,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    autoComplete: propTypes.string,
    autoFocus: propTypes.bool,
    hidden: propTypes.bool,
    disabled: propTypes.bool,
    onChange: propTypes.func,
    onClick: propTypes.func,
    onBlur: propTypes.func,
    onCopy: propTypes.func,
    onCut: propTypes.func,
    onPaste: propTypes.func,
    onMouseDown: propTypes.func,
    onMouseUp: propTypes.func,
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func,
    onInput: propTypes.func,
    onKeyDown: propTypes.func,
    onKeyPress: propTypes.func,
    onKeyUp: propTypes.func,
    onSubmit: propTypes.func
}