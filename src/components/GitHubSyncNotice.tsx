"use client";

import React, { useState } from "react";
import { AlertCircle, Terminal, X } from "lucide-react";

export default function GitHubSyncNotice() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md bg-neutral-900 border border-amber-500/40 rounded-2xl p-4 shadow-2xl text-white backdrop-blur-md animate-fade-in">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 text-amber-400 font-medium text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>GitHub Connection Notice</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="text-xs text-neutral-300 leading-relaxed mb-3">
        The background automated push to GitHub timed out due to network restrictions (`port 443`). Your code changes are saved safely in your workspace. You can easily push them manually anytime by running:
      </p>
      <div className="bg-neutral-950 rounded-lg p-2.5 font-mono text-xs text-amber-300 flex items-center justify-between border border-neutral-800">
        <span>git push origin main</span>
        <Terminal className="w-3.5 h-3.5 text-neutral-500" />
      </div>
    </div>
  );
}