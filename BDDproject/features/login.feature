Feature: Login Feature
    Scenario: Valid Login
        Given user opens the application
        When user enters the valid credentials
        Then user should see dashboard
