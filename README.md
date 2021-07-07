# Simple Redbubble Clone

This is a project that I made in order to practice my skills so I decided to copy the interface of Redbubble, an e-commerce webpage where you can buy many products made community artists.

## Components

### **The Navbar**

It has flexbox for the responsiveness, media queries for smaller devices, navigation buttons with visual hierarchy and custom buttons with font awesome icons pack.

### **The Categories Selector**

A simple component that contains multiple categories with it own dropdowns that display multiple choices for the user

### **The Promo Header**

This is a component that works as the first thing that the users see in the webpage. It can be used to display the featured promo at the moment.

### **The Product Range**

I made this component with grid and was my first time using it. In this component use can choose where to shop different type of products.

### **The Featured Product Carousel**

This component shows the current featured products on the webpage in a carousel. I have used the calc() function on the css of this component in order to make appear 5 columns with same widths.

```css
min-width: calc(((100% + 16px) / 5) - 16px)
width: calc(((100% + 16px) / 5) - 16px)
```

### **Featured Card**

I've created this component in order to make a modular component for every featured product. And I have use `text-overflow, white-space, overflow` to truncate the name of each products.

```css
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
```
