import React, { type ReactNode } from 'react'
import {motion} from 'framer-motion'

type Props = {
  image: string;
  title: string;
  greenTitle: string;
  paragraph: string;
  position: "right" | "left";
  step: string;

}

function Step({image, title, greenTitle, position, paragraph, step}:Props) {

  const flexDirection = position === "right" ? "flex-row" : "flex-row-reverse";

  return (
    <motion.section 
      className='w-full mt-20'
    >
      <motion.div
        initial={{opacity: 0, x: position === "right" ? "100%" : "-100%"}}
        whileInView={{opacity: 1, x: 0}}
        transition={{ duration: 1.5}} 
        className={`flex h-[400px] ${flexDirection}`}
      >
        <motion.div 
          className='w-1/2'
          
        >
          <div className='w-full h-full'>
            <img 
              src={image}
              className='w-full h-full object-contain' 
              alt="" 
            />
          </div>
        </motion.div>

        <div className="flex flex-col w-1/2 px-10">
						<p className="border-2 border-outline text-white bg-outline font-semibold self-start rounded-3xl py-2 px-4">
              step {step}
            </p>

						<h2 className="text-4xl font-semibold mt-10" >
              <span>{title} </span>
			        <span className="text-green">{greenTitle}</span>
						</h2>

						<p className="text-lg font-medium mt-10">
              {paragraph}
            </p>
					</div>

      </motion.div>
    </motion.section>
  )
}

export default Step

