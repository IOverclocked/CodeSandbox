import React from 'react'
import styled from 'styled-components'
import { DropTarget } from 'react-dnd'

const collect = (cennect, monitor) => ({
  connectDropTarget: cennect.dropTarget(),
  hovered: monitor.isOver(),
  item: monitor.getItem(),
})

const StyledWrapper = styled.div`
  width: 400px;
  height: 400px;
  padding: 20px;
  border: 1px solid #000;
  background-color: ${({ hovered }) => (hovered ? 'green' : 'transparent')};
`

class Target extends React.Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props

    return connectDropTarget(
      <div>
        <StyledWrapper hovered={hovered} />
      </div>,
    )
  }
}

export default DropTarget('item', {}, collect)(Target)
