import React from 'react'
import Leader from '../Leader'
import { fireEvent, render, screen, cleanup, waitFor } from '@testing-library/react'
import { ILeader } from 'interfaces/Leader.interface'
const renderer = require('react-test-renderer')

afterEach(cleanup)

describe('Leader', () => {
  test('snapshot testing', () => {
    const leader: ILeader = { id: '1', name: 'Tejas', points: 1 }
    const onIncrement = jest.fn
    const onDecrement = jest.fn

    const component = renderer.create(<Leader leader={leader} onIncrement={onIncrement} onDecrement={onDecrement} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('calls increment/decrement functions', () => {
    const leader: ILeader = { id: '1', name: 'Tejas', points: 1 }
    const onIncrement = jest.fn()
    const onDecrement = jest.fn()

    render(<Leader leader={leader} onIncrement={onIncrement} onDecrement={onDecrement} />)

    fireEvent.click(screen.getByTestId('btnIncrement'))
    expect(onIncrement).toHaveBeenCalled()

    fireEvent.click(screen.getByTestId('btnDecrement'))
    expect(onDecrement).toHaveBeenCalled()
  })
})
