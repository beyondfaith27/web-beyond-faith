"use client"

import { useHoverHighlightContext } from '@/app/home/HoverHighlightProvider'
import React from 'react'
import { motion } from 'motion/react'
import { cj } from '@/lib/utils'

const ConcernsHoverText = ({ concerns }) => {
    const [hoveredItem, setHoveredItem] = useHoverHighlightContext()

    return (
        <>{concerns.map((each, idx) => {
            const isItemHovered = each.text === hoveredItem

            return (
                <span
                    onMouseEnter={() => setHoveredItem(each.text)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className='inline-block whitespace-nowrap' key={each.text}>
                    <motion.span className={cj("font-bold relative inline-block mx-1", isItemHovered && "text-primary")}>
                        {each.text}
                        <motion.span animate={{ scale: isItemHovered ? 1 : 0 }} transition={{ delay: 0.1 }} className='absolute origin-bottom-left -bottom-0 left-0 h-0.5 w-full inline-block bg-primary' />
                    </motion.span>
                    {idx === concerns - 1
                        ? " "
                        : ", "}
                </span>
            )
        })}</>
    )
}

export default ConcernsHoverText