Feature: User want to do grocery shopping

  Scenario Outline: Grocery Shopping
    Given User is on homepage
    When User search for the "<Products>"
    And select the required product
    Then User should put selected items in baskets.

    Examples:
              |Products|
              |Milk    |
              |Butter  |
              |Bread   |