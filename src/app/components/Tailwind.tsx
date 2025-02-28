import { motion } from "framer-motion";
import Image from "next/image";

export default function Tailwind() {
    return (
        <motion.div
            className="flex flex-col text-lg items-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <p className="text-center mb-2">
                I have spent a lot of time scrolling through the TailwindCSS docs. In my Capstone project for Full-stack academy, I went with raw CSS. through this experience, I was able to translate the docs well.
            </p>
            <Image className="z-10 m-2 shadow-lg" src="/tailwindEx1.png" alt="" width={600} height={0} />
            <Image className="z-10 m-2 shadow-lg" src="/tailwindEx2.png" alt="" width={600} height={0} />
        </motion.div>
    )
}