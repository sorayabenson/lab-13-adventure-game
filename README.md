# Choose Your Own Adventure 

## notes

    - Pages
        - Home
            - HTML
                - Name
                - Who you want to play as/character
                - Button to start to play

            - On submit store user data with form data
                - name
                - character/class
                - starting stats: hp and currency

            - Redirect to map

        - Map
            - HTML
                - Place for user stats
                - place for different quests (position with percentages top: %, left: %, to scale with the container. make sure the container is relative.)

            - If all quests complete redirect to results page
            - If hp is <= 0 redirect to results page
            - Else populate map with quests

                a.href = '../quest/?id=' + 

        - Quest
            - HTML
                - user stats
                - image
                - Paragraph
                -form that holds
                    - Radio buttons
                    - Button

            - Grab Id of the quest from the URL
                const params = new URLSearchParams(window.location.search);

                const questId = params.get('id')

                const quest = findById(questData, questId)

            - Use Id in findById to load the quest
            - Use quest to populate html
            - On Submit calculate user updated stats
                - Push new stats to localStorage\
                    user.hp = user.hp + choice.hp;

                    set user function to push to localStorage
                - Redirect back to map


        - Result
            - HTML
                - Paragraph to display custom ending that is determined by the user stats

                - If/else to claculate hp and currency based off of userdata to dynamicaly access the message array

                - Button to play again 
                    - clear localStorage function
                    - Redirect to home page

## //Data

    //- Take time to write the story
        //- Who are you
        //- Why are you doing this
        //- Where are you going
        //- What happens along the way
        //- What are we keeping track of?

    //- The overarching story
        //- Characters
        //- Points to keep track of
        //- Locations

    //- Locations
        //- What happens when we get there?
            //- The possibilities
            //- How they effect the points

        //- 1 array per location

    - Results 
        - How are they calculated?
        //- What is the message for each possible outcome.

    //- Look at Dani's metadata for a structure reference.
    //- Think of common descriptors.
    //- What are the choices and what are the consequences?

    //- Write the quest array

## Home

    - Start the story here.

    - HTML
        //- Opening paragraph with story.
        - Images?
        //- A form that takes in:
                //- Name
                //- Character
                //- Button to start to play

    //- CSS
        //- ghosts esthetic: modify for this project.
        - fix so it highlights seslection

    - JS
        - TDD function that takes FormData and pulls relevant information to add to user data, which represents the initial state.
        //- Use a completed: {} to track which quests have been complete.
        //- On submit store user data with form data
            //- name
            //- character
            //- populate starting stats: hp and currency
            //- push to localStorage
            //- Redirect to map

## Map

    - A map that links to the different quests

    - HTML 
        //- guiding paragraph
        //- place for user stats
        //- place for quests links (position with percentages top: %, left: %, to scale with the container. make sure the container is relative.)

    - CSS
        - Make it pretty

    //- JS
        //- If all quests complete redirect to results page
        //- If hp is <= 0 redirect to results page

        //- Else render map with quests
            //- write renderMapLocation function

            a.href = '../quest/?id=' + 

        //- update user stats
            //- write renderUserStats function

## Quest

    - A page for each quest to generate through findById

    - HTML
        //- place for user stats
        //- quest title
        //- quest paragraph
        - image (what do I want that to look like and where?)
        //- form that holds
            //- Radio buttons for choices
            //- Choices
                //- Name
                //- Image
                //- Description
        //- Submit Button
        //- back to map button hidden

    - CSS
        - Make it pretty

    - JS
        - Grab Id of the quest from the URL
            const params = new URLSearchParams(window.location.search);

            const questId = params.get('id')

            const quest = findById(questData, questID)

                - Redirect back to map if no id found.

        - Populate the page with the quest ID
            //- renderQuest function
            //- renderChoices function

        - On play store user data with form data
            - Add user selection to user data
            - push to localStorage
            - fill results div, hide previous content
            - show back to map button

        - Back to map button
            - Redirect to map

## Results

    - Results based on user data.

        - HTML
            - paragraph to display the custom ending that is determined by the user stats.
            - button to play again

        - CSS
            - make it pretty.

        -JS
            - Use if/else statements to claculate points based off of userdata to dynamicaly access the message array.

            - Button to play again 
                - clear localStorage function
                - Redirect to home page
