Feature: Products

    The user can browse and interact with the listed products.

    Background: The user is logged in
        Given The user is logged in
        And Is on the Products page

    Scenario: The user can sccessfully access the description page of every listed item
        When Selecting an item from the Products list
        Then The user is taken to that product`s description page
        And Its description is the same on both the Products and the Product Details page

    Scenario: The user can add Products to their Cart
        When The user selects the the Add to cart button on any of the available Products
        Then The Add to cart button becomes the Remove button
        And The numeric indicator of the Cart icon updates accordingly






