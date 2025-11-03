// Skills Data
const skillsData = [
    {
        category: "Programming Languages",
        skills: ["JavaScript", "TypeScript", "Python", "ActionScript 3.0"]
    },
    {
        category: "Frontend Frameworks",
        skills: ["React", "Next.js", "Angular", "AngularJS", "GraphQL", "jQuery"]
    },
    {
        category: "CSS Frameworks",
        skills: ["Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
        category: "Mobile Development",
        skills: ["React Native", "iOS", "Android"]
    },
    {
        category: "State Management",
        skills: ["Redux", "RxJS", "React Query"]
    },
    {
        category: "Backend & APIs",
        skills: ["Node.js", "Express.js", "Restify", "Flask", "REST APIs"]
    },
    {
        category: "Databases",
        skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Neo4j", "MariaDB"]
    },
    {
        category: "AI/ML & Tools",
        skills: ["OpenAI", "Amazon Q", "Retell AI", "NLP", "LLM", "RAG", "Cursor", "Lovable"]
    },
    {
        category: "Cloud & DevOps",
        skills: ["AWS", "Lambda", "S3", "Step Functions", "Docker", "Terraform", "Jenkins"]
    },
    {
        category: "Testing",
        skills: ["Jest", "Enzyme", "React Testing Library", "TDD"]
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initThemeToggle();
    initSkills();
    initProjects();
    initTestimonials();
    initContactForm();
    initScrollAnimations();
});

// Navigation
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll with offset
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const navHeight = document.querySelector('.navbar').offsetHeight;
            
            window.scrollTo({
                top: targetSection.offsetTop - navHeight,
                behavior: 'smooth'
            });
        });
    });

    // Active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Skills Section
function initSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    skillsData.forEach(skillCategory => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        
        const title = document.createElement('h3');
        title.textContent = skillCategory.category;
        
        const skillTags = document.createElement('div');
        skillTags.className = 'skill-tags';
        
        skillCategory.skills.forEach(skill => {
            const tag = document.createElement('span');
            tag.className = 'skill-tag';
            tag.textContent = skill;
            skillTags.appendChild(tag);
        });
        
        skillCard.appendChild(title);
        skillCard.appendChild(skillTags);
        skillsGrid.appendChild(skillCard);
    });
}

// Projects Section
async function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    try {
        const response = await fetch('projects.json');
        const projects = await response.json();
        
        if (projects.length === 0) {
            projectsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        Projects coming soon! Check back later.
                    </p>
                </div>
            `;
            return;
        }
        
        projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        projectsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <p style="color: var(--text-secondary); font-size: 1.1rem;">
                    Projects section is being updated. Please check back soon!
                </p>
            </div>
        `;
    }
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const image = document.createElement('div');
    image.className = 'project-image';
    image.innerHTML = `<i class="fas fa-${project.icon || 'code'}"></i>`;
    
    const content = document.createElement('div');
    content.className = 'project-content';
    
    const title = document.createElement('h3');
    title.textContent = project.title;
    
    const description = document.createElement('p');
    description.textContent = project.description;
    
    const tags = document.createElement('div');
    tags.className = 'project-tags';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'project-tag';
        tag.textContent = tech;
        tags.appendChild(tag);
    });
    
    const links = document.createElement('div');
    links.className = 'project-links';
    
    if (project.github) {
        const githubLink = document.createElement('a');
        githubLink.href = project.github;
        githubLink.className = 'project-link';
        githubLink.target = '_blank';
        githubLink.innerHTML = '<i class="fab fa-github"></i> View Code';
        links.appendChild(githubLink);
    }
    
    if (project.demo) {
        const demoLink = document.createElement('a');
        demoLink.href = project.demo;
        demoLink.className = 'project-link';
        demoLink.target = '_blank';
        demoLink.innerHTML = '<i class="fas fa-external-link-alt"></i> Live Demo';
        links.appendChild(demoLink);
    }
    
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(tags);
    content.appendChild(links);
    
    card.appendChild(image);
    card.appendChild(content);
    
    return card;
}

