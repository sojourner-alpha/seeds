import { FaSeedling, FaLeaf, FaFlask } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About ElmSeeds</h1>
      
      {/* Mission Statement */}
      <section className="mb-8 sm:mb-12">
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
      
      {/* Updated About the Head Grower Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Meet Our Head Grower</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="w-full md:w-1/3">
              <div className="h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/about/ryan-elmquist.jpg" 
                  alt="Ryan Elmquist" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">Ryan Elmquist</h3>
              <p className="text-gray-600 mb-1">Head Grower & Genetics Specialist</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                With over a decade of hands-on experience in cannabis cultivation, Ryan has mastered growing 
                in diverse environments including indoor, outdoor, and greenhouse settings. His expertise spans 
                from large-scale commercial operations to specialized genetic preservation projects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a former Vegetative and Genetics Manager at a large-scale cannabis operation, Ryan oversaw 
                nursery operations, mother plant health, and genetic selection. He managed extensive cultivation 
                spaces, including 4,000sqft of flowering rooms with regular 1500+ plant cycles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ryan has also successfully operated his own hemp cultivation business and worked as a lead 
                propagator at a large hemp operation, where he managed clone production reaching 
                150,000 clones per season. His diverse experience and dedication to genetic preservation make him 
                the ideal curator for our seed bank.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section - Updated with real experience */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Approach to Genetics</h2>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            Drawing from extensive commercial cultivation experience and a deep understanding of cannabis genetics, 
            our breeding program combines traditional techniques with modern cultivation practices. Our approach is 
            built on real-world experience in both large-scale operations and specialized genetic work.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaSeedling className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Genetic Preservation</h3>
              </div>
              <p className="text-gray-700">
                Through years of collecting and working with diverse cannabis varieties, we've developed 
                a robust preservation program to maintain the integrity of both classic and rare genetics.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaFlask className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Proven Methods</h3>
              </div>
              <p className="text-gray-700">
                Our cultivation techniques are refined through years of commercial experience across indoor, 
                outdoor, and greenhouse environments, ensuring consistent, high-quality results.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <FaLeaf className="text-green-600 text-2xl mr-3" />
                <h3 className="text-lg font-semibold">Diverse Experience</h3>
              </div>
              <p className="text-gray-700">
                From managing large-scale operations to specialized breeding projects, our comprehensive 
                experience ensures we understand every aspect of cannabis cultivation and genetics.
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