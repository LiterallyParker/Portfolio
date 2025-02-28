import { motion } from "framer-motion";
import Image from "next/image"

export default function Node() {
    return (
            <motion.div
                className="flex items-center m-2 flex-col text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center mb-2">
                    Most of the projects I have made and continuously worked on, utilize Node.js.
                </p>
                <p className="text-center mb-2">
                    This website alone utilizes node for dependency and script management.
                </p>
                <Image className="z-10 mb-4" src="/nodeEx1.png" alt="" width={250} height={0} />
                <p className="text-center mb-2">
                    In many other projects, I have also utilized node-schedule, node-mailer, and nodemon for other, more complicated tasks.
                </p>
                <Image className="z-10 mb-2" src="/nodeEx2.png" alt="" width={600} height={0} />
            </motion.div>
    )
}