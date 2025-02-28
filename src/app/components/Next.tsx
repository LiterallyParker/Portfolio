import { motion } from "framer-motion";
import Image from "next/image";

export default function Next() {
    return (
        <motion.div
            className="flex flex-col text-lg items-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-center mb-2">
                Next.js is the latest skill I have added to my arsenal. The best example I have of this framework so far, is this portfolio.
            </p>
            <Image className="z-10 m-2 shadow-lg" src="/nextEx1.png" alt="" width={600} height={0} />
        </motion.div>
    )
}