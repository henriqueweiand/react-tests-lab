import { act, renderHook } from '@testing-library/react-hooks'

import useCounter from '../usePokemon';

describe('useCounter', () => {
  it('Should increment the counter', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })

  it('Should decrement the counter', () => {
    const { result } = renderHook(useCounter);

    act(() => {
      result.current.decrement()
    })

    expect(result.current.count).toBe(-1)
  })
})
