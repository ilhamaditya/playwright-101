Feature: Login Feature
    @login
    Scenario: Login to OrangeHRM
        When I Visit the OrangeHRM login page
        And I enter username
        And I enter password
        And I click on login button
        Then I verify dashboard URL
