import { Code, Trophy, Users, Lightbulb, BookOpen, Zap } from "lucide-react"
import AnimatedBackground from "./animated-background"

export default function ProjectSection() {
  const features = [
    {
      name: "Applications Development",
      description: "des",
      icon: Code,
    },
    {
      name: "Artificial Intelligence",
      description: "Des",
      icon: Lightbulb,
    }
  ]

  return (
    <section className="relative bg-gradient-to-br/// from-blue-50/// via-white/// to-indigo-50/// h-screen overflow-hidden flex items-center justify-start">
      {/* <AnimatedBackground/> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Main activities</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            CSSOT tập trung vào các lĩnh vực công nghệ tiên tiến và phát triển kỹ năng toàn diện cho thành viên
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">{feature.name}</dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
