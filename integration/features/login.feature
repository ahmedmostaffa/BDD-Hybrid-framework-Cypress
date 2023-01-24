Feature: As a user I want to login with username and password.

    Scenario Outline: user login with valid credentials
        Given user open swgaLabs login page
        When user enter "<username>" and "<password>"
        Then error message will be displayed
        Examples:
            | username      | password     |
            | standard_user | secret_sauce |
            | problem_user  | secret_sauce |