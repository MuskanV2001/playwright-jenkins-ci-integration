Feature: New user account creation

    Scenario: Navigation till SignUp Page
        Given User is on the Home page
        When User clicks on the Signup link in the top navigation bar
        Then User is navigated to the Login page

    Scenario: New user account creation flow
        Given User is on the Home page 
        When User clicks on the Signup link in the top navigation bar
        And User is navigated to the Login page
        And User enters Name under New User SignUp
        And User enters Email Address under New User SignUp
        And User clicks on SignUp button
        And User is navigated to the SignUp page
        And User enters the Acccount information details
        And User enters Address information details
        And User clicks createAccount button
