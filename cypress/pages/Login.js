class Login {

  visit() {
    
    cy.visit('/')
    cy.reload(false)
    cy.get('app-root app-authentication')
    cy.get('img[src="/assets/img/landing/svg/zenklub_full_logo.svg"]').should('be.visible')
    cy.get('app-login-screen').contains('Que bom que você está aqui!')
  }

  login() {

    const user = 'qa-automation@zenklub.com';
    const password = 'qachallenge'

    cy.go('back').url('include', '/auth/login')
    cy.get('app-login-screen').contains('Que bom que você está aqui!')
    cy.wait(4000)
    cy.get('input#login-form-email').type(user)
    cy.get('input#login-form-password').type(password)
    cy.get('div button[type="submit"]').contains('Entrar').click()
    cy.wait(4000)
    cy.url().should('include', '/profile/sessions')
  }

}
export default new Login;