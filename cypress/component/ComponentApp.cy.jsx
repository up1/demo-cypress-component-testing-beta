import App from '../../src/App.jsx'

describe('ComponentApp.cy.js', () => {
  it('Hello Component Testing', () => {
    cy.mount(<App />)
  })
})