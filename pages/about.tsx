import Layout from '@/components/Layout'
import Image from 'next/image'

export default function About() {
  return (
    <Layout title="About - Nick McPhee" description="Learn more about me and my journey as a software engineering student">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              About Me
            </h1>
            
            {/* Profile image - centered and prominent */}
            <div className="flex justify-center mb-8">
              <div className="w-48 h-48 md:w-64 md:h-64 relative overflow-hidden rounded-full shadow-lg">
                <Image
                  src="/nick-mcphee-photo.png"
                  alt="Nick McPhee - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text content - full width for better readability */}
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600">
              <p>
                I'm Nick McPhee — a Computer Science and Software Engineering student with a strong foundation in backend development, automation, and real-world problem solving. I've worked part-time in tech roles alongside my studies, where I've built workflow automation systems using tools like <strong>n8n</strong>, integrated APIs such as <strong>VirusTotal</strong> and <strong>URLScan</strong>, and used AI tools to enhance developer productivity and decision-making.
              </p>
              
              <p>
                My technical toolkit includes experience with languages like <strong>Python, Java, JavaScript, TypeScript</strong>, and <strong>SQL</strong>, as well as exposure to lower-level programming in <strong>Assembly</strong> and <strong>C</strong>. I've worked with a range of tools from <strong>Visual Studio Code</strong> and <strong>IntelliJ</strong>, to <strong>Postman</strong>, <strong>Git</strong>, <strong>Figma</strong>, and <strong>Oracle SQL</strong>. I'm comfortable managing databases, developing in Agile environments, and creating efficient, maintainable solutions from the ground up.
              </p>
              
              <p>
                Outside of formal coursework, I'm especially interested in <strong>backend systems, workflow automation, and the integration of large language models into real-world tooling</strong>. I believe the best software blends technical depth with real usability — and I enjoy building systems that make complex processes simpler and smarter.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills & Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Python & Flask</li>
                  <li>• Java</li>
                  <li>• JavaScript & TypeScript</li>
                  <li>• C & Assembly (MIPS)</li>
                  <li>• SQL & Database Design</li>
                  <li>• HTML & CSS</li>
                  <li>• MATLAB & Mathematica</li>
                  <li>• Haskell</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Development Tools</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Git/GitLab Version Control</li>
                  <li>• Visual Studio Code</li>
                  <li>• IntelliJ IDEA</li>
                  <li>• Oracle Database Designer</li>
                  <li>• Figma Interface Designer</li>
                  <li>• Microsoft Office Suite</li>
                  <li>• Cursor IDE</li>
                  <li>• Logisim</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Skills</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Embedded Systems (Arduino)</li>
                  <li>• Algorithms & Data Structures</li>
                  <li>• Agile Development</li>
                  <li>• Object-Oriented Design</li>
                  <li>• WCAG Accessibility Guidelines</li>
                  <li>• Database Management</li>
                  <li>• Hardware-Software Integration</li>
                  <li>• Workplace Safety Practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
