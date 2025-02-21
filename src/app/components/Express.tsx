import { motion } from "framer-motion";
import Image from "next/image";

export default function Express() {
    return (
        <div className="flex flex-col items-center text-lg justify-center space-y-6">
            <motion.div
                className="flex items-center mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center">
                    Express.js is one of my most well-understood libraries. I have worked with it ever since I began web development.
                </p>
            </motion.div>
            <motion.div
                className="z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center mb-2">
                    Here is one simple example I have used in the past, to create a simple user-authenticated server:
                </p>
                <Image className="w-100 m-2 shadow-xl" src="/expressEx1.png" alt="" width={600} height={100} />
                <Image className="w-100 m-2 shadow-xl" src="/expressEx2.png" alt="" width={600} height={100} />
                <Image className="w-100 m-2 shadow-xl" src="/expressEx3.png" alt="" width={600} height={100} />
            </motion.div>
        </div>
    )
}