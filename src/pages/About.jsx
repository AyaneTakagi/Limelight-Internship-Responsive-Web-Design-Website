// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Ayane</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Japanese software engineer currently studying Computer Science in Hungary 
          and building full-stack projects along the way.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education & Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            From Japan to Malaysia to Hungary, I've been shaping my path in tech across borders. 
            I'm now studying Computer Science in Hungary and working as a web development intern.  
            It's just the beginning — here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">


          <div className="relative border-l-4 border-blue-500 pl-6 mt-12">
            {experiences.map((experience, index) => (
              <div key={experience.company_name} className="relative mb-10">
                {/* タイムライン上のアイコン */}
                <div
                  className="absolute -left-[22px] top-1 w-10 h-10 rounded-full flex justify-center items-center"
                  style={{ backgroundColor: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>

                {/* タイトル・会社名 */}
                <div className="bg-white shadow-md p-4 rounded-md border-l-4" style={{ borderColor: experience.iconBg }}>
                  <h3 className="text-xl font-poppins font-semibold text-black">
                    {experience.title}
                  </h3>
                  <p className="text-base text-gray-600">{experience.company_name}</p>

                  {/* ポイントリスト */}
                  <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-2">
                    {experience.points.map((point, i) => (
                      <li key={`experience-point-${i}`} className="pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* 日付 */}
                  <p className="text-sm text-gray-400 mb-1">{experience.date}</p>
                </div>


              </div>
            ))}
          </div>



          {/* <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline> */}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default About