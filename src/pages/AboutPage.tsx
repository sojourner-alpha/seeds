import { FaSeedling, FaLeaf, FaFlask } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About ElmSeeds</h1>
      
      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed">
            At ElmSeeds, our mission is to provide collectors with access to the highest quality cannabis seeds. 
            We believe in preserving exceptional genetics and promoting biodiversity in cannabis. 
            Our team is passionate about the plant's potential and dedicated to offering premium seeds 
            with genetic stability, consistent results, and unique characteristics.
          </p>
        </div>
      </section>
      
      {/* About the Head Grower */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Meet Our Head Grower</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              {/* Placeholder for grower image */}
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">Dr. Sarah Thompson</h3>
              <p className="text-gray-600 mb-1">Head Grower & Geneticist</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over 15 years of experience in botany and cannabis cultivation, Dr. Thompson 
                leads our seed selection and breeding program. She holds a Ph.D. in Plant Genetics 
                from the University of California and has been at the forefront of cannabis breeding 
                for over a decade.
              </p>
              <p className="text-gray-700 leading-relaxed">
                "My passion is exploring the rich genetic diversity of cannabis and working to 
                preserve rare landraces while developing new varieties with exceptional characteristics. 
                At ElmSeeds, we're not just selling seeds – we're preserving genetic heritage and 
                pushing the boundaries of what's possible through careful breeding."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Approach to Genetics</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            At ElmSeeds, we approach cannabis genetics with scientific rigor and a deep 
            appreciation for the plant's natural diversity. Our breeding program focuses on:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaSeedling className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Genetic Preservation</h3>
              </div>
              <p className="text-gray-700">
                We work diligently to collect, preserve, and propagate rare and 
                heirloom cannabis varieties, preventing genetic erosion and maintaining 
                the plant's rich natural diversity.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaFlask className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Selective Breeding</h3>
              </div>
              <p className="text-gray-700">
                Our breeding projects are carefully designed to enhance desirable traits 
                while maintaining genetic stability. We extensively test each generation 
                for consistency and quality.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaLeaf className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Sustainable Practices</h3>
              </div>
              <p className="text-gray-700">
                We employ organic and sustainable cultivation methods throughout our 
                breeding process, ensuring our seeds are developed in harmony with 
                nature and free from harmful chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-4">
            ElmSeeds was founded in 2018 by a collective of passionate cannabis researchers, 
            botanists, and cultivators united by a shared vision: to create a seed bank that 
            prioritizes genetic preservation, quality, and innovation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            What began as a small collaborative project among colleagues has grown into a 
            respected seed bank with an international reputation for excellence. Throughout 
            our growth, we've maintained our founding principles—meticulous attention to 
            genetic selection, rigorous testing, and a commitment to the collector community.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today, we offer one of the most diverse collections of premium cannabis seeds for 
            collectors, with varieties spanning the spectrum from rare landraces to cutting-edge 
            hybrid creations. Our team continues to explore, innovate, and preserve cannabis 
            genetics for collectors around the world.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We're proud of the community we've built and the role we play in preserving cannabis 
            biodiversity for future generations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 