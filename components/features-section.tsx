import { Code, Trophy, Users, Lightbulb, BookOpen, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      name: "Thi đấu lập trình",
      description: "Tham gia các cuộc thi lập trình trong nước và quốc tế như ACM-ICPC, Codeforces, AtCoder.",
      icon: Trophy,
    },
    {
      name: "Hackathon",
      description: "Phát triển các sản phẩm công nghệ sáng tạo trong thời gian ngắn tại các hackathon lớn.",
      icon: Zap,
    },
    {
      name: "Phát triển Web",
      description: "Xây dựng các ứng dụng web hiện đại với React, Next.js, Node.js và các công nghệ mới nhất.",
      icon: Code,
    },
    {
      name: "Trí tuệ nhân tạo",
      description: "Nghiên cứu và phát triển các ứng dụng AI, Machine Learning, Deep Learning.",
      icon: Lightbulb,
    },
    {
      name: "Nghiên cứu khoa học",
      description: "Thực hiện các đề tài nghiên cứu khoa học sinh viên và xuất bản paper.",
      icon: BookOpen,
    },
    {
      name: "Cộng đồng",
      description: "Xây dựng cộng đồng lập trình viên mạnh mẽ, chia sẻ kiến thức và kinh nghiệm.",
      icon: Users,
    },
  ]

  return (
    <section className="py-24 bg-white h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hoạt động chính</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            CSSOT tập trung vào các lĩnh vực công nghệ tiên tiến và phát triển kỹ năng toàn diện cho thành viên
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
