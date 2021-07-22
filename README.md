# Simple Redbubble Clone

This is a project that I made in order to practice my skills so I decided to copy the interface of Redbubble, an e-commerce webpage where you can buy many products made community artists.

## Components

### **Navbar**

It has flexbox for the responsiveness, media queries for smaller devices, navigation buttons with visual hierarchy and custom buttons with font awesome icons pack.

### **Categories Selector**

A simple component that contains multiple categories with it own dropdowns that display multiple choices for the user

### **Promo Header**

This is a component that works as the first thing that the users see in the webpage. It can be used to display the featured promo at the moment.

### **Product Range**

I made this component with grid and was my first time using it. In this component use can choose where to shop different type of products.

### **Carousel Component**

This is a reusable component that receives as props the children elements that will be displayed in the carousel, the height of the carousel and the gaps that will be in between the columns.
This component uses useRef and useEffect to control the movement of the carousel.

### **Featured Products and Products Design for user**

Both of this component shows the current featured products on the and the products that has designs that probably would like to the user in the webpage and display them in the Carousel Component. I have used the calc() function on the css of this component in order to make appear 5 columns with same widths. The Featured products uses a div as a column to contain 2 cards per column and the designs one only uses the Product Card Component.

```css
/* The 16 is the gap in between columns.*/
min-width: calc(((100% + 16px) / 5) - 16px);
width: calc(((100% + 16px) / 5) - 16px);
```

### **Product Card**

I've created this re-usable component for every product. And I have use `text-overflow, white-space, overflow` to truncate the name of each products.

```css
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
```

### **Featured Artists**

This component shows artists of the webpage and display them in the Carousel component that uses the ArtistCard component for every artist displayed.

### **Artist Card**

This component displays a background of any design of the artist, a profile picture of the artist and its name.

### **Shop Fan Art**

This component has a little navbar with 5 buttons when clicked change the carousel in function of the saga that every button displays. Uses the Carousel component and the Product Card component.

### **Footer**

Finally the footer components display all the information that should be in a footer: email registration for news and sales form, policies, info links and copyright.
