import Layout from '@/components/Layout'
import { Mail, MapPin } from 'lucide-react'

export default function Contact() {

  return (
    <Layout title="Contact - Nick McPhee" description="Get in touch with me for opportunities and collaborations">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I&apos;m always interested in new opportunities, whether it&apos;s an internship, graduate position, 
              interesting project collaborations, or just a chat about technology. Feel free to reach out!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Email</p>
                    <a href="mailto:Mcpheenick2@gmail.com" className="text-primary hover:text-primary/80 transition-colors text-lg">
                      Mcpheenick2@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900">Location</p>
                    <p className="text-gray-600 text-lg">Australia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Find me online</h3>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://github.com/mcpheenick2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors text-lg"
                >
                  <span className="mr-2">🔗</span>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nicholas-mcphee-560372318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-primary transition-colors text-lg"
                >
                  <span className="mr-2">💼</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
