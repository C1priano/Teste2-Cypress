    class HomePage {
        elements = {
        title: () => cy.get('h1'),
        nav: () => cy.get('nav'),
        inicioLink: () => cy.contains('Início'),
        adminLink: () => cy.contains('Admin'),
        statusSection: () => cy.contains('Status Atual'),
        reportButton: () => cy.contains('Reportar Problema'),
        infoText: () => cy.contains('Este é um serviço não oficial. Os dados são crowdsourced de relatórios de usuários.')
        };
    }
    
    export default new HomePage();