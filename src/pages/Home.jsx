import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import { motion } from 'framer-motion';

import React from 'react'

export default function Home() {
    {/* 2 components in one Home */ }
    return (
        <motion.div>
            <Popular />
            <Veggie />
        </motion.div>
    )
}
