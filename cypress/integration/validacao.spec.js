import validacao from '../pages/Validacao';

describe('Validar profissioal', () => {
  it('Validar informações do profissioal', () => {
    validacao.visit();
    validacao.login();
    validacao.agendamento();
    validacao.novaagenda();
    validacao.validar();
  })
})