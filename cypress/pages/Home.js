class Home {
  visit() {
    cy.visit('/')
    cy.reload(false)
    cy.get('app-root app-authentication')
    cy.get('img[src="/assets/img/landing/svg/zenklub_full_logo.svg"]').should('not.be.visible')
    cy.get('app-login-screen').contains('Que bom que você está aqui!')
  }
}
export default new Home;