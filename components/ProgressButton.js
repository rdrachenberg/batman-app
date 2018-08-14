const React = require('react')
const cx = require('classnames')

module.exports = class ProgressButton extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            buttonWidth: 'auto'
        }
    }

    componentDidMount () {
        this.setState({
            buttonWidth: this.button.clientWidth + 5 + 'px'
        })
    }

    render () {
        const {
            buttonWidth
        } = this.state

        const {
            className,
            inProgress,
            isDone,
            inProgressText,
            isDoneText,
            children,
            ...props
        } = this.props

        return (
            <button {...props} ref={c => this.button = c} className={cx('progress-button', className)}>
                {isDone ? (
                    <div className='f aic jcc'>
                        {isDoneText && <span className='mr05'>{isDoneText}</span>}
                    </div>
                ) : (
            inProgress ? (
                <div className='f aic jcc'>
                    {inProgressText && <span className='mr05'>{inProgressText}</span>}
                </div>
            ) : (
            children
            )
            )}
            </button>
        )
    }
}