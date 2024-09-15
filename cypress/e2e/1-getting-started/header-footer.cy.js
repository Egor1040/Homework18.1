// cypress/integration/header-footer.spec.js
const username = 'guest';
const password = 'welcome2qauto';

describe('Header and Footer Elements', () => {
  
    beforeEach(() => {
      // Відкриваємо сторінку
      
      cy.visit(`https://${username}:${password}@qauto.forstudy.space/`);
      
    });
  
    it('should find all header buttons', () => {
      // Знаходимо всі кнопки в хедері
      cy.get('header button').should('exist').each(($button) => {
        cy.wrap($button).invoke('text').then((text) => {
          cy.log(`Header button text: ${text}`);
        });
      });
    });
  
    it('should find all footer links and buttons', () => {
      // Знаходимо всі посилання і кнопки у футері
      cy.get('footer a, footer button').should('exist').each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
          cy.log(`Footer link/button text: ${text}`);
        });
      });
    });
  
  });
  