import checkout from '../pages/Checkout'

describe('Página de Checkout', () => {
  it('Confirmar página de checkout', () => {
    checkout.visit();
    checkout.login();
    checkout.agendamento();
    checkout.novaagenda();
    checkout.validar();
    checkout.checkout();
  })
})