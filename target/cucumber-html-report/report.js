$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/bhupe/Morrisons/src/test/Resources/search.feature");
formatter.feature({
  "line": 1,
  "name": "User want to do grocery shopping",
  "description": "",
  "id": "user-want-to-do-grocery-shopping",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Grocery Shopping",
  "description": "",
  "id": "user-want-to-do-grocery-shopping;grocery-shopping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for the \"\u003cProducts\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select the required product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should put selected items in baskets.",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "user-want-to-do-grocery-shopping;grocery-shopping;",
  "rows": [
    {
      "cells": [
        "Products"
      ],
      "line": 10,
      "id": "user-want-to-do-grocery-shopping;grocery-shopping;;1"
    },
    {
      "cells": [
        "Milk"
      ],
      "line": 11,
      "id": "user-want-to-do-grocery-shopping;grocery-shopping;;2"
    },
    {
      "cells": [
        "Butter"
      ],
      "line": 12,
      "id": "user-want-to-do-grocery-shopping;grocery-shopping;;3"
    },
    {
      "cells": [
        "Bread"
      ],
      "line": 13,
      "id": "user-want-to-do-grocery-shopping;grocery-shopping;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9619422300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Grocery Shopping",
  "description": "",
  "id": "user-want-to-do-grocery-shopping;grocery-shopping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for the \"Milk\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select the required product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should put selected items in baskets.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefProducts.user_is_on_homepage()"
});
formatter.result({
  "duration": 100627000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Milk",
      "offset": 21
    }
  ],
  "location": "StepDefProducts.user_search_for_the(String)"
});
formatter.result({
  "duration": 3346706000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.select_the_required_product()"
});
formatter.result({
  "duration": 1076151500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.user_should_put_selected_items_in_baskets()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.before({
  "duration": 8073793400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Grocery Shopping",
  "description": "",
  "id": "user-want-to-do-grocery-shopping;grocery-shopping;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for the \"Butter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select the required product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should put selected items in baskets.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefProducts.user_is_on_homepage()"
});
formatter.result({
  "duration": 11302800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Butter",
      "offset": 21
    }
  ],
  "location": "StepDefProducts.user_search_for_the(String)"
});
formatter.result({
  "duration": 3291158300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.select_the_required_product()"
});
formatter.result({
  "duration": 871253900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.user_should_put_selected_items_in_baskets()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.before({
  "duration": 8839240600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Grocery Shopping",
  "description": "",
  "id": "user-want-to-do-grocery-shopping;grocery-shopping;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User search for the \"Bread\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select the required product",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User should put selected items in baskets.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefProducts.user_is_on_homepage()"
});
formatter.result({
  "duration": 5056000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bread",
      "offset": 21
    }
  ],
  "location": "StepDefProducts.user_search_for_the(String)"
});
formatter.result({
  "duration": 2970345400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.select_the_required_product()"
});
formatter.result({
  "duration": 721933400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefProducts.user_should_put_selected_items_in_baskets()"
});
formatter.result({
  "duration": 19300,
  "status": "passed"
});
});