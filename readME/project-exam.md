#[Project Exam 1](https://cdn.discordapp.com/attachments/872021496938254376/968442625642352690/README.pdf)

##Brief
You have been tasked with creating a blog site. <br> 
You can choose the design and topics covered on the blog, <br>
but it should have at least the following pages:
* Home page
* About page 
* List of blog posts
* Blog post specific pages
* Contact page. <br>

**Note:** <br>
For those with pre-approved external projects, <br>
this brief should still be used as a rough guide to make sure you "tick enough boxes".


###Home Page
The home page should have a "latest posts" section which uses a <br>
carousel (slider) for users to click to view more posts. <br>

For example, by default the user can see four posts, <br>
then they can click an arrow on the right to view the next <br>
four posts, and click it again to view the next four posts. <br>

The user can also click back to view results they had previously seen. <br>
This must be implemented for desktop at least, <br>
but if you want a simpler layout for mobile, you can change it from being in a carousel.


###Blog Page
The blog posts page should show the first 10 blogs, <br>
and the user should click to view more
results which then show underneath the first 10 blogs.

###Blog Specific Page
The content of the blog specific page should be dynamically built using a <br>
query string parameter based on whatever link the user clicked. <br>
The title of the blog specific page should change based on the blog <br>
that has been clicked on e.g. “My Blog | An Article I Wrote”. <br>
If images on the blog post page are clicked, <br>
a modal should appear giving the user a bigger view of that image. <br>
Clicking outside the image should hide the modal

###Contact page
Create a contact us page, there should be 4 textboxes on this page. <br>
* Name (Should be more than 5 characters long)
* Email address (Must be a valid email address)
* Subject (Should be more than 15 characters long)
* Message content (Should be more than 25 characters long)

Please use JavaScript for validation, <br>
show error messages if the values in the textboxes do not meet the requirements.

###WordPress
The content for your website will be stored on a WordPress installation used as a Headless CMS. <br>
Itʼs important to note that we are only using WordPress to provide an API and add content for the blog. <br>
You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and <br>
making a call to the WordPress REST API to fetch the data.

**The project has two aspects:** <br>
* API from your WordPress installation
* Your website built with HTML, CSS and JavaScript (no frameworks are allowed)

You will need to add at least 12 blogs for your website. <br>
You can use lorem ipsum for paragraphs if you need, <br>
but headings, images etc. should all make sense.

##Level 1 Process
1. Decide on the theme for the blog youʼre going to make
2. Create a prototype of the website
3. Install WordPress on your web host and add the blogs on the admin panel.
4. Use a public GitHub repo for your files and deploy to Netlify
5. Build your website using HTML, CSS and JavaScript making a call to the WordPress
REST API to fetch your data.
6. Install Hotjar on your website. (Alternative: Use Maze.co or another similar tool.)
7. Ask users to test your website, and adjust based on their feedback and any insights
from Hotjar (or Maze.co).
8. Write a report documenting your project.
9. Submit your report as a PDF, and include a link to both your Netlify deployment and
your GitHub repo.

##Level 2 Process (optional)
1. You can try adding a sort, filter, or search to the blog posts page allowing users to find
the blog post more easily that theyʼre looking for.
2. Post the data from the contact form to WordPress so you have the details saved.
3. Allow users to submit comments on a blog post, and post this data to WordPress

##Checklist
* Mobile responsive and looks good on all screen sizes <br>
(not just one mobile screen and one desktop screen). <br>
Meta viewport in the head of the document.
* The HTML is neat and semantic, and the CSS is <br>
concise and styles aren't duplicated in media queries.
* Each page has a unique title, one unique h1, and meta description.
* Images are below 200kb and have alt text.
* The site looks good and there's a class in the navigation telling the user which page they're on.

##Checklist, cont.
* Text lines are kept short. Here's an example of how you can do <br> 
that using max-width https://codepen.io/noroff-education/pen/VwYpweQ
* The colours have good contrast, the text is easy to read and the site is easy for user's
to navigate.
* The report includes planning, and covers why decisions were made and how the
process was to create site

