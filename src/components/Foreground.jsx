import Card from "./Card"
import { useRef } from "react";

function Foreground() {
    const ref = useRef(null);
    const data = [ 
    {
        desc: "This is a description of the document here. ",
        filesize: "9Mbs",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: true},
    },    {
        desc: "This is a description of the document here. ",
        filesize: "10Mbs",
        close: true,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: true},
    },    {
        desc: "This is a description of the document here. ",
        filesize: "9Mbs",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: false},
    },

];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground