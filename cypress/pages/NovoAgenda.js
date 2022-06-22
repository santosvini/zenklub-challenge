class NovoAgenda {

  visit() {
    
    cy.visit('/')
    cy.reload(false)
    cy.get('app-root app-authentication')
    cy.get('img[src="/assets/img/landing/svg/zenklub_full_logo.svg"]').should('not.be.visible')
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

  agendamento() {

    cy.get('#search-screen').should('be.visible')
    cy.get('div span.h5').contains(' Você ainda não fez nenhuma sessão.')
    cy.get('a[href="/busca"] span').click()
    cy.url().should('include', '/busca/?lang=pt').location('href')

  }

  novaagenda() {

    cy.get('section.search-results')
    cy.get('div a.btn-primary[href="/psicanalistas/edgard-machado"]').contains(' Gostei 💜 quero saber mais! ').click()
    cy.url().should('include', '/psicanalistas/edgard-machado').location('href')
    
  }

}

export default new NovoAgenda