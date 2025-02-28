import { motion } from "framer-motion";
import Image from "next/image";

export default function Express() {
    return (
        <motion.div
            className="flex flex-col text-lg items-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-center mb-2">
                Express.js is one of my most well-understood libraries. I have worked with it ever since I began web development.
            </p>
            <p className="text-center mb-2">
                Here is an example I have used in the past, to create a simple user-authenticated server:
            </p>
            <Image className="w-100 m-2 shadow-xl z-10" src="/expressEx1.png" alt="" width={600} height={100} />
            <Image className="w-100 m-2 shadow-xl z-10" src="/expressEx2.png" alt="" width={600} height={100} />
            <Image className="w-100 m-2 shadow-xl z-10" src="/expressEx3.png" alt="" width={600} height={100} />
        </motion.div>
    )
}