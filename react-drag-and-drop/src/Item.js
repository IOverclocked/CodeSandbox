import React from 'react'
import styled from 'styled-components'
import { DragSource } from 'react-dnd'

const StyledItem = styled.div`
  width: 300px;
  height: 25px;
  padding: 10px;
  text-align: center;
  border: 1px solid #000;
  color: #000;
  margin: 2em 0;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};
`

const itemSource = {
  beginDrag(props) {
    console.log('Start dragging')

    return props.item
  },
  endDrag(props, monitor, components) {
    console.log('End dragging')
    if (!monitor.didDrop()) return

    return props.handleDrop(props.item.id)
  },
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging(),
})

class Item extends React.Component {
  render() {
    const { name, id, isDragging, connectDragSource } = this.props
    console.log(isDragging)

    return connectDragSource(
      <div>
        <StyledItem id={`item-${id}`} isDragging={isDragging}>
          {name}
        </StyledItem>
      </div>,
    )
  }
}

export default DragSource('item', itemSource, collect)(Item)
