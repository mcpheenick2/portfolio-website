import Layout from '@/components/Layout'
import ProjectCard from '@/components/ProjectCard'
import Link from 'next/link'

// Real projects from Nick's resume - sorted by date (most recent first)
const projects = [
  {
    id: 1,
    title: 'Automated Phishing Email Triage System',
    description: 'Developed an automated email triage workflow using n8n, incorporating JavaScript code blocks and custom logic. Integrated VirusTotal and URLScan.io APIs via REST (GET/POST) to scan and assess URLs extracted from suspicious emails. Designed the system to parse email content, extract links, perform API lookups, and compile a detailed security report. Implemented logic to evaluate API responses and assign a maliciousness verdict to each URL. Gained experience in automation, API integration, and workflow design in a production environment.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop',
    technologies: ['n8n', 'JavaScript', 'VirusTotal API', 'URLScan.io API', 'REST APIs', 'Email Processing', 'Security Analysis'],
    date: 'July 2025',
    type: 'Internship Project'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website (This Site)',
    description: 'A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase my projects, skills, and experience. Features modern design principles, optimized performance, and professional branding. Demonstrates proficiency in frontend development, responsive design, and modern web technologies.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Responsive Design', 'SVG'],
    date: 'July 2025',
    type: 'Personal Project'
  },
  {
    id: 3,
    title: 'Agile Project Management Software',
    description: 'Applied knowledge of Agile methodology to create a project management website tailored to support Agile practices. Expanded teamwork experience while enhancing proficiency in web development through the Python Flask framework. Applied usability principles such as user-centred design, learnability, and error prevention to maintain good UI and UX design. Researched Web Content Accessibility Guidelines (WCAG) during the design phase, implementing key measures to enhance accessibility.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Git', 'WCAG', 'Agile'],
    date: 'October 2023',
    type: 'University Group Project'
  },
  {
    id: 4,
    title: 'Sports Betting Arbitrage Calculator',
    description: 'Conceived and developed an arbitrage calculator utilizing Python, aimed at evaluating the profitability of sports betting scenarios across various platforms. Included functionality enabling the calculator to extract data from a Microsoft Excel table, comparing values to assess the possibility and profitability of arbitrage opportunities. Implemented comprehensive error testing methodologies and a refined user interface for enhanced usability.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    technologies: ['Python', 'Excel Integration', 'Data Analysis', 'GUI Design', 'Error Testing'],
    date: 'July 2023',
    type: 'Personal Project'
  },
  {
    id: 5,
    title: 'Fines Management System For Hockey Club',
    description: 'Developed a Python application to track the amount of money each player owed to the club each time they infringed upon a set of rules. Utilised python to generate a Microsoft excel spreadsheet, displaying current or previous owing amounts. Applied Object Oriented Design principles such as encapsulation, abstraction, and adherence to SOLID principles.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    technologies: ['Python', 'Excel Generation', 'OOP Design', 'SOLID Principles', 'Application Debugging'],
    date: 'February 2023',
    type: 'Personal Project'
  },
  {
    id: 6,
    title: 'Chemical Tank Monitoring System',
    description: 'Developed a chemical tank monitoring system with a small team using an Arduino Uno that controlled an 8-segment display, DC motor and various LEDs connected via a breadboard with a shift register. Utilized the PyMata Python library to connect the embedded system to a host computer using the Firmata protocol. Gained experience in embedded systems design and the interactions between hardware and software via GPIO pin control and serial communications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    technologies: ['Arduino', 'Python', 'PyMata', 'Embedded Systems', 'Hardware Integration', 'Firmata Protocol'],
    date: 'May 2022',
    type: 'University Group Project'
  }
]

export default function Projects() {
  return (
    <Layout title="Projects - Nick McPhee" description="Browse through my portfolio of projects and applications">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here&apos;s a collection of projects I&apos;ve worked on, ranging from web applications 
              to mobile apps. Each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in working together?
            </h2>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to discussing new opportunities and interesting projects.
            </p>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
