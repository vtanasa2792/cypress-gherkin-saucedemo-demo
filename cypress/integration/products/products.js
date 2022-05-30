const { Given, When, And, Then } = require("cypress-cucumber-preprocessor/steps");
const onProductsDetailPage = require("../../pages/onProductsDetailPage");
const onProductsPage = require("../../pages/onProductsPage");
const onUniversalPageHeader = require("../../pages/onUniversalPageHeader");

Given('The user is logged in', () => {
    cy.login('standard_user', 'secret_sauce')
})

And('Is on the Products page', () => {
    onUniversalPageHeader.elements.pageHeader().should('contain', 'Products')
})

When('Selecting an item from the Products list', () => {
    //Nothing to see here. Items are iterated through on the next step.
})

Then('The user is taken to that product`s description page', () => {
    onProductsPage.elements.inventoryItem().each((availableItem, index) => {
        onProductsPage.elements.itemName().eq(index).click()
        cy.url().should('contain', '/inventory-item')
        onProductsDetailPage.elements.backToProductsBtn().click()
    })
})

And('Its description is the same on both the Products and the Product Details page', () => {
    onProductsPage.elements.itemDescription().each((availableItemDescription, index) => {

        var itemDescription = availableItemDescription.text()

        onProductsPage.elements.itemName().eq(index).click()
        onProductsDetailPage.elements.itemDescription().should('have.text', itemDescription)
        onProductsDetailPage.elements.backToProductsBtn().click()
    })
})

When('The user selects the the Add to cart button on any of the available Products', () => {
    onProductsPage.elements.addToCartBtn().click({ multiple: true })
})

Then('The Add to cart button becomes the Remove button', () => {
    onProductsPage.elements.addToCartBtn().should('not.exist')
})

And('The numeric indicator of the Cart icon updates accordingly', () => {
    onProductsPage.elements.removeBtn().then(numberOfRemoveButtons => {
        cy.wrap(numberOfRemoveButtons).its('length').then(itemsAddedToCart => {
            onUniversalPageHeader.elements.shoppingCartBadge().should('have.text', itemsAddedToCart)
        })
    })
})