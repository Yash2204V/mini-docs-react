import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1} className='w-56 h-60 bg-zinc-950 rounded-[50px] px-8 py-10 overflow-hidden relative'>
        <FaRegFileAlt/>
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className="flex justify-between items-center text-sm px-7 py-2 mb-3">
                <h5>{data.filesize}</h5>
                <span className="w-5 h-5 bg-zinc-400 rounded-full flex items-center justify-center">
                    {data.close ? <IoClose color="black"  /> : <FaDownload size=".7em" color="black" />}
                    
                </span>
            </div>
            {data.tag.isOpen && (
                    <div className={`tag w-full {data.tag.tagColor ? bg-green-700 : bg-blue-500} flex justify-center items-center p-3`}>
                        <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
                    </div>
            )}

        </div>
    </motion.div>  
)
}

export default Card