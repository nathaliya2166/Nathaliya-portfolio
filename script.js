/* =====================================================
   SCROLL ANIMATIONS
===================================================== */

.section-heading,
.about-content,
.service-card,
.skill-card,
.project-card,
.education-card,
.contact-content {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.7s ease, transform 0.7s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

body {
    opacity: 0;
    transition: opacity 0.5s ease;
}

body.loaded {
    opacity: 1;
}


/* Active navigation link */

.nav-links a.active {
    color: var(--accent);
}
