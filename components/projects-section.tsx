import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ProjectSection() {
  const projects = [
    {
      orderNumber: "01",
      field: "applications development",
      title: "Notema",
      description: "A sophisticated note-taking and management system designed for students and professionals. Features include real-time collaboration, markdown support, smart categorization, and end-to-end encryption. Built with a modern tech stack ensuring high performance and security.",
      image: "https://picsum.photos/640/400",
      github: "https://github.com/CSSOT/notema",
      demo: "https://notema.io.vn",
      tags: ["ReactJS", "SlimPHP", "Tailwind CSS", "MySQL", "WebSocket", "Redux"]
    },
    {
      orderNumber: "02",
      field: "artificial intelligence",
      title: "athStock",
      description: "An advanced stock analysis platform leveraging artificial intelligence to provide real-time market insights. Integrates natural language processing for sentiment analysis of financial news, technical analysis tools, and machine learning models for price prediction. Features include real-time data visualization, automated trading signals, and personalized portfolio recommendations.",
      image: "https://picsum.photos/640/400",
      github: "https://github.com/CSSOT/athStock",
      demo: "https://athstock.io.vn",
      tags: ["FastAPI", "ReactJS", "WebSocket", "VNStock", "NLP", "TensorFlow", "PostgreSQL"]
    },
    {
      orderNumber: "03",
      field: "applications development",
      title: "SaiGon Figure",
      description: "A comprehensive e-commerce platform specialized in anime figure collecting and trading. Features include real-time inventory management, advanced search with filtering, secure payment integration, and a community forum. The platform also offers pre-order management, authenticity verification, and a recommendation system based on user preferences.",
      image: "https://picsum.photos/640/400",
      github: "https://github.com/CSSOT/saigon-figure",
      demo: "https://saigonfigure.io.vn",
      tags: ["ReactJS", "ExpressJS", "MongoDB", "JavaScript", "Redux", "Stripe", "AWS"]
    },
    {
      orderNumber: "04",
      field: "applications development",
      title: "Fb58",
      description: "A modern web platform designed for seamless football pitch booking and management. It allows users to browse available time slots, book pitches in real-time, and receive instant booking confirmations. The system includes a comprehensive admin dashboard that supports pitch schedule management, revenue tracking, user analytics, and customer service tools.",
      image: "https://picsum.photos/640/400",
      github: "https://github.com/CSSOT/fb58",
      demo: "https://fb58.io.vn",
      tags: ["ReactJS", "ExpressJS", "MongoDB", "JavaScript", "Redux", "Stripe", "AWS"]
    }

  ]

  return (
    <section className="relative pb-32 overflow-hidden min-h-screen">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-start justify-center w-full h-full">
        <div className="flex flex-col gap-32 w-full space-y-6 max-w-7xl">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex items-center gap-16 animate-fade-in-up animation-delay-500 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } max-w-7xl`}
            >
              {/* Project Image */}
              <div className="w-1/2 flex justify-center items-center">
                <div className="w-[640px] h-[400px] relative rounded-lg overflow-hidden shadow-xl border border-gray-200/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-1/2 space-y-6">
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold text-gray-300">{project.orderNumber}</h1>
                  <h2 className="font-bold text-gray-500/70 tracking-wider mt-10">{project.field.toUpperCase()}</h2>
                  <h3 className="text-4xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-md tracking-tighter">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center pt-4">
                  {project.demo && (
                  <Link
                    href={project.demo}
                    className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:text-blue-600 transition-colors duration-200"
                  >
                    Watch demo
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200 animate-bounce-x" />
                  </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors"
          >
            View all projects
            <span aria-hidden="true">→</span>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
