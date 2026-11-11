import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sliders, ExternalLink, Activity, Sparkles, Layers } from 'lucide-react';
import { PORTFOLIO_DATA, CaseStudy } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  // Interactive state for Project 2's inline price elasticity simulator
  const [testPriceAdjustment, setTestPriceAdjustment] = useState<number>(5); // +5%

  const categories = ['All', 'AI & Machine Learning', 'Business Analytics', 'Product Systems'];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>Applied Case Studies</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-950 dark:text-white tracking-tight">
              Where Theory Becomes Code
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Demonstrating the bridge between commercial problems and technical execution through concrete data science and analytical systems.
            </p>
          </div>

          {/* Interactive Filter Tabs (functional button elements per design constitution) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-950 dark:text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Showcase Layouts */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            // Layout 1: Large Visual Hero Showcase (Featured)
            if (project.layoutType === 'large-hero') {
              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
                >
                  <div className="p-8 sm:p-10 space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                          <span>{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>Featured Case Study</span>
                        </div>
                        <h3 className="font-display font-bold text-2xl sm:text-4xl text-slate-950 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                          {project.subtitle}
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-slate-950 text-white dark:bg-amber-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto cursor-pointer"
                      >
                        <span>Examine Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-4xl">
                      {project.problem}
                    </p>

                    {/* Architecture Steps preview */}
                    {project.architectureSteps && (
                      <div className="pt-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                          Pipeline Flow
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                          {project.architectureSteps.map((step, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80"
                            >
                              <div className="text-xs font-mono text-amber-600 dark:text-amber-400 mb-1">
                                Step {step.step}
                              </div>
                              <div className="font-semibold text-xs text-slate-900 dark:text-white mb-0.5">
                                {step.title}
                              </div>
                              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                {step.desc}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Metrics Row */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-6">
                      <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="space-y-0.5">
                            <span className="text-[11px] font-mono text-slate-400 block">
                              {m.label}
                            </span>
                            <span className="font-mono font-bold text-lg text-slate-900 dark:text-white">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                        <span>Stack:</span>
                        <span>{project.techStack.join(' · ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 2: Split-Screen Technical Workbench with live elasticity slider
            if (project.layoutType === 'split-screen') {
              // Simulated dynamic outcome
              const simulatedMarginShift = (testPriceAdjustment * 0.72).toFixed(1);
              const simulatedVolumeShift = (-testPriceAdjustment * 0.58).toFixed(1);
              const simulatedNetRevenue = (Number(simulatedMarginShift) + Number(simulatedVolumeShift) * 0.3).toFixed(1);

              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs p-8 sm:p-10"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>Econometric Optimization</span>
                      </div>
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.problem}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        <strong>Approach:</strong> {project.approach}
                      </p>

                      <div className="flex flex-wrap gap-6 pt-2">
                        {project.metrics.map((m, i) => (
                          <div key={i}>
                            <span className="text-[11px] font-mono text-slate-400 block">
                              {m.label}
                            </span>
                            <span className="font-mono font-bold text-base text-slate-900 dark:text-white">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                        >
                          <span>Read full methodology & code details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Right Interactive Elasticity Simulation Box */}
                    <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                          Price Elasticity Calculator
                        </span>
                        <span className="text-[10px] font-mono text-blue-500">Live Model</span>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-slate-600 dark:text-slate-400">Simulate Price Shift</span>
                          <span className="font-bold text-slate-900 dark:text-white">
                            {testPriceAdjustment > 0 ? `+${testPriceAdjustment}%` : `${testPriceAdjustment}%`}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={-15}
                          max={15}
                          step={1}
                          value={testPriceAdjustment}
                          onChange={(e) => setTestPriceAdjustment(Number(e.target.value))}
                          className="w-full accent-blue-600 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                          <span>-15% Discount</span>
                          <span>Baseline 0%</span>
                          <span>+15% Premium</span>
                        </div>
                      </div>

                      {/* Calculated Response */}
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Expected Volume Elasticity:</span>
                          <span className={`font-mono font-semibold ${Number(simulatedVolumeShift) >= 0 ? 'text-emerald-600' : 'text-slate-700 dark:text-slate-300'}`}>
                            {simulatedVolumeShift}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Unit Margin Impact:</span>
                          <span className={`font-mono font-semibold ${Number(simulatedMarginShift) >= 0 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {Number(simulatedMarginShift) > 0 ? `+${simulatedMarginShift}%` : `${simulatedMarginShift}%`}
                          </span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                          <span className="font-medium text-slate-900 dark:text-white">Net Gross Profit Lift:</span>
                          <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                            {Number(simulatedNetRevenue) > 0 ? `+${simulatedNetRevenue}%` : `${simulatedNetRevenue}%`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Layout 3 & 4: Compact Editorial Showcase & Operations Research
            return (
              <div
                key={project.id}
                className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Operational Efficiency</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap self-start md:self-auto cursor-pointer"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                  {project.problem}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[11px] font-mono text-slate-400 block">
                        {m.label}
                      </span>
                      <span className="font-mono font-bold text-base text-slate-900 dark:text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Full Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
