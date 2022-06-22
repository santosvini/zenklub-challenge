import login from '../pages/Login'

describe('Fazer Login na Zenklub', () => {
  it('Deve conseguir fazer login', () => {
    login.visit()
    login.login()
  })
})