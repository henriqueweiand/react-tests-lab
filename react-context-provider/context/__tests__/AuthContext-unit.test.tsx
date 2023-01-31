import { fireEvent, render } from '@testing-library/react';

import { AuthContext, AuthProvider } from '../AuthContext';

describe('AuthContext', () => {
  it('Should be able to set isLoggedIn with true', () => {
    const { getByText } = render(<AuthProvider>
      <AuthContext.Consumer>
        {
          value => <span>isLoggedIn = {value.isLoggedIn.toString()}</span>
        }
      </AuthContext.Consumer>
    </AuthProvider>)

    expect(getByText('isLoggedIn = false')).toBeTruthy()
  })

  it("Should make the login", () => {
    const { getByText } = render(<AuthProvider>
      <AuthContext.Consumer>
        {
          value => (
            <>
              <span>isLoggedIn = {value.isLoggedIn.toString()}</span>
              <button onClick={value.login}>login</button>
            </>
          )
        }
      </AuthContext.Consumer>
    </AuthProvider>)

    const button = getByText('login');
    fireEvent.click(button);

    expect(getByText('isLoggedIn = true')).toBeTruthy()
  })

  it("Should make the logout", () => {
    const { getByText } = render(<AuthProvider>
      <AuthContext.Consumer>
        {
          value => (
            <>
              <span>isLoggedIn = {value.isLoggedIn.toString()}</span>
              <button onClick={value.login}>login</button>
              <button onClick={value.logout}>logout</button>
            </>
          )
        }
      </AuthContext.Consumer>
    </AuthProvider>)

    const buttonLogin = getByText('login');
    const buttonLogout = getByText('logout');
    fireEvent.click(buttonLogin);
    fireEvent.click(buttonLogout);

    expect(getByText('isLoggedIn = false')).toBeTruthy()
  })
})
