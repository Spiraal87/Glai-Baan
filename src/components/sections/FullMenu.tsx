'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { menuTabs, menuData, type MenuTab } from '@/data/menu';
import FadeInSection from '@/components/ui/FadeInSection';

export default function FullMenu() {
  const [activeTab, setActiveTab] = useState<MenuTab>('smallPlates');

  const items = menuData[activeTab];

  return (
    <section
      id="menu"
      className="py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "#2a1f1a" }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeInSection className="text-center mb-12">
          <h2 className="font-display text-4xl text-cream mb-3">
            Full Menu
          </h2>
          <p className="text-cream/60 text-lg">
            Authentic Thai street food crafted with care
          </p>
        </FadeInSection>

        {/* Tab Bar */}
        <div className="flex flex-wrap gap-8 border-b border-gold/20 mb-8">
          {menuTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 text-sm uppercase tracking-widest font-body transition-colors ${
                activeTab === tab.id
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-cream/60 hover:text-cream/90'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {items.map((item, index) => (
            <div key={`${activeTab}-${index}`} className="pb-6">
              <div className="flex justify-between items-start gap-4 mb-2">
                <div className="flex-1">
                  <h3 className="font-display text-cream">{item.name}</h3>
                  <p className="text-cream/60 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
                <span className="text-gold font-semibold shrink-0">
                  {item.price}
                </span>
              </div>

              {/* Badges */}
              <div className="flex gap-2 items-center">
                {item.isGlutenFree && (
                  <span className="bg-red-deep/80 text-cream text-xs px-2 py-0.5 rounded-sm">
                    GF
                  </span>
                )}
                {item.spiceLevel > 0 && (
                  <span className="text-sm">
                    {'🌶'.repeat(item.spiceLevel)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
