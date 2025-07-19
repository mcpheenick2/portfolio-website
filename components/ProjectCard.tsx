import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  date: string
  type: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="bg-gray-200 px-2 py-1 rounded-full text-xs mr-2">
            {project.type}
          </span>
          <span>{project.date}</span>
        </div>
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5 mr-1" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5 mr-1" />
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
