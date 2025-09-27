import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const bgVariants = {
    float: { y: [0, -15, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section className="relative overflow-visible py-16 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Left Side - Shape */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 30px 60px rgba(0,0,0,0.25)" }}
              className="relative w-full h-64 sm:h-72 md:h-96 mx-auto bg-white rounded-[120px_0px_120px_0px] shadow-2xl overflow-hidden transition-all duration-500 border border-transparent "
            >
              {/* Highlights */}
              <div className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white opacity-20 rounded-tl-[120px]"></div>
              <div className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-white opacity-20 rounded-br-[120px]"></div>

              {/* Shape Content */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center space-y-3 sm:space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
                >
                  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
                    सहकार&nbsp;समृद्धी
                  </span>
                </motion.h3>

              <motion.p
  variants={itemVariants}
  className="text-sm sm:text-lg md:text-xl max-w-[250px] sm:max-w-xs md:max-w-md leading-snug font-semibold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
>
  Empowering Cooperatives with Banking & Finance Expertise
</motion.p>


               <motion.div
  variants={itemVariants}
  whileHover={{
    scale: 1.05,
    y: -5,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  }}
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
className="bg-white/30 backdrop-blur-md p-5 sm:p-6 rounded-[80px_0px_80px_0px] border-l-4 border-blue-400 shadow-2xl transition-all duration-500 group w-full max-w-[280px] sm:max-w-xs md:max-w-md"
>
  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 sm:mb-3">
    Our Specializations
  </h4>
  
  <motion.ul
    className="text-gray-700 space-y-1 text-xs sm:text-sm"
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.15 } }
    }}
    initial="hidden"
    animate="show"
  >
    {[
      "Credit Cooperative Societies",
      "Multi-State Credit Cooperative Societies",
      "Microfinance Companies (Section 8)"
    ].map((item, index) => (
      <motion.li
        key={index}
        variants={{
          hidden: { opacity: 0, x: -20 },
          show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
        }}
        className="hover:translate-x-2 hover:text-primary transition-all cursor-pointer"
      >
        • {item}
      </motion.li>
    ))}
  </motion.ul>
</motion.div>

              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Supporting Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <motion.div
              className="mx-auto text-center lg:text-left space-y-4 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 relative group">
                Welcome to  <span className="bg-primary-gradient bg-clip-text text-transparent font-bold tracking-wide">
               Sahakar &nbsp;Samriddhi
              </span>
                <span className="absolute -bottom-1 left-0 w-10 h-1 sm:w-12 sm:h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-20"></span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Sahakar Samriddhi is your trusted consultancy partner for creating, managing, and expanding cooperative financial institutions in India. We specialize in Credit Cooperative Societies, Multi-State Credit Cooperative Societies, and Microfinance Companies registered under Section 8.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Our mission is to empower cooperatives with expert support in legal compliance, strategic growth, and modern banking systems. Whether you're starting a new institution or looking to streamline and scale an existing one, we provide the guidance and solutions you need.
              </motion.p>

              <motion.div variants={itemVariants} className="flex justify-center">
               <Button
  size="sm"
  className="mt-4 sm:mt-6 bg-gradient-to-r from-primary to-primary/80 text-white px-10 py-8 sm:py-8 md:px-12 md:py-8 text-sm sm:text-md transition-all duration-300 hover:scale-[1.05] shadow-lg 
             hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500"
>
  Request a Free Consultation
</Button>



              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Background Decorations with Floating Animation */}
    
     
    </section>
  );
};
