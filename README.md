# code-quiz

## Intro
### This application is not currently fully functional. After successfully getting the quiz function to work, I have run out of time for displaying the scores stored in the local storage (which are currently storing). This has definitely been a challenging assignment but I plan to return to this and continue to problem solve getting the score storage working!

## Application
### Fist, I began with my HTML setup (along with the small amount of CSS used) in order to set up a framework for the JavaScript. I created my button elements, form inputs, and the overall setup of the quiz just without any of the content. Here I alos established my headers and most of my static text elements.

### In beginning my JavaScript, I first created an array that holds all the quiz questions. Then I created my timer element (which took me quite a bit of time to get up and running!) which begins when the evet listener is captured for the start button![Screen Shot 2022-03-06 at 10 10 15 AM](https://user-images.githubusercontent.com/96094719/156933550-052c91a2-20a7-4621-a0cb-5b7a08c60fac.png)
. The quiz begins with 75 seconds and the timer is also set to subtract 10 seconds for every incorrect answer. The remaining time is then factored in to the users final score (userScore + remaining) and is set to display on the final screen while hiding the actual timer itself. 

### Each question within the question array holds the options that will present themselves as clickable multiple choice buttons.![Screen Shot 2022-03-06 at 10 10 34 AM](https://user-images.githubusercontent.com/96094719/156933539-8b7b50db-54d5-47d4-87d7-4a3447c88490.png)
 The array is followed by the nextQuestion() function which contains a callback which allows when the answer is triggered on the current question, it will move on to the next part of the array. The checkAnswer() function logs the userChoice and uses an if statement to determine whether to add points to the userScore or subtract time from the running timer. This will also display if the user was correct or incorrect when moving on to the next question. 

### Finally, when the user arrives at the final page there is a space to input initials which will be saved to local storage.![Screen Shot 2022-03-06 at 10 10 48 AM](https://user-images.githubusercontent.com/96094719/156933529-4cbb506f-c695-4b96-bd1d-1319c0e078cc.png)
 I then have the beginnings of the functions to add the high score list to the final page and also allow the user to see high scores from the inital page of the game. Unfortunately I was unable to solve my issues with this before the due date, but am interested to come back and work through this on my own time.
