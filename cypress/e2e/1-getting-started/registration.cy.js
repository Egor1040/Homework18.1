// cypress/integration/registration.spec.js

// Кастомна команда для реєстрації
Cypress.Commands.add('register', (email, password) => {
    cy.visit('https://qauto.forstudy.space/register'); // Змініть URL на сторінку реєстрації
  
    // Заповнюємо форму реєстрації
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password, { sensitive: true });
    cy.get('button[type="submit"]').click();
  });
  
  // Кастомна команда для логіну
  Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://qauto.forstudy.space/login'); // Змініть URL на сторінку логіну
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password, { sensitive: true });
    cy.get('button[type="submit"]').click();
  });
  
  describe('Registration and Login', () => {
  
    const uniqueEmail = `testuser${Date.now()}@example.com`; 
    const password = 'superSecret123';
  
    it('should register a new user and login', () => {
      // Реєстрація нового користувача
      cy.register(uniqueEmail, password);
  
      // Логін з новим користувачем
      cy.login(uniqueEmail, password);
  
      // Перевірка, що користувач успішно увійшов в систему
      cy.url().should('include', '/dashboard'); // Змініть URL на фактичний шлях після входу
    });
  
  });
  