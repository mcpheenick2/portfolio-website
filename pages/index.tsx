import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I&apos;m{' '}
                <span className="text-primary">Nick McPhee</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
                Computer Science & Software Engineering student with hands-on experience in backend development, 
                workflow automation, and API integration. I build systems that make complex processes simpler and smarter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary inline-flex items-center">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-80 h-80 relative overflow-hidden rounded-full shadow-xl">
                <Image
                  src="/nick-mcphee-photo.png"
                  alt="Nick McPhee - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the technologies and tools I use to build modern applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Java', icon: '☕' },
              { name: 'JavaScript', icon: '💛' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'SQL', icon: '🗃️' },
              { name: 'C', icon: '⚡' },
              { name: 'Git/GitLab', icon: '🔀' },
              { name: 'n8n', icon: '🔄' },
              { name: 'Postman', icon: '📮' },
              { name: 'Visual Studio Code', icon: '💻' },
              { name: 'IntelliJ IDEA', icon: '🧠' },
              { name: 'Figma', icon: '🎨' }
            ].map((tech) => (
              <div key={tech.name} className="flex flex-col items-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center mb-3 shadow-sm group-hover:shadow-md transition-shadow">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop"
                  alt="Automated Phishing Email Triage System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-xs mr-2">Internship Project</span>
                  <span>July 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Automated Phishing Email Triage System</h3>
                <p className="text-gray-600 mb-4">
                  Developed an automated email triage workflow using n8n, integrating VirusTotal and URLScan.io APIs to scan and assess URLs from suspicious emails in a production environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">n8n</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">VirusTotal API</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">JavaScript</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
                  alt="Personal Portfolio Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-xs mr-2">Personal Project</span>
                  <span>July 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Portfolio Website (This Site)</h3>
                <p className="text-gray-600 mb-4">
                  A responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring modern design principles, optimized performance, and professional branding.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Tailwind CSS</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                  alt="Fines Management System For Hockey Club"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-xs mr-2">Personal Project</span>
                  <span>February 2023</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">&apos;Fines&apos; Management System For Hockey Club</h3>
                <p className="text-gray-600 mb-4">
                  Developed a Python application to track player fines using Object-Oriented Design principles, generating Excel spreadsheets for financial tracking and club activities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Python</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">OOP Design</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Excel Integration</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
