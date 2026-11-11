import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [visitorRole, setVisitorRole] = useState<'admissions' | 'recruiter' | 'collaborator'>('admissions');
  const [customNote, setCustomNote] = useState('');

  const contact = PORTFOLIO_DATA.contact;

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubjectLine = () => {
    if (visitorRole === 'admissions') return 'SMU MITB Inquiry / Candidacy Discussion — An Khanh';
    if (visitorRole === 'recruiter') return 'Professional Opportunity / Discussion — An Khanh';
    return 'Connecting regarding Business & Technology / Project Discussion';
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getSubjectLine());
    const body = encodeURIComponent(
      customNote ||
        `Hi Khanh,\n\nI reviewed your portfolio for the SMU Master of IT in Business program and would like to connect with you regarding...\n\nBest regards,`
    );
    return `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/70 dark:border-slate-800/70 bg-[#fbfbfb] dark:bg-[#07090e]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Expressive Closing Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Oversized typography statement and direct contact links */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400">
                <span>The Closing Chapter</span>
                <span aria-hidden="true">·</span>
                <span>Get In Touch</span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-slate-950 dark:text-white tracking-tight leading-[1.05] text-balance">
                Let's bridge the next frontier together.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed pt-2 max-w-xl">
                {contact.subheading}
              </p>
            </div>

            {/* Prominent Clickable Email Card with Copy Trigger */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Direct Contact
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors break-all"
                >
                  {contact.email}
                </a>

                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0 self-start sm:self-auto cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links & Candidacy Profile */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Profiles & Networks
              </span>
              <div className="flex flex-wrap gap-4">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Message Builder */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-amber-500" />
                <h3 className="font-display font-semibold text-base text-slate-900 dark:text-white">
                  Send a Structured Note
                </h3>
              </div>
              <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                1-Click Dispatch
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Select your context to automatically configure the email subject and template:
            </p>

            {/* Role / Context Tabs */}
            <div className="grid grid-cols-3 gap-1.5 text-xs">
              <button
                onClick={() => setVisitorRole('admissions')}
                className={`p-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                  visitorRole === 'admissions'
                    ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                SMU MITB
              </button>
              <button
                onClick={() => setVisitorRole('collaborator')}
                className={`p-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                  visitorRole === 'collaborator'
                    ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Collaborator
              </button>
              <button
                onClick={() => setVisitorRole('recruiter')}
                className={`p-2 rounded-lg font-medium text-center transition-colors cursor-pointer ${
                  visitorRole === 'recruiter'
                    ? 'bg-slate-900 text-white dark:bg-amber-500 dark:text-slate-950 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Industry
              </button>
            </div>

            {/* Message Area */}
            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                Note / Questions (Optional)
              </label>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder="Share any thoughts, questions regarding my projects, or an invitation to connect..."
                rows={4}
                className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
              />
            </div>

            {/* Dispatch Button */}
            <a
              href={getMailtoUrl()}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-slate-950 dark:bg-amber-500 dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-amber-400 transition-colors shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in Mail Client</span>
            </a>

            <div className="text-[11px] text-slate-400 dark:text-slate-500 text-center">
              Pre-populates an email directly to <span className="text-slate-600 dark:text-slate-300 font-mono">{contact.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
