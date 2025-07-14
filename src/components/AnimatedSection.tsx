import { motion } from 'framer-motion';
import React from 'react'

type AnimatedSectionProps = {
    children: React.ReactNode
}

function AnimatedSection({ children }: AnimatedSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
        >
            {children}
        </motion.div>
    );
}

export default AnimatedSection;