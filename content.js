// Website Content Configuration
// Edit this file to change any text, titles, or content on the website

const siteContent = {
    // Company Information
    company: {
        name: "Agrolytic",
        tagline: "Professional B2B IT Software Solutions",
        description: "Agrolytic creates cutting-edge software solutions designed specifically for B2B IT companies. We deliver scalable, secure, and innovative technology that drives business growth."
    },

    // Navigation Menu
    navigation: {
        home: "Home",
        credentials: "Credentials", 
        access: "Access",
        contact: "Contact"
    },

    // Hero Section
    hero: {
        title: "Professional B2B IT Software Solutions",
        subtitle: "Agrolytic creates cutting-edge software solutions designed specifically for B2B IT companies. We deliver scalable, secure, and innovative technology that drives business growth.",
        features: [
            { icon: "🚀", text: "Scalable Solutions" },
            { icon: "🔐", text: "Enterprise Security" },
            { icon: "⚡", text: "High Performance" }
        ],
        ctaButton: "Explore Our Expertise"
    },

    // Trust & Credentials Section
    trust: {
        title: "Trust & Credentials",
        subtitle: "Our certified expertise and industry partnerships ensure the highest standards of quality and security.",
        
        // Team Certifications
        teamCertifications: {
            title: "Team Certifications",
            items: [
                { badge: "AWS", title: "AWS Certified Solutions Architect" },
                { badge: "MS", title: "Microsoft Azure Expert" },
                { badge: "GCP", title: "Google Cloud Professional" },
                { badge: "SEC", title: "Certified Information Security Manager" }
            ]
        },

        // Company Standards
        companyStandards: {
            title: "Company Standards",
            items: [
                { badge: "ISO", title: "ISO 27001 Information Security" },
                { badge: "SOC", title: "SOC 2 Type II Compliance" },
                { badge: "PCI", title: "PCI DSS Compliant" },
                { badge: "GDPR", title: "GDPR Compliant Operations" }
            ]
        },

        // Statistics
        stats: {
            title: "Experience & Expertise",
            items: [
                { number: "10+", label: "Years Experience" },
                { number: "500+", label: "Projects Delivered" },
                { number: "50+", label: "Enterprise Clients" },
                { number: "99.9%", label: "Uptime SLA" }
            ]
        }
    },

    // Access Section
    access: {
        title: "Access Our Repository",
        subtitle: "Review our open-source contributions and technical implementations.",
        
        // Terms and Conditions
        terms: {
            title: "Terms & Conditions",
            content: {
                header: "Access Agreement",
                intro: "By accessing our repository, you agree to the following terms:",
                clauses: [
                    "The code and documentation are provided for evaluation purposes only",
                    "You will not redistribute, modify, or use the code for commercial purposes without explicit written permission",
                    "All intellectual property rights remain with Agrolytic",
                    "You acknowledge that the code is provided \"as-is\" without warranties",
                    "You will not attempt to reverse engineer proprietary algorithms",
                    "Access is granted for a limited time and may be revoked at any time",
                    "You agree to provide feedback and report any security vulnerabilities discovered",
                    "Usage analytics may be collected for improvement purposes"
                ],
                confidentiality: "Any proprietary information accessed must be kept confidential and not shared with third parties.",
                compliance: "You agree to comply with all applicable laws and regulations in your jurisdiction.",
                disclaimer: "If you do not agree with these terms, please do not proceed with accessing the repository."
            }
        },
        
        consentText: "I have read and agree to the terms and conditions above",
        accessButton: "Access Repository",
        
        // Repository URL (you'll change this later)
        repositoryUrl: "https://github.com/your-username/your-repo"
    },

    // Contact Section
    contact: {
        title: "Contact Us",
        subtitle: "Ready to discuss your project? Get in touch with our team.",
        
        // Contact Information
        info: {
            email: {
                icon: "📧",
                title: "Email",
                details: "contact@agrolytic.com"
            },
            phone: {
                icon: "📞", 
                title: "Phone",
                details: "+1 (555) 123-4567"
            },
            office: {
                icon: "🏢",
                title: "Office", 
                details: "123 Tech Street<br>San Francisco, CA 94105"
            }
        },

        // Form Configuration
        form: {
            fields: {
                name: {
                    label: "Full Name *",
                    placeholder: "",
                    required: true
                },
                email: {
                    label: "Email Address *", 
                    placeholder: "",
                    required: true
                },
                company: {
                    label: "Company",
                    placeholder: "",
                    required: false
                },
                subject: {
                    label: "Subject *",
                    options: [
                        { value: "", text: "Select a subject" },
                        { value: "general", text: "General Inquiry" },
                        { value: "project", text: "Project Discussion" },
                        { value: "partnership", text: "Partnership" },
                        { value: "support", text: "Technical Support" },
                        { value: "other", text: "Other" }
                    ],
                    required: true
                },
                message: {
                    label: "Message *",
                    placeholder: "Tell us about your project or inquiry...",
                    rows: 5,
                    required: true
                }
            },
            submitButton: "Send Message",
            successMessage: "Thank you for your message! We'll get back to you soon.",
            errorMessages: {
                name: "Name must be at least 2 characters long",
                email: "Please enter a valid email address", 
                subject: "Please select a subject",
                message: "Message must be at least 10 characters long"
            }
        }
    },

    // Footer
    footer: {
        company: "Agrolytic",
        tagline: "Professional B2B IT Software Solutions",
        copyright: "© 2025 Agrolytic. All rights reserved."
    },

    // Configuration
    config: {
        // Navigation settings
        navbarHeight: 70,
        
        // Animation settings
        animationDuration: 600,
        scrollOffset: 150,
        
        // Form validation
        minNameLength: 2,
        minMessageLength: 10,
        
        // Access section
        loadingDelay: 1000,
        
        // Colors (you can customize these)
        colors: {
            primary: "#2563eb",
            primaryHover: "#3b82f6", 
            secondary: "#64748b",
            accent: "#60a5fa",
            background: "#f8fafc",
            white: "#ffffff",
            dark: "#1e293b"
        }
    }
};

// Make content available globally
window.siteContent = siteContent;