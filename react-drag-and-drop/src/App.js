import React from 'react'
import styled from 'styled-components'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Item from './Item'
import Target from './Target'

const WrapperApp = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WrapperItems = styled.div`
  margin: 0 auto;
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
  }

  deleteItem = id => {
    console.log('Delete', id)
  }

  render() {
    const { items } = this.state
    return (
      <DndProvider backend={HTML5Backend}>
        <WrapperApp>
          <WrapperItems>
            {items.map((item, i) => (
              <Item
                key={item.id}
                name={item.name}
                id={item.id}
                item={item}
                handleDrop={id => this.deleteItem(id)}
              />
            ))}
          </WrapperItems>
          <Target />
        </WrapperApp>
      </DndProvider>
    )
  }
}

export default App
