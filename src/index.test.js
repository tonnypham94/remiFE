import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import FunnyVideo from './page/FunnyVideo'

describe('Render FunnyVideo', () => {
  it('Shows "Funny Movies"', () => {
    const { getByText } = render(
      <Provider store={store}>
        <FunnyVideo />
      </Provider>
    )

    expect(getByText('Funny Movies')).not.toBeNull()
  })
})
