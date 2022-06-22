import agenda from '../pages/Agenda'

describe('Não possuir nenhum agendamento marcado', () => {
  it('Não deve ter agendamento marcado', () => {
    agenda.visit();
    agenda.login();
    agenda.agendamento();
  })
})