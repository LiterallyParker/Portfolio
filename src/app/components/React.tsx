import { motion } from "framer-motion";
import Image from "next/image";

export default function React() {
    return (
        <motion.div
            className="flex flex-col text-lg items-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-center mb-2">
                While I do not claim to be a front-end specialist, I do work better in the backend, I do have a rather deep understanding of React.
            </p>
            <p className="text-center mb-2">
                Here are some examples, pulled from my Capstone project I turned in for my Full-Stack Acadamy final:
            </p>
            <Image className="z-10 m-2 shadow-lg" src="/reactEx1.png" alt="" width={600} height={0} />
            <Image className="z-10 m-2 shadow-lg" src="/reactEx2.png" alt="" width={600} height={0} />
            <Image className="z-10 m-2 shadow-lg" src="/reactEx3.png" alt="" width={600} height={0} />
            <Image className="z-10 m-2 shadow-lg" src="/reactEx4.png" alt="" width={600} height={0} />
        </motion.div>
    )
}