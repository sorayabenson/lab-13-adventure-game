# Choose Your Own Adventure 

## notes
    - Pages
        - Home
            - HTML
            - On submit store user data
            - Redirect to map

        - Map
            - HTML
                - Place for user stats
                - place for different quests
            - If all quests complete redirect to results page
            - If hp is <= 0 redirect to results page
            - Else populate map with quests

        - Quest
            - HTML
                - Paragraph
                - Radio buttons
                - Button
            - Grab Id of the quest from the URL
            - Use Id in findById to load the quest
            - Use quest to populate html
            - On Submit calculate user updated stats
                - Push new stats to localStorage\
                - Redirect back to map


        - Result
            - HTML
                - Paragraph to display custom ending that is determined by the user stats
                - Button to play again 
                    - clear localStorage function
                    - Redirect to home page