// Testimonials Section
async function initTestimonials() {
    const testimonialsSlider = document.getElementById('testimonialsSlider');
    
    try {
        const response = await fetch('testimonials.json');
        const testimonials = await response.json();
        
        if (testimonials.length === 0) {
            testimonialsSlider.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        Client testimonials coming soon!
                    </p>
                </div>
            `;
            return;
        }
        
        testimonials.forEach(testimonial => {
            const card = createTestimonialCard(testimonial);
            testimonialsSlider.appendChild(card);
        });
    } catch (error) {
        testimonialsSlider.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <p style="color: var(--text-secondary); font-size: 1.1rem;">
                    Testimonials section is being updated. Please check back soon!
                </p>
            </div>
        `;
    }
}

function createTestimonialCard(testimonial) {
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    
    const quote = document.createElement('div');
    quote.className = 'testimonial-quote';
    quote.innerHTML = '<i class="fas fa-quote-left"></i>';
    
    const text = document.createElement('p');
    text.className = 'testimonial-text';
    text.textContent = testimonial.text;
    
    const author = document.createElement('div');
    author.className = 'testimonial-author';
    
    const avatar = document.createElement('div');
    avatar.className = 'testimonial-avatar';
    avatar.textContent = testimonial.name.charAt(0);
    
    const info = document.createElement('div');
    info.className = 'testimonial-info';
    
    const name = document.createElement('h4');
    
    // Add LinkedIn link if available
    if (testimonial.linkedin) {
        const nameLink = document.createElement('a');
        nameLink.href = testimonial.linkedin;
        nameLink.target = '_blank';
        nameLink.rel = 'noopener noreferrer';
        nameLink.textContent = testimonial.name;
        nameLink.style.color = 'var(--text-primary)';
        nameLink.style.textDecoration = 'none';
        nameLink.style.display = 'inline-flex';
        nameLink.style.alignItems = 'center';
        nameLink.style.gap = '0.5rem';
        nameLink.style.transition = 'color 0.3s ease';
        
        const linkedinIcon = document.createElement('i');
        linkedinIcon.className = 'fab fa-linkedin';
        linkedinIcon.style.color = '#0077b5';
        linkedinIcon.style.fontSize = '1rem';
        
        nameLink.appendChild(document.createTextNode(testimonial.name));
        nameLink.appendChild(linkedinIcon);
        
        nameLink.addEventListener('mouseenter', () => {
            nameLink.style.color = '#0077b5';
        });
        nameLink.addEventListener('mouseleave', () => {
            nameLink.style.color = 'var(--text-primary)';
        });
        
        name.appendChild(nameLink);
    } else {
        name.textContent = testimonial.name;
    }
    
    const position = document.createElement('p');
    position.textContent = `${testimonial.position}${testimonial.company ? ` at ${testimonial.company}` : ''}`;
    
    // Add project info if available
    if (testimonial.project || testimonial.duration) {
        const projectInfo = document.createElement('p');
        projectInfo.style.fontSize = '0.85rem';
        projectInfo.style.color = 'var(--text-secondary)';
        projectInfo.style.fontStyle = 'italic';
        projectInfo.style.marginTop = '0.25rem';
        
        const parts = [];
        if (testimonial.project) parts.push(testimonial.project);
        if (testimonial.duration) parts.push(testimonial.duration);
        projectInfo.textContent = parts.join(' • ');
        
        info.appendChild(name);
        info.appendChild(position);
        info.appendChild(projectInfo);
    } else {
        info.appendChild(name);
        info.appendChild(position);
    }
    
    author.appendChild(avatar);
    author.appendChild(info);
    
    card.appendChild(quote);
    card.appendChild(text);
    card.appendChild(author);
    
    return card;
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a backend service
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
        
        // You can integrate with services like:
        // - Formspree (https://formspree.io/)
        // - EmailJS (https://www.emailjs.com/)
        // - Netlify Forms
        // - AWS SES
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and timeline items
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .certification-card, .timeline-item, .testimonial-card'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}
