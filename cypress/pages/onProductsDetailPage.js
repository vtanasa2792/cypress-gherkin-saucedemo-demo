class onProductsDetailsPage {

    elements = {
        backToProductsBtn: () => cy.get('#back-to-products'),
        itemDescription: () => cy.get('.inventory_details_desc_container')
    }
}

module.exports = new onProductsDetailsPage()