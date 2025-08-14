import { Link } from "react-router-dom"
import { certificates } from "../constants"
import { arrow } from "../assets/icons"
import CTA from "../components/CTA"

const Certificates = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Certifications Journey</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A curated collection of certifications I have earned through dedication, continuous learning, 
          and hands-on practice in technology and development.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {certificates.map((certificate) => (
          <div className="lg:w-[400px] w-full" key={certificate.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${certificate.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={certificate.iconUrl} alt="Project Icon" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {certificate.name}
              </h4>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  )
}

export default Certificates