import HomePage from './pages/HomePage';

describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve exibir o título correto', () => {
    HomePage.elements.title().should('contain', 'Status do Metrô de São Paulo');
  });

  it('Deve exibir os links de navegação', () => {
    HomePage.elements.nav().within(() => {
      HomePage.elements.inicioLink().should('exist');
      HomePage.elements.adminLink().should('exist');
    });
  });

  it('Deve exibir a seção de status atual', () => {
    HomePage.elements.statusSection().should('exist');
  });

  it('Deve exibir o botão "Reportar Problema"', () => {
    HomePage.elements.reportButton().should('exist');
  });

  it('Deve exibir a nota informativa', () => {
    HomePage.elements.infoText().should('exist');
  });
});
