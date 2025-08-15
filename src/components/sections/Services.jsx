import React from "react"; 
import { Code, Palette, Smartphone, Brain } from "lucide-react";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Designing and developing modern, high-performance websites with seamless user experiences, powered by cutting-edge web technologies.",
    icon: "Code",
    features: [
      "React.js for dynamic and responsive interfaces",
      "Python/Django for secure and scalable backends",
      "Fully responsive and SEO-optimized"
    ]
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps that run seamlessly on Android and iOS.",
    icon: "Smartphone",
    features: [
      "React Native Development",
      "Offline Functionality",
      "Push Notifications and Reat-Time Updates"
    ]
  },
  {
    id: 3,
    title: "IT Project Managemnt",
    description: "Efficiently planning, executing, and delivering technology projects on time and within scope, ensuring alignment with business goals.",
    icon: "Palette",
    features: [
      "Project Planning and Scheduling",
      "Agile and Waterfall Methodologies",
      "Risk Management and Quality Assurance"
    ]
  },
  {
    id: 4,
    title: "AI and Project Consulting",
    description: "Applying IBM-certified expertise to integrate AI technologies and Agile methodologies for optimized project outcomes.",
    icon: "Brain",
    features: [
      "AI-Powered Solutions",
      "Agile Project Planning",
      "Cybersecurity Best Practices"
    ]
  }
];

const Services = () => {
  const getIcon = (iconName) => {
    const icons = {
      Code: Code,
      Palette: Palette,
      Smartphone: Smartphone,
      Brain: Brain
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent size={40} /> : <Code size={40} />;
  };

  return (
    <div className="services-section">
      <div className="services-content">
        <h1 className="section-title">SERVICES</h1>
        <div className="title-underline"></div>
        
        <p className="services-intro">
          I deliver professional 
          development services that 
          blend technical expertise 
          with strategic problem-solving.
          My focus is on creating innovative, secure and 
          scalable digital solutions designed to meet your unique goals and drive measurable results.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card hover-lift transition-all">
              <div className="service-icon">
                {getIcon(service.icon)}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>What's Included:</h4>
                <ul>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <button className="service-cta">Get Started</button>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h2>My Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery and Planning</h3>
              <p>Understanding your requirements and defining the scope of work</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Project Planning & Coordination</h3>
              <p>Defining milestones, allocating resources and establishing timelines for smooth execution</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Building solutions using clean, maintainable code</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Testing & Deployment</h3>
              <p>Ensuring quality, performance and a smooth launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
