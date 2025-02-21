import { motion } from "framer-motion";

export default function React() {
    return (
        <div className="flex flex-col items-center text-lg justify-center space-y-6">
            <motion.div
                className="flex items-center mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center">
                    While I do not claim to be a front-end specialist, I do work better in the backend, I do have a rather deep understanding of React.
                </p>
            </motion.div>
            <motion.div
                className="z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-center">
                    Here are some examples, pulled from my Capstone project I turned in for my Full-Stack Acadamy final:
                </p>
                <img className="w-100 m-2 shadow-lg" src="reactEx1.png" alt="" />
                <img className="w-100 m-2 shadow-lg" src="reactEx2.png" alt="" />
                <img className="w-100 m-2 shadow-lg" src="reactEx3.png" alt="" />
                <img className="w-100 m-2 shadow-lg" src="reactEx4.png" alt="" />
            </motion.div>
        </div>
    )
}