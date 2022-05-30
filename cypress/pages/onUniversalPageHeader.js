class onUniversalPageHeader {

    elements = {
        burgerMenu: () => cy.get('#react-burger-menu-btn'),
        shoppingCart: () => cy.get('#shopping_cart_link'),
        shoppingCartBadge: () => cy.get('.shopping_cart_badge'),
        pageHeader: () => cy.get('.title')
    }
}

module.exports = new onUniversalPageHeader();