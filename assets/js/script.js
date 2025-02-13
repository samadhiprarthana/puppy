
  // Testimonials Data
  const testimonials = [
    { text: "Forever Puppies helped me find the perfect dog for my family. The team was so helpful and kind, and the adoption process was smooth and easy. We love our new puppy!", author: "Emily R." },
    { text: "We couldn't be happier with the puppy we adopted from Forever Puppies. He is healthy, happy, and a joy to have in our home.", author: "Mark T." },
    { text: "Adopting from Forever Puppies was the best decision! Our puppy is well-trained, healthy, and fits right into our family.", author: "Sarah L." },
    { text: "The process was seamless, and the staff was incredibly helpful. Our puppy brings so much joy to our home!", author: "David M." }
];

let currentTestimonial = 0;

function updateTestimonials() {
    const testimonialContainer = document.getElementById("testimonial-container");
    if (!testimonialContainer) {
        console.warn("Testimonial container not found.");
        return;
    }

    testimonialContainer.innerHTML = ""; // Clear previous testimonials

    // Display two testimonials at a time
    let testimonial1 = testimonials[currentTestimonial];
    let testimonial2 = testimonials[(currentTestimonial + 1) % testimonials.length]; // Get next testimonial

    let testimonialElement = `
        <div class="testimonial fade-in visible">
            <p>"${testimonial1.text}"</p>
            <h4>- ${testimonial1.author}</h4>
        </div>
        <div class="testimonial fade-in visible">
            <p>"${testimonial2.text}"</p>
            <h4>- ${testimonial2.author}</h4>
        </div>
    `;

    testimonialContainer.innerHTML = testimonialElement;
    currentTestimonial = (currentTestimonial + 2) % testimonials.length; // Move forward by 2
}

// Update testimonials every 5 seconds
updateTestimonials();
setInterval(updateTestimonials, 5000);

// FAQs Data
const faqs = [
    { question: "How do I adopt a puppy?", answer: "Simply visit our puppies page, choose your favorite puppy, and fill out the adoption form. We’ll guide you through the rest of the process!" },
    { question: "Are the puppies vaccinated?", answer: "Yes! All our puppies are vaccinated, dewormed, and thoroughly checked by a licensed vet before adoption." },
    { question: "Do you offer delivery services?", answer: "Yes, we offer safe and comfortable delivery options for your adopted puppy!" },
    { question: "What breeds are available?", answer: "We have a variety of breeds available. Visit our website to see the latest puppies!" }
];

function loadFAQs() {
    const faqContainer = document.getElementById("faq-container");
    if (!faqContainer) {
        console.warn("FAQ container not found.");
        return;
    }

    faqContainer.innerHTML = ""; // Clear previous FAQs

    faqs.forEach((faq) => {
        let faqElement = `
            <div class="faq-item fade-in">
                <h3>${faq.question}</h3>
                <p>${faq.answer}</p>
            </div>
        `;
        faqContainer.innerHTML += faqElement;
    });
}

loadFAQs();