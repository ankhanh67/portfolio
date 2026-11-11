import React, { useState, useMemo } from 'react';
import { Terminal, Database, Cpu, Layers, Play, CheckCircle2, Sliders } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ChapterTwo: React.FC = () => {
  const chapter = PORTFOLIO_DATA.chapters.chapter2;

  // Interactive Machine Learning Pipeline Simulator State
  const [modelType, setModelType] = useState<'logistic' | 'random_forest' | 'lightgbm'>('lightgbm');
  const [featureCount, setFeatureCount] = useState<number>(38);
  const [threshold, setThreshold] = useState<number>(0.45);

  // Computed metrics based on interactive controls
  const simulatedResults = useMemo(() => {
    let baseAuc = 0.72;
    let baseRecall = 0.65;
    let baseLatency = 3.5;

    if (modelType === 'random_forest') {
      baseAuc = 0.79;
      baseRecall = 0.74;
      baseLatency = 14.2;
    } else if (modelType === 'lightgbm') {
      baseAuc = 0.85;
      baseRecall = 0.82;
      baseLatency = 6.8;
    }

    // Feature depth bonus
    const featureScale = (featureCount - 10) / 30; // 0 to ~1
    const auc = Math.min(0.96, baseAuc + featureScale * 0.08);

    // Threshold sensitivity
    // Lower threshold flags more churners (higher recall, lower precision)
    const thresholdFactor = (0.7 - threshold) * 0.5;
    const recall = Math.min(0.95, Math.max(0.5, baseRecall + thresholdFactor));
    const precision = Math.max(0.45, Math.min(0.92, 0.78 - thresholdFactor * 0.8));

    // Simulated cohort: 10,000 customers, 500 potential churners ($120 average monthly value)
    const totalPotentialChurners = 500;
    const identifiedChurners = Math.round(totalPotentialChurners * recall);
    const retentionRate = 0.35; // typical intervention save rate
    const savedCustomers = Math.round(identifiedChurners * retentionRate);
    const annualValuePerCust = 120 * 12; // $1,440
    const estimatedSavedRevenue = savedCustomers * annualValuePerCust;

    return {
      auc: auc.toFixed(3),
      precision: `${Math.round(precision * 100)}%`,
      recall: `${Math.round(recall * 100)}%`,
      identifiedChurners,
      savedRevenue: `$${(estimatedSavedRevenue / 1000).toFixed(1)}k`,
      latency: `${(baseLatency + (featureCount / 10) * 0.8).toFixed(1)} ms`
    };
  }, [modelType, featureCount, threshold]);

  return (
    <article className="relative py-20 border-t border-slate-200/70 dark:border-slate-800/70 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
              <span>Chapter {chapter.number}</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>{chapter.kicker}</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-950 dark:text-white tracking-tight text-balance">
              {chapter.title}
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400 shrink-0">
            Phase 2 / 3 · The Engine
          </p>
        </div>

        {/* Narrative & Visual Lead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xl sm:text-2xl font-display font-medium text-slate-900 dark:text-slate-100 leading-snug tracking-tight">
              {chapter.lead}
            </p>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {chapter.narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Technical Milestones Evolution */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs uppercase font-mono tracking-wider text-slate-400 dark:text-slate-500">
                Progression of Technical Capabilities
              </h3>
              <div className="space-y-3">
                {chapter.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                        {milestone.title}
                      </span>
                      <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {milestone.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual and Technical Simulator */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Media */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-[4/3] bg-slate-950 shadow-sm group">
              <img
                src={chapter.image}
                alt="Data Science & Machine Learning Workbench"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                  Data Pipeline Architecture
                </span>
                <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                  Feature engineering, model training, evaluation & latency optimization.
                </p>
              </div>
            </div>

            {/* Interactive Workbench: Tuning the Business-ML Tradeoff */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-500" />
                  <span className="font-display font-semibold text-sm text-slate-900 dark:text-white">
                    Interactive ML Pipeline Lab
                  </span>
                </div>
                <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">
                  Live Simulation
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                Test how algorithmic decisions directly affect enterprise ROI:
              </p>

              {/* Controls */}
              <div className="space-y-3.5 mb-5 text-xs">
                {/* Algorithm Selector */}
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    Model Algorithm
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => setModelType('logistic')}
                      className={`px-2 py-1.5 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                        modelType === 'logistic'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      Logistic Reg.
                    </button>
                    <button
                      onClick={() => setModelType('random_forest')}
                      className={`px-2 py-1.5 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                        modelType === 'random_forest'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      Random Forest
                    </button>
                    <button
                      onClick={() => setModelType('lightgbm')}
                      className={`px-2 py-1.5 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                        modelType === 'lightgbm'
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      LightGBM (Grad. Boost)
                    </button>
                  </div>
                </div>

                {/* Feature Depth Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-500">Engineered Features</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{featureCount} features</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={2}
                    value={featureCount}
                    onChange={(e) => setFeatureCount(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                </div>

                {/* Decision Threshold Slider */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-slate-500">Decision Threshold</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{threshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={0.3}
                    max={0.7}
                    step={0.05}
                    value={threshold}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-0.5">
                    <span>Aggressive (High Recall)</span>
                    <span>Conservative (High Precision)</span>
                  </div>
                </div>
              </div>

              {/* Reactive Model Output Scoreboard */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Simulation Outputs (Cohort: 10,000 Users)
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">AUC-ROC Score</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                      {simulatedResults.auc}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Inference Latency</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                      {simulatedResults.latency}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">At-Risk Churners Flagged</span>
                    <span className="font-mono font-bold text-blue-600 dark:text-blue-400 text-sm">
                      {simulatedResults.identifiedChurners} / 500
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Est. Revenue Preserved</span>
                    <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                      {simulatedResults.savedRevenue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
