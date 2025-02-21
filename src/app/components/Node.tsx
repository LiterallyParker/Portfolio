import { motion } from "framer-motion";
import Image from "next/image"

export default function Node() {
    return (
        <div className="flex flex-col items-center text-lg justify-center space-y-6">
            <motion.div
                className="flex items-center mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p>
                    Most of the projects I have made and continuously worked on, utilize Node.js.
                </p>
            </motion.div>
            <motion.div
                className="z-10 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center w-1/2">
                    This website alone utilizes node for dependency and script management.
                </p>
                <Image src="/nodeEx1.png" alt="" width={250} height={0} />
            </motion.div>
            <motion.div
                className="z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center mb-2">
                    In many other projects, I have also utilized node-schedule, node-mailer, and nodemon for other, more complicated tasks.
                </p>
                <Image src="/nodeEx2.png" alt="" width={600} height={0} />
            </motion.div>
        </div>
    )
}