import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import config from 'vtex-tachyons/config.json'

class ArrowDown extends PureComponent {
  render() {
    const { color, size } = this.props
    return (
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.39162 16C8.78498 16 9.04721 15.8667 9.30945 15.6L16.7832 8L14.9476 6.13333L9.70281 11.4667V0H7.08043V11.4667L1.83567 6.13333L3.12612e-08 8L7.47379 15.6C7.73602 15.8667 7.99826 16 8.39162 16Z"
          fill="#444444"
        />
      </svg>
    )
  }
}

ArrowDown.defaultProps = {
  color: config.colors['serious-black'],
  size: 16,
}

ArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default ArrowDown
