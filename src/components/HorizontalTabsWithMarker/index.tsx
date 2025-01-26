'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE_TABS } from '@/constants';
import ExpDetails from '../ExpDetails.jsx';

export default function HorizontalTabsWithMarker() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex flex-col h-auto w-full">
      <div className="flex flex-row w-full overflow-x-auto no-scrollbar">
        <div className="relative w-[600px] py-4 pl-1 flex flex-row">
          {EXPERIENCE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center text-left h-[40px] w-[120px] text-[13px] transition-colors relative hover:bg-secondarybg ${
                activeTab === tab.id ? 'text-primary' : 'text-medium'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <motion.div
            className="absolute z-3 bottom-0 left-0 h-[4px] w-[120px] bg-primary rounded-full"
            initial={false}
            animate={{
              x: (activeTab - 1) * 120,
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
          <div
            className={`absolute z-2 bottom-0 left-0 h-[2px] bg-secondarybg w-full`}
          />
        </div>
      </div>

      <div className="w-full py-4">
        <AnimatePresence mode="wait">
          {EXPERIENCE_TABS.filter((tab) => tab.id === activeTab).map((tab) => (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
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
