import novaagenda from '../pages/NovoAgenda.js'

describe('Agendamento Realizado', () => {
  it('Deve ter agendamento marcado', () => {
    novaagenda.visit();
    novaagenda.login();
    novaagenda.agendamento();
    novaagenda.novaagenda();
  })
})