## Vanilla JS

- 외부 라이브러리나 프레임워크를 쓰지 않는 순수 JavaScript
- 라이브러리나 프레임워크를 사용하지 않기 때문에 빠르고 호환성이 좋다
- 하지만 라이브러리로 간단히 쓸수있는 코드가 길어지는 경우가 있다

```js
// jQuery
$('li').css('color', 'red');

// vanillda js
document.querySelectorAll('li').forEach((item) => (item.style.color = 'red'));
```

## [Florin Pop - 10 Projects with Vanilla JS](https://www.youtube.com/watch?v=dtKciwk_si4)

- 1.  Countdown Timer
  - Design: <https://uidesigndaily.com/posts/sketch-countdown-timer-day-876>
  - future date
  - timer
- 2.  Quiz App
  - Design: <https://uidesigndaily.com/posts/sketch-questionnaire-choice-submit-day-924>
  - questions from obj
  - select answer
  - at the end show score
- 3.  Recipe App
  - Design: <https://uidesigndaily.com/posts/sketch-recipe-app-food-mobile-day-615>
  - recipe info on click
  - fav recipe (w/ localStorage)
- 4.  Notes App
  - Design: <https://uidesigndaily.com/posts/photoshop-notes-widget-day-65>
  - CRUD note
  - markdown
  - localStorage
- 5.  Todo App
  - Design: <http://todomvc.com/examples/react/#/>
  - CRUD todos
  - localStorage
- 6.  Movies App
  - Design: <https://uidesigndaily.com/posts/photoshop-movie-app-mobile-day-193>
  - list of movies
  - movie info
  - fav movie
  - actors
- 7.  Github Profiles
  - Design: <https://uidesigndaily.com/posts/photoshop-profile-card-user-day-286>
  - search for user
  - get and show data
- 8.  Password Generator
  - canvas
  - size
  - color
- 9. Weather App
  - api : <https://www.metaweather.com/api/>
  - Design: <https://uidesigndaily.com/posts/photoshop-weather-prognosis-day-156>
  - enter location
  - get weather
  - have some icons?

## [Florin Pop - 10 JavaScript Projects in 1 Hour](https://www.youtube.com/watch?v=8GPPJpiLqHk)

- 1. Hamburger Button
  - button + hamburger icon
  - menu > li > a -> hidden
  - toggle on click
  - animation
- 2. Toast Notification
  - toast container floating
  - toast design
  - button
  - click show random toast message
- 3. Auto Write Text
  - text
  - index
  - show text based on index
  - increment index
- 4. Popup / Modal
  - button
  - click on button to activate popup
  - popup container
  - popup with text
  - close btn popup with click event
- 5. Purple Heart Rain
  - heart css
  - falling animation
  - create heart
  - add class
  - add it to body
  - interval
- 6. Background Changer
  - button w/ click
  - generate color
  - change bg color on click
- 7. Dark mode toggle
  - text
  - css for dark mode
  - toggle
  - toggle event
- 8. Carousel
  - 3/4 images
  - carousel container
  - images container
  - images with fixed width and height
  - index
  - automatic switch index and update container transform property
- 9. Sound Board
  - sounds (HAVE THESE READY SIR)
  - array with names
  - loop over array
  - create buttons w/ text
  - play sound on click
- 10. Zoom effect
  - image
  - track mouse movement
  - set transform origin on hover
