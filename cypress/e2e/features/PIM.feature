Feature: Add update & delete New Employee PIM OrangeHRM

  Background:

        Given I in the landing page

    Scenario: Add new Employee    

        When I add new Employee
        Then Employee should appear in list


    Scenario: Updated new Employee information  
        When I update Employee information
        Then Employee information updated
    
    
    Scenario: Deleted new Employee  
        When I delete the new Employee
        Then deleted Employee will not appear in list