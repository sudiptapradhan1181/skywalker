'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_TABS } from '@/constants';
import ExpDetails from '../ExpDetails.jsx';

export default function VerticalTabsWithMarker() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-row h-auto w-full justify-center">
      <div className="relative w-1/4 py-4 pl-1 flex flex-col">
        <div
          className={`absolute z-2 left-0 w-[2px] bg-secondarybg h-[200px]`}
        />
        <motion.div
          className="absolute z-3 left-0 w-[2px] h-[40px] bg-primary rounded-full"
          initial={false}
          animate={{
            y: (activeTab - 1) * 40,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
        {EXPERIENCE_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-left h-[40px] text-[13px] transition-colors relative hover:bg-secondarybg ${
              activeTab === tab.id ? 'text-primary' : 'text-medium'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-3/4 py-4">
        <AnimatePresence mode="wait">
          {EXPERIENCE_TABS.filter((tab) => tab.id === activeTab).map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="text-secondary px-6"
            >
              <ExpDetails
                title={tab.title}
                company={tab.label}
                date={tab.date}
                details={tab.details}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
