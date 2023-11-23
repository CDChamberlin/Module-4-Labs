# Module-4-Labs
A repository for Module 4 Labs

## Lab 1: Figma
    Create a Figma prototype for a social media application, where you can post your content and posts from other users are visible. Don’t just jump into Figma, try to follow the design procedure.

## Lab 2: Cards
1. Exercise 1 : Modify the addCard function from the previous slide so that you can pass content for the card dynamically.
2. Exercise 2 : Call addCard repeatedly so that your cards are automatically generated based on data from an array. This way you will create as many cards as you need to display all the data in the array.
3. Exercise 3 - the artist’s portfolio: Populate the page dynamically, by generating an artist profile card which includes cards representing the items in an artist's portfolio. 
*Extension*: make an array of artists, all with multiple portfolio items.

## Lab 3: Calculator
In this exercise you will need to create a calculator. 
Requirements:
1. The application should take 2 numbers, and  support 4 operations (+, / , x , -). 
2. You need to press the equals button to get 
the result displayed, and reset to clear it. 

*NOTE: Do not use the eval() function - it is a security risk and bypasses custom logic*

## Lab 4: Bootstrap
![Grid Layout](/assets/image.png)

Using only bootstrap elements, create this grid-based card layout, making it responsive.

4 cards per row on large screens (and above), 2 cards per row on medium screens, and 1 card per row on small (and below) screens.

    Optional Ext: Try and use what you’ve learnt on page 34 and use templates/javascript to populate your web page with your cards.

## Lab 5: Manage Data 
Part 1 - Use the following array to populate a web page which contains news. When the page loads up, it should display all of the news items in the array.

Use an interval function to read the array every 5 seconds. Every time the array is read, remove all news elements from the news container and fill it in with the latest news – so the page is always in sync with the data.

~~~JavaScript
 let news = 
    [{ id: 1, title: 'Election Results', content: "Newly elected minister..." },
     { id: 2, title: 'Sporting Success', content: "World Cup winners..." }, 
     { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }];
~~~

 To update the array, create a form in your page, which will include fields for the title of the news item and the content, and a button to submit this new news item.

There is a trick here. If you use a form and submit,
it will trigger a page reload. There are two ways of
solving this.
- You can research the prevent default behavior, which stops the form from doing a normal post on its submit event.
Some prevent default behavior links:
    1. W3Schools
    2. Mozilla MDN Web Docs
- You can simply create a form without using an
actual html `<form>`. Use text field inputs and a
button with onclick event instead.

## Lab 6: Fetch
Create a web page that will read the posts from JSON Placeholder using fetch. 
Similar to the previous templating labs, use bootstrap cards and grids to layout the returned post data from JSON Placeholder on the page.