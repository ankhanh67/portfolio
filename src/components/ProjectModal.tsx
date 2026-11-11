import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight, Layers, Cpu, Database, AlertCircle, TrendingUp, Sparkles } from 'lucide-react';
import { CaseStudy } from '../data/portfolioData';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#0c0e14] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 text-slate-800 dark:text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-12 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 dark:text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Top Quantitative Key Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 mb-8">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">
                {metric.label}
              </span>
              <span className="font-mono font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Deep Dive Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed">
          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-base text-slate-950 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500" />
              <span>Problem Statement & Business Motivation</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 bg-amber-50/50 dark:bg-amber-950/20 p-4 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              {project.problem}
            </p>
          </div>

          {/* Role & Contributions */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-base text-slate-950 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span>My Role & Contributions</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {project.role}
            </p>
          </div>

          {/* Technical Approach & Implementation */}
          <div className="space-y-2">
            <h3 className="font-display font-semibold text-base text-slate-950 dark:text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span>Technical Approach & Implementation</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              {project.approach}
            </p>
          </div>

          {/* System Architecture Steps (if available) */}
          {project.architectureSteps && (
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-base text-slate-950 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-500" />
                <span>End-to-End System Architecture</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architectureSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                      <span>Step {step.step}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold">{step.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes & Findings */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-base text-slate-950 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span>Measurable Outcomes & Key Insights</span>
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 italic">
              <strong>Key finding:</strong> {project.findings}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Technologies & Tools Used
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
