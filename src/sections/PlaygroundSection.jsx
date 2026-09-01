import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Play, RotateCcw, Check, Sparkles, Cpu, Send, RefreshCw } from 'lucide-react';
import { EXPERIMENTS } from '../data/playground';

export default function PlaygroundSection() {
  // Live Interactive State 1: Code Sandbox
  const [code, setCode] = useState(`// Saif's Quick Function Test
function calcPerformance(requests, latencyMs) {
  const throughput = Math.round(requests / (latencyMs / 1000));
  return { status: "OPTIMAL", throughput: \`\${throughput} req/s\` };
}

calcPerformance(12500, 250);`);
  const [codeOutput, setCodeOutput] = useState(`{ status: "OPTIMAL", throughput: "50000 req/s" }`);
  const [isExecuting, setIsExecuting] = useState(false);

  const runCode = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setCodeOutput(`{ status: "OPTIMAL", throughput: "50000 req/s", timestamp: "${new Date().toLocaleTimeString()}" }`);
      setIsExecuting(false);
    }, 400);
  };

  // Live Interactive State 2: Stock Predictor Simulation
  const [stock, setStock] = useState(120);
  const [demandRate, setDemandRate] = useState(15);
  const daysUntilStockout = Math.max(0, Math.floor(stock / demandRate));

  // Live Interactive State 3: API Tester Simulation
  const [apiMethod, setApiMethod] = useState('GET');
  const [apiEndpoint, setApiEndpoint] = useState('/api/v1/analytics');
  const [apiResponse, setApiResponse] = useState({ status: 200, message: 'OK', latency: '42ms' });
  const [apiLoading, setApiLoading] = useState(false);

  const triggerApi = () => {
    setApiLoading(true);
    setTimeout(() => {
      setApiResponse({
        status: 200,
        message: 'Request successful',
        latency: `${Math.floor(Math.random() * 30 + 20)}ms`,
        payload: { user: 'Saif Mithani', role: 'Full Stack Dev', active: true }
      });
      setApiLoading(false);
    }, 350);
  };

  return (
    <section id="playground" className="py-28 px-6 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-cyan-400" />
              <span className="text-xs font-mono font-semibold tracking-widest text-cyan-400 uppercase">
                05 // DEVELOPER PLAYGROUND
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-zinc-100 tracking-tight">
              THINGS I LIKE BUILDING
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-400 max-w-md">
            Interactive micro-experiments and developer tooling concepts demonstrating functional software logic.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Widget 1: Interactive Live Code Sandbox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-2xl bg-[#121218] border border-white/10 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-zinc-200">LIVE JAVASCRIPT SANDBOX</span>
                </div>
                <button
                  onClick={runCode}
                  disabled={isExecuting}
                  data-cursor="RUN"
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyan-400 text-zinc-950 font-mono text-xs font-bold hover:bg-cyan-300 transition-colors"
                >
                  {isExecuting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isExecuting ? 'EVALUATING...' : 'RUN CODE'}</span>
                </button>
              </div>

              {/* Code Area */}
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-36 bg-[#0a0a0e] text-cyan-200 font-mono text-xs p-4 rounded-xl border border-white/5 focus:border-cyan-400/50 outline-none resize-none"
              />

              {/* Terminal Output */}
              <div className="mt-4 p-4 rounded-xl bg-[#08080a] border border-white/5 font-mono text-xs">
                <div className="text-zinc-500 text-[10px] uppercase mb-1">// EXECUTION OUTPUT</div>
                <pre className="text-emerald-400 whitespace-pre-wrap">{codeOutput}</pre>
              </div>
            </div>
            <div className="pt-4 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>EXPERIMENT 01 // CODE EVALUATOR</span>
              <span className="text-cyan-400">REALTIME JS</span>
            </div>
          </motion.div>

          {/* Widget 2: Inventory Stock Predictor Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl bg-[#121218] border border-white/10 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/5">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">STOCKOUT ALGORITHM SIMULATOR</span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>CURRENT INVENTORY STOCK:</span>
                    <span className="text-amber-300 font-bold">{stock} UNITS</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>DAILY DEMAND RATE:</span>
                    <span className="text-amber-300 font-bold">{demandRate} UNITS/DAY</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={demandRate}
                    onChange={(e) => setDemandRate(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-center">
                  <span className="text-[10px] font-mono text-amber-400 uppercase block">PREDICTED STOCKOUT IN</span>
                  <span className="text-3xl font-display font-extrabold text-amber-200">{daysUntilStockout} DAYS</span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>EXPERIMENT 02 // INVENTRA ALGORITHM</span>
              <span className="text-amber-400">PREDICTIVE LOGIC</span>
            </div>
          </motion.div>

          {/* Widget 3: Mock REST API Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-12 rounded-2xl bg-[#121218] border border-white/10 p-6"
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-zinc-200">MOCK REST API ENDPOINT INSPECTOR</span>
              </div>
              <button
                onClick={triggerApi}
                disabled={apiLoading}
                data-cursor="TEST API"
                className="px-4 py-1.5 rounded bg-emerald-400 text-zinc-950 font-mono text-xs font-bold hover:bg-emerald-300 transition-colors flex items-center gap-2"
              >
                <span>{apiLoading ? 'DISPATCHING...' : 'SEND API REQUEST'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 bg-[#0a0a0e] p-3 rounded-lg border border-white/5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{apiMethod}</span>
                  <span className="text-zinc-300">{apiEndpoint}</span>
                </div>
                <div className="text-[11px] text-zinc-500">
                  Headers: Authorization: Bearer mock_token_97
                </div>
              </div>

              <div className="md:col-span-7 p-4 rounded-xl bg-[#08080a] border border-white/5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-2">
                  <span>RESPONSE BODY</span>
                  <span className="text-emerald-400 font-bold">STATUS: 200 OK — LATENCY: {apiResponse.latency}</span>
                </div>
                <pre className="text-zinc-200 overflow-x-auto">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
