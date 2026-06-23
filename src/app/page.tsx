export default function Home() {
  return (
    <main className="bg-[#F8F9FA] text-gray-900 font-sans antialiased min-h-screen scroll-smooth">

      {/* Navigation */}
      <nav className="fixed w-full top-0 bg-[#F8F9FA]/90 backdrop-blur-md z-50 py-4 px-8 flex justify-between items-center shadow-sm">
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Side Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#life" className="hover:text-blue-600">Life</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="/Swapnil_Agarwal_Resume.pdf" download="Swapnil_Agarwal_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
            <i className="fas fa-download mr-2"></i>Resume
          </a>
          <a href="mailto:swapnilagarwal216@gmail.com" className="text-gray-600 hover:text-blue-600 text-xl"><i className="far fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/swapnil-agarwal216/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Swapnil216" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 text-xl"><i className="fab fa-github"></i></a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-8 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Greetings visitor, <br /> <span className="text-gradient">Welcome to a glimpse of my journey</span>
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 leading-tight">
              Building Innovative Search & Discovery Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i> Berlin, Germany
            </p>
            <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
              I am an enthusiastic software developer with an appetite for exploring and learning practical applications of Data Structures and Machine Learning. I focus on solving complex problems and driving business growth—leading projects that generated over $540M in annual revenue.
            </p>
            <div className="flex space-x-4 relative">
              <a href="#experience" className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition shadow-lg flex items-center">
                View My Work <i className="fas fa-arrow-right ml-2"></i>
              </a>

              {/* Enhanced "Let's Talk" Dropdown */}
              <div className="relative group cursor-pointer z-30">
                <div className="border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium group-hover:border-blue-600 group-hover:text-blue-600 transition flex items-center">
                  Let's Talk <i className="fas fa-chevron-down ml-2 text-xs"></i>
                </div>
                <div className="absolute top-full mt-2 left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl flex flex-col overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <a href="mailto:swapnilagarwal216@gmail.com" className="px-5 py-4 hover:bg-blue-50 text-gray-700 hover:text-blue-600 flex items-center gap-3 transition">
                    <i className="fas fa-envelope text-lg"></i> Email Me
                  </a>
                  <div className="h-px bg-gray-100 w-full"></div>
                  <a href="https://www.linkedin.com/in/swapnil-agarwal216/" target="_blank" rel="noopener noreferrer" className="px-5 py-4 hover:bg-blue-50 text-gray-700 hover:text-blue-600 flex items-center gap-3 transition">
                    <i className="fab fa-linkedin text-lg text-blue-600"></i> Message
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="relative flex justify-center">
            <img src="/profile.jpg" alt="Swapnil Agarwal" className="rounded-3xl w-80 h-80 object-cover image-glow border-4 border-white z-10" />
            <div className="absolute bottom-4 right-10 bg-white px-4 py-2 rounded-xl shadow-lg font-semibold text-blue-600 z-20 flex items-center">
              <i className="fas fa-rocket mr-2 text-orange-500"></i> 5+ Years Exp
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Where I've <span className="text-blue-600">Made Impact</span></h2>
          <p className="text-center text-gray-500 mb-16">Scaling systems that drive multi-million dollar revenue growth</p>

          <div className="relative border-l-4 border-blue-100 ml-6 md:ml-0 md:pl-12 space-y-16">

            {/* Delivery Hero */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                DH
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Software Engineer II</h3>
                    <p className="text-blue-600 font-medium text-lg">Delivery Hero &bull; Berlin, Germany</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> Apr 2025 - Present</p>
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-2 font-medium">Full-Time</span>
                  </div>
                </div>
                <div className="mb-6 text-gray-700 space-y-2">
                  <p>• Architecting pluggable, scalable solutions for dynamic filters and nested vendor search.</p>
                  <p>• Collaborating with Talabat and Glovo engineers to drive seamless adoption across multiple brand codebases.</p>
                  <p>• Utilizing Nuxt.js, Amazon Web Services (AWS), and other core skills to optimize search relevance.</p>
                </div>
              </div>
            </div>

            {/* Flipkart - SDE 2 */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-yellow-400 text-blue-900 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                FK
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Software Development Engineer II</h3>
                    <p className="text-blue-600 font-medium text-lg">Flipkart &bull; Bengaluru, India</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> Sep 2024 - Jun 2025</p>
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-2 font-medium">Full-Time</span>
                  </div>
                </div>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Multi Category Store - Spark, Python, Couchbase, Java</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Interfaced with product managers to understand requirements and iterate on solutions for improving search relevance on broad queries.</li>
                      <li>Developed a Spark job to process daily analytics and identify top-selling products, storing the results in Couchbase for efficient retrieval.</li>
                      <li>Enabled dynamic display of diverse subcategories (e.g., shoes, bags) for broad queries (e.g., "Nike"), helping users explore options and make better purchase decisions.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Dynamic Sale Price - Java, Kafka, RESTful API</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Collaborated with product managers to translate business requirements into technical specifications, enabling users to lock in the price for products during the sale.</li>
                      <li>Designed and implemented search system changes to support token-based pricing for seamless integration.</li>
                      <li>Led the end-to-end development and deployment of the feature, enhancing revenue during the sales.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Flipkart - SDE 1 */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-yellow-400 text-blue-900 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                FK
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Software Development Engineer I</h3>
                    <p className="text-blue-600 font-medium text-lg">Flipkart &bull; Bengaluru, India</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> Jul 2022 - Sep 2024</p>
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-xs mt-2 font-medium">Full-Time</span>
                  </div>
                </div>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">A/B Capability in Search System - MySQL, Java</span>
                    <p className="ml-2 text-sm">• Developed highly customisable A/B testing infrastructure for the search system, enabling real-time experimentation of new features, facilitating data-driven decisions for feature rollouts.</p>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Cloud Migration - Kubernetes, Google Cloud Platform</span>
                    <p className="ml-2 text-sm">• Led the seamless migration of both stateful and stateless search services to Google Cloud Platform (GCP), ensuring improved scalability to support future business growth and traffic demands.</p>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Elite Brand Search - Java, HBase, RESTful API</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Collaborated with the project managers to gain a comprehensive understanding of the project's goals through the Product Requirements Document.</li>
                      <li>Designed and built a novel feature allowing users to refine searches exclusively for premium brands, elevating search and browse experience.</li>
                      <li>Integrated this feature with premium ads services, resulting in a remarkable revenue surge for the company.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Semantic Matching - Solr, Zookeeper, RESTful API</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Implemented semantic search using Solr's Dense-Vector data structure in Java, giving search results aligned with users' actual query intent.</li>
                      <li>Engineered and developed robust pipelines for indexing 100 million documents daily, while optimizing Solr cores to facilitate the swift retrieval of highly relevant products under 100ms.</li>
                      <li>Attained significant business impact by eliminating null searches, resulting in elevation of CTR and revenue growth.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Flipkart - Intern */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-yellow-400 text-blue-900 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                FK
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Software Development Engineer Intern</h3>
                    <p className="text-blue-600 font-medium text-lg">Flipkart &bull; Bengaluru, India</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> Jul 2021 - Jun 2022</p>
                    <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs mt-2 font-medium">Internship</span>
                  </div>
                </div>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Flash POC: Semantic Matching - Solr, Gradle</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Researched and developed a proof-of-concept search feature, leveraging Solr's HNSW graphs to fetch 1000 semantically matching products from a big-data pool of products accurately under 100 ms.</li>
                      <li>Sharded 50 million documents into multiple cores, in leader-follower design managed by the zookeeper, effectively managing each system to cater for up to 1000 QPS per follower.</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-gray-900 font-semibold block mb-1">Intelligent Product Insights - Python, DropWizard</span>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                      <li>Developed and integrated the product page enrichment features using NLP and ML models to extract top keywords and summarize user reviews.</li>
                      <li>Optimized user experience by enabling review comparisons and in-depth product analysis, increasing user engagement.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* UCL */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                UCL
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Full Stack Software Developer Research Intern</h3>
                    <p className="text-purple-600 font-medium text-lg">UCL &bull; London, UK</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> May 2021 - Jul 2021</p>
                    <span className="inline-block bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs mt-2 font-medium">Research</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                  <li>Predicted global market sentiments utilizing labor statistics and commerce data to help client estimate the impacts on stock price changes.</li>
                  <li>Built and trained FinBERT and BERT models to analyze people sentiments (in batch and single words); Retrieved and operated on commerce and labor statistics data (USA) using the APIs and filtered them per the recency of occurrence.</li>
                  <li>Extracted keywords from retrieved data by leveraging TF-IDF method and dynamically displayed top 100 keyword-sentiment relation using D3.js.</li>
                </ul>
              </div>
            </div>

            {/* TU/e */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                TU/e
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Software Development Engineer Intern</h3>
                    <p className="text-red-600 font-medium text-lg">Eindhoven University of Technology &bull; Netherlands</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> May 2021 - Jul 2021</p>
                    <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs mt-2 font-medium">Internship</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                  <li>Designed and innovated a tool to assess percentage conformance between the implementation and Architecture Design of system softwares.</li>
                  <li>Created APIs to retrieve folder structures and file data from GitHub and Bitbucket repositories, facilitating seamless access to source code.</li>
                  <li>Parsed C++ code to extract architectural information and compared it to XMI files derived from Enterprise Architecture's UML diagrams.</li>
                </ul>
              </div>
            </div>

            {/* IMARC Services */}
            <div className="relative">
              <div className="absolute -left-[45px] bg-gray-600 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white">
                IM
              </div>
              <div className="bg-[#F8F9FA] rounded-2xl p-8 shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Research Intern</h3>
                    <p className="text-gray-600 font-medium text-lg">IMARC Services Private Limited &bull; Noida, India</p>
                  </div>
                  <div className="text-right text-sm text-gray-500 shrink-0">
                    <p><i className="far fa-calendar-alt mr-1"></i> May 2019 - Jul 2019</p>
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs mt-2 font-medium">Internship</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2 text-sm">
                  <li>Delivered an end-to-end cost model analysis to help the client set up a pigment manufacturing plant in China. Created final analysis report, decks and provided insights to the client.</li>
                  <li>Conducted various market research studies and created reports for clients covering topics such as "Global Paper Cup Market Report and Forecast 2019- 2024", "Maltodextrin Market Report for EMEA Region" and "Global Vegetable Oil Market Research".</li>
                  <li>Conducted a Search Engine Optimization (SEO) for a website that successfully enhanced the "Domain Authority" and the "Page Authority" which helped lift the website appearance on Google search engine results.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Side Projects Section */}
      <section id="projects" className="py-20 px-8 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Side <span className="text-blue-600">Projects</span></h2>
          <p className="text-gray-500 mb-16">Independent explorations and academic builds</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

            {/* Project 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Blockchain</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Apr '21</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">Using the blockchain concept, developed a Doctor-Patient consultation records storing application as a distributed ledger. Validation was done using the zero-knowledge proof.</p>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">File Transfer Using UDP</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Mar '21 - Apr '21</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">Developed a code which added a reliability layer over UDP and could transfer any type of file between the clients and the server. The software used Python and supported multi-client support.</p>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Webpage Retrieval Using TCP Sockets</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Feb '21</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">Developed a code which retrieved the web-pages, whose requests were routed through a VPN. The program used TCP sockets and was written in C.</p>
            </div>

            {/* Project 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Automated Chatbot</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Dec '20 - Jan '21</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow mt-2">Developed an automated chatbot to communicate intelligently on social media applications.</p>
            </div>

            {/* Project 5 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Virtual Assistant</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Dec '20</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow mt-2">Developed a personal voice-controlled Virtual Assistant to carry on basic tasks on a machine.</p>
            </div>

            {/* Project 6 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Reducate</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Sep '20 - Nov '20</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">An application to provide free educational support for those, who had to drop-out early from their studies.</p>
            </div>

            {/* Project 7 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Automated Classifier Between Animals</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">May '20</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow mt-2">Developed and trained a Convolutional Neural Network model in Python. Tested the developed model using data of different new images. The model classified between images of animals.</p>
            </div>

            {/* Project 8 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Facial Expression Recogniser</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">May '20</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 flex-grow mt-2">Modelled a recogniser based on Deep Learning, to classify 7 basic Human Sentiments, based on their Facial Expressions.</p>
            </div>

            {/* Project 9 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Stock Price Movement Model</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Mar '20 - May '20</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">The project comprised of regressing Google's stock prices from 2004 to 2017 into an accurate ARIMA model. The prices were further forecasted in R, keeping the errors minimized.</p>
            </div>

            {/* Project 10 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Stock Options And Futures Risk Analysis</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Mar '20 - Apr '20</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">For a large corporation in India. Developed a python script to scrap the data for futures and options from the official source. Calculated the contango and backwardation... Deduced an efficient portfolio arrangement to invest, so as to minimise the risk and maximise the profit.</p>
            </div>

            {/* Project 11 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition flex flex-col h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">Cab Booking And Management System</h3>
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-medium whitespace-nowrap ml-2">Sep '19 - Nov '19</span>
              </div>
              <p className="text-xs text-blue-600 font-medium mb-3">BITS Pilani</p>
              <p className="text-sm text-gray-600 mb-4 flex-grow">Developed an application for booking cabs using Java and MySQL. Application maintained a database for customers and cab drivers and stored information such as ratings, wallet balance.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section id="skills" className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">My <span className="text-blue-600">Superpowers</span></h2>
          <p className="text-gray-500 mb-16">Tools, frameworks, and methodologies I use to ship great software</p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            {/* Languages & Frameworks */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-6 flex items-center"><i className="fas fa-code text-purple-500 mr-3"></i> Core & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">Java & Python</span>
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">C / C++</span>
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">Spring Boot</span>
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">GraphQL & REST</span>
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">Nuxt.js</span>
                <span className="bg-white text-purple-700 px-3 py-1 rounded-md text-sm font-medium border border-purple-100 shadow-sm">Django / Flask</span>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-6 flex items-center"><i className="fas fa-server text-orange-500 mr-3"></i> Infrastructure & DBs</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">Elasticsearch & Solr</span>
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">Apache Kafka</span>
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">Kubernetes (GCP)</span>
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">Redis & HBase</span>
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">ZooKeeper</span>
                <span className="bg-white text-orange-700 px-3 py-1 rounded-md text-sm font-medium border border-orange-100 shadow-sm">MySQL & Couchbase</span>
              </div>
            </div>

            {/* Tools, Misc & Methodologies */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-6 flex items-center"><i className="fas fa-toolbox text-blue-500 mr-3"></i> Tools & Misc</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">Jenkins & Git</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">Maven & Gradle</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">JUnit</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">D3.js</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">Agile / CI/CD</span>
                <span className="bg-white text-blue-700 px-3 py-1 rounded-md text-sm font-medium border border-blue-100 shadow-sm">AutoCAD</span>
              </div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="bg-[#F8F9FA] p-8 rounded-2xl border border-gray-100 text-left shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-4 flex items-center"><i className="fas fa-certificate text-yellow-500 mr-3"></i> Certifications</h3>
            <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
               <li className="flex items-start bg-white p-4 rounded-xl border border-gray-100 flex-col shadow-sm">
                 <div className="flex items-center">
                   <i className="fas fa-check-circle text-green-500 mr-3"></i>
                   <span className="font-semibold text-gray-800">McKinsey.org Forward Program</span>
                 </div>
                 <a href="https://www.credly.com/badges/17a96889-ba3a-4420-9fd3-e5190ecd69a0/public_url" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 mt-2 ml-7 bg-blue-50 px-2 py-1 rounded-md border border-blue-200 self-start hover:underline">
                   View Credential
                 </a>
               </li>
               <li className="flex items-start bg-white p-4 rounded-xl border border-gray-100 flex-col shadow-sm">
                 <div className="flex items-center">
                   <i className="fas fa-check-circle text-green-500 mr-3"></i>
                   <span className="font-semibold text-gray-800">Tweet Emotion Recognition with TensorFlow</span>
                 </div>
                 <div className="text-xs text-gray-500 mt-2 ml-7 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 self-start">ID: C29W2RJM5583</div>
               </li>
               <li className="flex items-start bg-white p-4 rounded-xl border border-gray-100 flex-col shadow-sm">
                 <div className="flex items-center">
                   <i className="fas fa-check-circle text-green-500 mr-3"></i>
                   <span className="font-semibold text-gray-800">Introduction to Data Science in Python</span>
                 </div>
                 <div className="text-xs text-gray-500 mt-2 ml-7 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 self-start">ID: 5J7URZ7BP2PG</div>
               </li>
               <li className="flex items-start bg-white p-4 rounded-xl border border-gray-100 flex-col shadow-sm">
                 <div className="flex items-center">
                   <i className="fas fa-check-circle text-green-500 mr-3"></i>
                   <span className="font-semibold text-gray-800">Facial Expression Recognition with Keras</span>
                 </div>
                 <div className="text-xs text-gray-500 mt-2 ml-7 bg-gray-50 px-2 py-1 rounded-md border border-gray-200 self-start">ID: T8DPEKAGWD9K</div>
               </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Life Beyond Work Section */}
      <section id="life" className="py-20 px-8 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Life <span className="text-blue-600">Beyond Work</span></h2>
          <p className="text-gray-500 mb-16">What keeps me inspired and energized outside the screen</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Tennis */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="text-6xl mb-6 bg-green-50 w-24 h-24 rounded-full flex items-center justify-center shadow-inner">
                🎾
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tennis</h3>
              <p className="text-gray-600 text-sm">Serving aces, rallying on the court, and keeping the competitive spirit alive.</p>
            </div>

            {/* Hiking */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="text-6xl mb-6 bg-amber-50 w-24 h-24 rounded-full flex items-center justify-center shadow-inner">
                ⛰️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hiking</h3>
              <p className="text-gray-600 text-sm">Exploring new trails, climbing peaks, and disconnecting in nature.</p>
            </div>

            {/* Piano */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="text-6xl mb-6 bg-purple-50 w-24 h-24 rounded-full flex items-center justify-center shadow-inner">
                🎹
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Piano</h3>
              <p className="text-gray-600 text-sm">Unwinding and expressing creativity through melodies and musical notes.</p>
            </div>

            {/* Food Exploration */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center text-center">
              <div className="text-6xl mb-6 bg-red-50 w-24 h-24 rounded-full flex items-center justify-center shadow-inner">
                🍽️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Foodie</h3>
              <p className="text-gray-600 text-sm">Hunting for hidden culinary gems and exploring diverse local cuisines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Where It All <span className="text-blue-600">Began</span></h2>
          <p className="text-gray-500 mb-16">The foundation that shaped my journey</p>

          <div className="bg-[#F8F9FA] rounded-3xl p-10 border border-gray-100 inline-block text-left w-full shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="bg-white text-blue-600 p-6 rounded-2xl shrink-0 shadow-sm border border-gray-100">
                <i className="fas fa-university text-5xl"></i>
              </div>
              <div className="flex-1">
                <a href="https://www.bits-pilani.ac.in" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition flex items-center gap-3">
                  BITS Pilani <i className="fas fa-external-link-alt text-base text-gray-400"></i>
                </a>

                <p className="text-gray-700 italic mb-6 text-lg border-l-4 border-blue-300 pl-4 py-1">
                  "Driven by a profound curiosity for both market dynamics and complex algorithms, I pursued 2 degrees to bridge the worlds of Economics and Computer Science."
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <i className="fas fa-chart-line text-green-500 text-xl mr-4"></i>
                    <span className="font-semibold text-gray-800">M.Sc. Economics (Hons.)</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <i className="fas fa-laptop-code text-purple-500 text-xl mr-4"></i>
                    <span className="font-semibold text-gray-800">B.E. Computer Science (Hons.)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-500 mb-4">Spoken Languages</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">English (Full Prof.)</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">German (Elementary)</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">Hindi (Native)</span>
                    <span className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-100">Sanskrit (Elementary)</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-10">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="mailto:swapnilagarwal216@gmail.com" className="text-gray-400 hover:text-white transition text-2xl"><i className="far fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/swapnil-agarwal216/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Swapnil216" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl"><i className="fab fa-github"></i></a>
        </div>
        <p className="text-gray-500 text-sm font-medium">&copy; {new Date().getFullYear()} Swapnil Agarwal. Built with Next.js & Tailwind CSS.</p>
      </footer>

    </main>
  );
}