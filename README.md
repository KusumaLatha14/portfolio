# Portfolio Website

A professional and responsive portfolio website template built with HTML, CSS, and JavaScript to showcase your skills, projects, and professional information.






## Features

- **Responsive Design**: Adapts seamlessly to all screen sizes and devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive Navigation**: Smooth scrolling and mobile-friendly navigation
- **Project Filtering**: Filter projects by category
- **Animated Elements**:
  - Scroll animations
  - Typing effect in hero section
  - Skill progress bars
- **Contact Form**: With validation and submission handling
- **Project Lightbox**: View project images in a modal/lightbox
- **Performance Optimized**: Fast loading and smooth performance

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   └── responsive.css  # Media queries for responsiveness
│   ├── js/
│   │   └── script.js       # Main JavaScript file
│   ├── img/                # Images folder
│   │   ├── projects/       # Project images
│   │   ├── logo.png        # Your logo
│   │   └── profile.jpg     # Profile picture
│   └── fonts/              # Custom fonts (if any)
├── favicon.ico             # Favicon
└── README.md               # This file
```

## Getting Started

### Prerequisites

- A code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript
- A web browser

### Installation

1. Clone this repository or download the ZIP file
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Open the project folder in your code editor

3. Open `index.html` in your browser to view the site




## Customization Guide

### 1. Personal Information

Update the following in `index.html`:

- Name, title, and bio in the hero section
- About me section with your background and skills
- Contact information
- Social media links
- Resume download link

### 2. Projects

In the projects section of `index.html`:

1. Add your projects within the `.project-container` element
2. For each project, use the following structure:

```html
<div class="project-item" data-category="web">
    <div class="project-img">
        <img src="assets/img/projects/project1.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Short project description goes here.</p>
        <div class="project-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    </div>
</div>
```

3. Update the `data-category` attribute to match your filter categories

### 3. Skills

In the skills section:

1. Update the skill names and percentages:

```html
<div class="skill">
    <div class="skill-name">HTML & CSS</div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

2. The `data-progress` attribute controls the progress bar width

### 4. Navigation

Update the navigation links in the header to match your sections:

```html
<nav class="navbar">
    <a href="#" class="logo">YourName</a>
    <ul class="nav-menu">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
    </ul>
    <!-- Mobile menu button -->
    <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</nav>
```

### 5. Styling

#### Colors

Edit the CSS variables in `style.css` to change the color scheme:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --dark-color: #121212;
    --light-color: #f8f9fa;
    --background-light: #ffffff;
    --background-dark: #0f0f0f;
    --text-light: #ffffff;
    --text-dark: #333333;
    /* Add more custom colors as needed */
}

/* Dark mode variables */
body.dark-mode {
    --background-color: var(--background-dark);
    --text-color: var(--text-light);
    /* Other dark mode specific variables */
}
```

#### Fonts

To change fonts, update the font-family in `style.css`:

```css
:root {
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Open Sans', sans-serif;
}
```

Also update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
```

### 6. JavaScript Customization

#### Typing Effect

In `script.js`, find the `initTypingEffect` function and update the phrases:

```javascript
const phrases = typingElement.getAttribute('data-phrases')?.split(',') || 
               ['Developer', 'Designer', 'Freelancer'];
```

Or in HTML:

```html
<span class="typing-text" data-phrases="Web Developer,UI/UX Designer,Freelancer"></span>
```

#### Project Filters

Update the filter buttons in `index.html` to match your project categories:

```html
<div class="filter-buttons">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="web">Web</button>
    <button class="filter-btn" data-filter="app">App</button>
    <button class="filter-btn" data-filter="design">Design</button>
</div>
```

Make sure your project items have matching `data-category` attributes.

## Adding Animations

The website uses the Intersection Observer API for scroll animations. To add an animated element:

1. Add the `animate-on-scroll` class to any element you want to animate
2. Optionally add a specific animation class:

```html
<div class="about-image animate-on-scroll fade-in-right">
    <img src="assets/img/profile.jpg" alt="Your Name">
</div>
```

Available animation classes in CSS:
- `fade-in`
- `fade-in-up`
- `fade-in-down`
- `fade-in-left`
- `fade-in-right`
- `zoom-in`

## Contact Form Setup

To make the contact form functional:

1. Create a server-side script to handle form submissions (PHP, Node.js, etc.)
2. Update the form action in `index.html`:

```html
<form id="contact-form" action="your-handler-script.php" method="POST">
```

3. Modify the `initContactForm` function in `script.js` to submit the form to your backend

## Browser Support

This template works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Dependencies

This project intentionally has minimal dependencies:
- No jQuery required
- No external JavaScript libraries
- Uses Google Fonts for typography
- Optionally uses Font Awesome for icons

## Performance Optimization

For best performance:
- Compress all images before uploading
- Minify CSS and JavaScript files for production
- Use a CDN for faster content delivery
- Consider lazy loading for project images

## License

This project is licensed under the MIT License - see the LICENSE file for details.



## Author

Your Name - Modala Kusuma Latha

## Support

If you have any questions or need help customizing this template, feel free to reach out:

- Email: kusumalatha0414@gmail.com
-Contact: 8121819215
