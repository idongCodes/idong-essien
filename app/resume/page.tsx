"use client";

import Link from "next/link";
import { FaArrowLeft, FaBook, FaList, FaPen, FaDesktop, FaDownload } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans p-4 md:p-8 pt-24">
      
      {/* Navigation */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#58a6ff] hover:underline text-sm font-semibold"
        >
          <FaArrowLeft /> idong-essien / resume
        </Link>
      </div>

      <div className="max-w-5xl mx-auto border border-[#30363d] rounded-md bg-[#0d1117] overflow-hidden">
        
        {/* File Header */}
        <div className="bg-[#161b22] border-b border-[#30363d] p-3 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3 px-2">
            <div className="flex items-center gap-2 text-sm font-mono text-[#c9d1d9]">
                <FaBook className="text-gray-400" />
                <span className="font-semibold">Richard Essien</span>
                <span className="text-gray-500">/</span>
                <span>README.md</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs md:text-sm">
             <button className="px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors text-[#c9d1d9] font-medium hidden md:block">
                Edit
             </button>
             <button className="px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md hover:bg-[#30363d] transition-colors text-[#c9d1d9] font-medium flex items-center gap-2">
                <FaList /> Preview
             </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 prose prose-invert max-w-none prose-headings:border-b prose-headings:border-[#30363d] prose-headings:pb-2 prose-h1:text-3xl prose-h2:text-3xl prose-h3:text-2xl prose-headings:mt-12 prose-headings:mb-6 prose-p:my-4 prose-li:my-1 prose-a:text-[#58a6ff] prose-a:no-underline hover:prose-a:underline prose-li:marker:text-[#c9d1d9]">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12 not-prose border-b border-[#30363d] pb-8">
            <div>
                <h1 className="text-4xl font-bold text-white mb-2">Richard Essien</h1>
                <p className="text-xl text-gray-400 mb-2">Customer Service Pro with an innate curiousity for technology</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>📍 Worcester, MA</span>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 text-green-400 border border-green-800 text-xs font-semibold">
                    Open to Work
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 text-xs font-semibold">
                    Remote First
                 </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="group relative flex items-center text-3xl font-extrabold" id="professional-summary">
                <a href="#professional-summary" className="absolute -left-10 text-[#58a6ff] p-1">
                    <FaLink size={24} />
                </a>
                Professional Summary
            </h2>
            <p className="mt-4">
              Software Developer with a life-long curiosity for technology. I have experience working collaboratively in cross-functional team settings within Agile environments. Experience includes participation in every phase of SDLC (Software Development Lifecycles). I seek to find a home within a Start Up or an established team with a remote first, positive, optimistic, inclusive, and supportive culture - that is passionate about technology and people.
            </p>
            <ul>
              <li className="mt-4"><strong>Authorized to work in the US</strong> for any employer</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="group relative flex items-center text-3xl font-extrabold" id="work-experience">
                <a href="#work-experience" className="absolute -left-10 text-[#58a6ff] p-1">
                    <FaLink size={24} />
                </a>
                Work Experience
            </h2>

            <div className="mb-8 mt-8">
              <h3 className="text-2xl font-bold">Pharmacy Delivery Driver</h3>
              <p><strong>Symbria - Auburn, MA</strong> | <em>October 2025 to Present</em></p>
              <p>
                Managed end-to-end logistics for time-sensitive deliveries, ensuring compliance with strict operational deadlines and protocols. Utilized proprietary software and digital tools to process orders, manage inventory returns, and maintain accurate data records. Acted as a key liaison between clients and management, troubleshooting on-site issues to ensure system integrity and service continuity.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Executed complex logistical routes under tight deadlines, maintaining a 100% on-time delivery rate for critical assets.</li>
                <li>Ensured data integrity by meticulously verifying all orders against digital manifests and processing returns using internal inventory software.</li>
                <li>Provided on-site technical support, troubleshooting computer and peripheral issues to maintain seamless digital documentation.</li>
                <li>Communicated client feedback and escalated system issues to management, contributing to process and service improvements.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Customer Service Representative</h3>
              <p><strong>TransCore - Remote</strong> | <em>June 2025 to September 2025</em></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Handle customer inquiries via phone, perform account maintenance (address/vehicle changes, payments, etc.), and manage toll overcharges.</li>
                <li>Process/update customer information like expired credit cards, applications, and correspondence; assist with replenishment and balance thresholds.</li>
                <li>Prepare daily call reports, manage deposits, and work a rotating weekend schedule as needed.</li>
                <li>Adhere to call center performance metrics (call time, readiness), participate in quality assurance, and maintain professionalism with patrons and staff.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Customer Service Representative</h3>
              <p><strong>Partnership Employment - Remote</strong> | <em>September 2024 to June 2025</em></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Handle customer inquiries via phone, perform account maintenance (address/vehicle changes, payments, etc.), and manage toll overcharges.</li>
                <li>Process/update customer information like expired credit cards, applications, and correspondence; assist with replenishment and balance thresholds.</li>
                <li>Prepare daily call reports, manage deposits, and work a rotating weekend schedule as needed.</li>
                <li>Adhere to call center performance metrics (call time, readiness), participate in quality assurance, and maintain professionalism with patrons and staff.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Amazon Delivery Driver</h3>
              <p><strong>High Speed Deliveries - Worcester, MA</strong> | <em>April 2024 to August 2024</em></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Leveraged proprietary logistics software and handheld devices to optimize route efficiency, ensuring accurate tracking and timely delivery of high-volume packages.</li>
                <li>Utilized real-time GPS navigation and data tools to adapt to dynamic route changes, consistently meeting strict delivery windows and performance metrics.</li>
                <li>Maintained high safety and compliance standards by adhering to telematics monitoring systems, ensuring secure and reliable vehicle operation.</li>
                <li>Collaborated with dispatch and logistics teams through digital communication platforms to troubleshoot delivery exceptions and resolve customer issues on-site.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Customer Account Representative</h3>
              <p><strong>Career Karma - Remote</strong> | <em>February 2021 to January 2024</em></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Guided community members through the tech career landscape, providing data-driven insights on coding bootcamps and software engineering pathways to facilitate informed decision-making.</li>
                <li>Utilized CRM tools and digital communication platforms to manage mentorship relationships, helping users navigate enrollment processes for skills-based training programs.</li>
                <li>Conducted virtual coaching sessions to educate users on tech stack fundamentals, industry trends, and strategies for successfully completing intensive technical training.</li>
                <li>Connected users with digital resources and community support systems to enhance learning outcomes and drive successful transitions into technology careers.</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold">Inbound Customer Service Representative</h3>
              <p><strong>Protocol - Worcester, MA</strong> | <em>October 2010 to August 2011</em></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Managed high-volume inbound calls using telecommunications software, ensuring efficient resolution of customer inquiries and maintaining high service level agreements (SLAs).</li>
                <li>Utilized internal ticketing systems to document customer interactions, track issues, and escalate complex technical problems to appropriate support tiers.</li>
                <li>Leveraged CRM databases to access customer profiles and identify opportunities for upselling products based on user history and needs analysis.</li>
                <li>Collaborated with cross-functional teams to provide feedback on system usability and customer pain points, contributing to ongoing service optimization.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="group relative flex items-center text-3xl font-extrabold" id="education">
                <a href="#education" className="absolute -left-10 text-[#58a6ff] p-1">
                    <FaLink size={24} />
                </a>
                Education
            </h2>
            
            <div className="mb-8">
                <h4 className="text-lg font-bold text-white">Software Development + Computer Science (Apprenticeship)</h4>
                <p className="text-sm text-gray-400">Lambda School (Bloom Tech) - Remote | <em>January 2020 to February 2021</em></p>
            </div>
            
            <div className="mb-8">
                <h4 className="text-lg font-bold text-white">Computer Science - No Degree (Courses taken)</h4>
                <p className="text-sm text-gray-400">Fitchburg State University - Fitchburg, MA | <em>September 2010 to May 2015</em></p>
            </div>

            <div className="mb-8">
                <h4 className="text-lg font-bold text-white">Graphic, Multimedia and Web Design (Associate's Degree)</h4>
                <p className="text-sm text-gray-400">New England Institute of Technology - Warwick, RI | <em>May 2008 to May 2010</em></p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="group relative flex items-center text-3xl font-extrabold" id="skills">
                <a href="#skills" className="absolute -left-10 text-[#58a6ff] p-1">
                    <FaLink size={24} />
                </a>
                Skills
            </h2>
            <div className="flex flex-wrap gap-2 not-prose mt-6">
              {[
                  "JavaScript", "Python", "React", "Next.js", "Redux", "Context API",
                  "HTML", "CSS", "Sass", "Less", "Tailwind CSS",
                  "Node.js", "Linux Terminal", "Git", "GitHub", "VS Code",
                  "Microsoft Azure", "Agile", "Jira", "Software Testing",
                  "Customer Support", "Technical Troubleshooting", "Communication"
              ].map(skill => (
                  <span key={skill} className="bg-[#21262d] text-[#c9d1d9] px-3 py-1 rounded-md text-xs border border-[#30363d] font-mono">
                      {skill}
                  </span>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="group relative flex items-center text-3xl font-extrabold" id="certifications">
                <a href="#certifications" className="absolute -left-10 text-[#58a6ff] p-1">
                    <FaLink size={24} />
                </a>
                Certifications
            </h2>
            
            <div className="flex flex-col gap-6 mt-6">
               <div>
                  <a href="https://www.credly.com/badges/0661305e-b61a-4efd-8a4c-68a962480f21/linked_in?t=rayie3" target="_blank" className="font-semibold text-[#58a6ff] hover:underline block mb-1">
                      Microsoft Certified: Azure Fundamentals
                  </a>
                  <p className="text-sm text-gray-400">April 2022 to Present</p>
                  <p className="text-sm mt-2 text-gray-300">Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.</p>
               </div>

               <div>
                  <a href="https://www.freecodecamp.org/certification/idongcodes/responsive-web-design" target="_blank" className="font-semibold text-[#58a6ff] hover:underline block mb-1">
                      Responsive Web Design
                  </a>
                  <p className="text-sm text-gray-400">February 2021</p>
               </div>

               <div>
                  <a href="https://www.youracclaim.com/badges/c5a98202-eda4-4a7a-bc0b-d5aa8ed56ef9" target="_blank" className="font-semibold text-[#58a6ff] hover:underline block mb-1">
                      Full-Stack Web Development + Computer Science
                  </a>
                  <p className="text-sm text-gray-400">February 2021</p>
               </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
