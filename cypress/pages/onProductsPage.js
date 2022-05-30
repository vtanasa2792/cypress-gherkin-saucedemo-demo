class onProductsPage {

    elements = {
        sortingFilter: () => cy.get('#product_sort_container'),
        itemName: () => cy.get('.inventory_item_name'),
        inventoryItem: () => cy.get('.inventory_item'),
        itemDescription: () => cy.get('.inventory_item_description'),
        addToCartBtn: () => cy.get('[id^="add-to-cart"]'),
        removeBtn: () => cy.get('[id^="remove"]')
    }
}

module.exports = new onProductsPage();