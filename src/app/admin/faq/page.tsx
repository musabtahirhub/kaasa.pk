'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import { FAQS, FAQItem } from '@/lib/constants';
import { Plus, Trash2, Edit2, Check } from 'lucide-react';

export default function AdminFAQPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>(FAQS);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion || !newAnswer) return;
    setFaqs([
      ...faqs,
      { question: newQuestion, answer: newAnswer, category: 'general' }
    ]);
    setNewQuestion('');
    setNewAnswer('');
  };

  const handleDelete = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AdminHeader title="FAQ Manager" />

      <div className="p-8 max-w-5xl mx-auto space-y-8">
        {/* Add Form */}
        <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-4">
          <h3 className="text-lg font-heading font-semibold text-kaasa-text flex items-center gap-2">
            <Plus className="w-5 h-5 text-kaasa-gold" /> Add New FAQ
          </h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-kaasa-textMuted uppercase mb-1">Question</label>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="e.g. What is the estimated delivery time for Karachi?"
                className="w-full px-4 py-2.5 rounded-lg bg-kaasa-dark border border-kaasa-border text-kaasa-text text-sm focus:border-kaasa-gold outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-kaasa-textMuted uppercase mb-1">Answer</label>
              <textarea
                rows={3}
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                placeholder="e.g. Delivery to Karachi takes 5-7 business days via white-glove transport."
                className="w-full px-4 py-2.5 rounded-lg bg-kaasa-dark border border-kaasa-border text-kaasa-text text-sm focus:border-kaasa-gold outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-kaasa-gold text-kaasa-dark font-semibold text-sm hover:bg-kaasa-goldHover transition-colors"
            >
              Add FAQ Entry
            </button>
          </form>
        </div>

        {/* Existing FAQs */}
        <div className="p-6 rounded-2xl bg-kaasa-card border border-kaasa-border space-y-4">
          <h3 className="text-lg font-heading font-semibold text-kaasa-text">Existing FAQs ({faqs.length})</h3>
          <div className="divide-y divide-kaasa-border">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-kaasa-text">{faq.question}</h4>
                  <p className="text-xs text-kaasa-textMuted">{faq.answer}</p>
                </div>
                <button
                  onClick={() => handleDelete(index)}
                  className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
