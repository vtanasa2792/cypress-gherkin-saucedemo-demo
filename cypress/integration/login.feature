Feature: Login

    Basic login functionality.

    Background: The user is on the login page
        Given The user is on the login page

    Scenario: The user can successfully log in using valid credentials
        When The user inserts the username "standard_user"
        And Inserts the password "secret_sauce"
        And Selects the Login button
        Then The user is taken to the "Products" page

    Scenario Outline: An appropriate error message is displayed when logging in with invalid credentials: '<username>' + '<password>'
        When The user inserts the username <username>
        And Inserts the password <password>
        And Selects the Login button
        Then The <errorMessage> error is displayed

        Examples:
            | username              | password         | errorMessage                                                                |
            | 'locked_out_user'     | 'secret_sauce'   | 'Epic sadface: Sorry, this user has been locked out.'                       |
            | 'non_registered_user' | 'dummy_password' | 'Epic sadface: Username and password do not match any user in this service' |
            | '{backspace}'         | 'dummy_password' | 'Epic sadface: Username is required'                                        |
            | 'just_the_username'   | '{backspace}'    | 'Epic sadface: Password is required'                                        |



