"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, Printer, ShieldCheck, Truck, PhoneCall, 
  MapPin, ArrowRight, CheckCircle2, ChevronDown, 
  Star, Quote, Leaf, Zap, BarChart3, 
  Calculator, ShoppingBag, Coffee, Factory, Cpu, 
  Recycle, HeartHandshake, Layers, Sparkles
} from 'lucide-react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Calculator States
  const [calcLength, setCalcLength] = useState<number>(10);
  const [calcWidth, setCalcWidth] = useState<number>(10);
  const [calcHeight, setCalcHeight] = useState<number>(10);
  const [calcPly, setCalcPly] = useState<number>(3);
  const [calcPrint, setCalcPrint] = useState<boolean>(false);
  const [calcQty, setCalcQty] = useState<number>(500);
  const [estimatedPrice, setEstimatedPrice] = useState<string>("0");
  
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  useEffect(() => {
    // Simple estimation logic for demonstration
    let baseArea = ((calcLength + calcWidth) * (calcWidth + calcHeight)) / 100;
    if (calcPly === 5) baseArea *= 1.5;
    if (calcPly === 7) baseArea *= 2.2;
    if (calcPrint) baseArea += 5; 
    let total = baseArea * calcQty;
    if (calcQty >= 1000) total *= 0.85;
    setEstimatedPrice((total * 1.2).toFixed(0));
  }, [calcLength, calcWidth, calcHeight, calcPly, calcPrint, calcQty]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/30">
              A
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-800">
              AKSHAR<span className="text-blue-600">PACKAGING</span>
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600 text-sm xl:text-base">
            <a href="#home" className="hover:text-blue-600 transition">Home</a>
            <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
            <a href="#calculator" className="hover:text-blue-600 transition">Calculator</a>
            <a href="#sustainability" className="hover:text-blue-600 transition">Sustainability</a>
            <a href="#contact" className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-md">
              Get Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 w-full h-full overflow-hidden -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-[#fafcff] to-[#fafcff]">
          <motion.div 
            animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-[100px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 font-semibold text-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              World-Class Packaging Solutions
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6">
              Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500">Packaging</span> For Modern Brands
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 font-light">
              Elevate your brand's unboxing experience. We engineer premium corrugated boxes, customized precisely for your industry, delivering sustainability and strength.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#calculator" className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all duration-300">
                Calculate Price <Calculator size={20} />
              </a>
              <div className="flex items-center gap-4 ml-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                      <Star className="w-5 h-5 text-slate-400" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-slate-900">500+ Clients</p>
                  <p className="text-slate-500">Trust our quality</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[650px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl border border-slate-100 shadow-2xl p-10 flex flex-col justify-between z-20"
              >
                <div className="flex justify-between items-start">
                  <div className="w-16 h-16 bg-blue-600/10 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Package className="w-8 h-8" />
                  </div>
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1">
                    <Leaf size={12} /> 100% RECYCLABLE
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Mailer Box</h3>
                  <p className="text-slate-500 text-sm">Matte finish • Custom Dimensions</p>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [12, 14, 12] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 top-1/4 w-40 bg-white/90 backdrop-blur rounded-2xl border border-slate-100 shadow-xl p-5 z-30"
              >
                <Printer className="text-blue-500 w-8 h-8 mb-3" />
                <span className="block text-sm font-bold text-slate-900">HD Printing</span>
                <span className="block text-xs text-slate-500">Custom Branding</span>
              </motion.div>

              <motion.div 
                animate={{ y: [-5, 15, -5], rotate: [-8, -10, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-8 bottom-1/4 w-48 bg-slate-900 rounded-2xl shadow-xl p-5 z-30"
              >
                <ShieldCheck className="text-emerald-400 w-8 h-8 mb-3" />
                <span className="block text-sm font-bold text-white">Heavy Duty Board</span>
                <span className="block text-xs text-slate-400">Extreme load tested</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Ticker */}
      <div className="border-y border-slate-200 bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 font-semibold uppercase tracking-widest whitespace-nowrap">Trusted By Industry Leaders</p>
          <div className="flex gap-12 text-slate-300 font-bold text-xl md:text-2xl items-center opacity-70 justify-center flex-wrap">
            <span>TechCorp</span>
            <span>GlobalLogistics</span>
            <span>FoodBox</span>
            <span>FashionStyle</span>
            <span>MediPack</span>
          </div>
        </div>
      </div>

      {/* NEW: Industries We Serve */}
      <section id="industries" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-400 font-bold tracking-wide uppercase mb-3">Industries We Serve</h2>
            <h3 className="text-4xl lg:text-5xl font-black mb-6">Specialized Packaging for Every Sector</h3>
            <p className="text-slate-400 text-lg">We understand that a food box requires different engineering than an electronics box. Explore our industry-tailored solutions.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShoppingBag, title: "E-Commerce", desc: "Lightweight, theft-deterrent, and designed for an unforgettable unboxing experience." },
              { icon: Coffee, title: "Food & Beverage", desc: "Food-grade compliant, moisture-resistant, and structural integrity for transport." },
              { icon: Factory, title: "Industrial Goods", desc: "Multi-wall heavy-duty board capable of withstanding massive pallet loads." },
              { icon: Cpu, title: "Electronics", desc: "Anti-static finishes, custom foam inserts, and extreme shock absorption." }
            ].map((industry, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
                <industry.icon className="text-blue-400 w-10 h-10 mb-6" />
                <h4 className="text-xl font-bold mb-3">{industry.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">{industry.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Gallery */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase mb-3">Our Core Manufacturing</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Akshar Packaging Products</h3>
            <p className="text-slate-600 text-lg">As a dedicated manufacturer, we specialize in heavy-duty corrugated products, high-quality printing, and custom punch designs for industrial and commercial use.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { name: "Standard Brown Boxes (RSC)", desc: "Universal 3-Ply, 5-Ply, and 7-Ply corrugated boxes. The industry standard for safe shipping, moving, and bulk storage.", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80" },
              { name: "Multi-Color Printed Cartons", desc: "Customized offset and flexo printed corrugated boxes with vibrant colors and patterns to enhance your brand visibility.", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" },
              { name: "Die-Cut Corrugated Boxes", desc: "Custom-shaped interlocking boxes, pizza boxes, and display cartons manufactured with highly precise die-punching machines.", img: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80" },
              { name: "Corrugated Rolls & Sheets", desc: "Heavy-duty 2-Ply corrugated rolls and cut sheets used for inner wrapping, cushioning, and pallet layer pads.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" }
            ].map((product, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h4>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{product.desc}</p>
                  <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Get Pricing
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Step-by-Step How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase mb-3">Process</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">How It Works</h3>
            <p className="text-slate-600 text-lg">Custom packaging doesn't have to be complicated. Our streamlined process gets you from idea to delivery in days.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-1 bg-blue-100 -z-0"></div>
            
            {[
              { step: "01", title: "Configure Specs", desc: "Select your dimensions, ply thickness, and box style online or with our team." },
              { step: "02", title: "Submit Artwork", desc: "Upload your brand logo and design assets for high-definition custom printing." },
              { step: "03", title: "Prototype & Approve", desc: "Review a 3D or physical prototype to ensure structural integrity and print quality." },
              { step: "04", title: "Production & Delivery", desc: "We manufacture at scale and deliver directly to your warehouse or fulfillment center." }
            ].map((step, idx) => (
              <motion.div key={idx} variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="relative z-10 text-center">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-500 rounded-full flex items-center justify-center text-2xl font-black text-blue-600 shadow-xl mb-6">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Instant Pricing Calculator */}
      <section id="calculator" className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">Instant Pricing Calculator</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed font-light">
              Don't wait days for an estimate. Enter your required dimensions and specifications below to get an immediate, real-time pricing estimate for your custom corrugated boxes.
            </p>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center gap-3"><CheckCircle2 className="text-blue-300" /> Transparent Pricing structure</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="text-blue-300" /> Bulk discounts automatically applied</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="text-blue-300" /> No hidden die-cut charges for standard sizes</div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2"><Calculator className="text-blue-600" /> Estimate Tool</h3>
            
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Length (cm)</label>
                  <input type="number" min="5" max="100" value={calcLength} onChange={(e) => setCalcLength(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Width (cm)</label>
                  <input type="number" min="5" max="100" value={calcWidth} onChange={(e) => setCalcWidth(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Height (cm)</label>
                  <input type="number" min="5" max="100" value={calcHeight} onChange={(e) => setCalcHeight(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Board Strength</label>
                  <select value={calcPly} onChange={(e) => setCalcPly(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                    <option value={3}>3-Ply (Standard)</option>
                    <option value={5}>5-Ply (Heavy)</option>
                    <option value={7}>7-Ply (Industrial)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Quantity</label>
                  <input type="number" min="100" step="100" value={calcQty} onChange={(e) => setCalcQty(Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
              </div>

              <div className="flex items-center gap-3 py-2 border-y border-slate-100 mt-2">
                <input type="checkbox" id="print" checked={calcPrint} onChange={(e) => setCalcPrint(e.target.checked)} className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
                <label htmlFor="print" className="font-medium text-slate-700">Include Custom Multi-Color Printing</label>
              </div>

              <div className="pt-4 bg-slate-50 rounded-xl p-6 border border-slate-100 flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase">Estimated Total</p>
                  <p className="text-xs text-slate-400 mt-1">Excludes shipping & taxes</p>
                </div>
                <div className="text-4xl font-black text-blue-600">
                  ₹{estimatedPrice}
                </div>
              </div>
              
              <a href="#contact" className="block w-full text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition-colors shadow-lg mt-4">
                Lock in this Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Sustainability Section */}
      <section id="sustainability" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <div className="relative w-full aspect-square rounded-full bg-emerald-50 flex items-center justify-center p-12 border border-emerald-100">
              <div className="absolute inset-0 border-2 border-emerald-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-emerald-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="text-center">
                <Recycle className="w-24 h-24 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-3xl font-black text-emerald-900">100%</h3>
                <p className="font-bold text-emerald-700 tracking-widest uppercase">Recyclable</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 font-bold text-sm mb-6 border border-emerald-100">
              <Leaf size={16} /> Commitment to the Planet
            </div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 text-slate-900">Sustainable Packaging For a Greener Future.</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-light">
              Modern brands demand modern responsibility. All Akshar Packaging corrugated materials are sourced from managed forests, crafted using eco-friendly adhesives, and are 100% biodegradable and recyclable.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Sparkles className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Eco-Inks</h4>
                  <p className="text-sm text-slate-600">Water-based, non-toxic inks for safe disposal.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Layers className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Kraft Paper</h4>
                  <p className="text-sm text-slate-600">High-recycled content kraft paper.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our products and processes.</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "What is your minimum order quantity (MOQ)?", a: "Our minimum order quantity depends on the type of box and customization required. For standard corrugated boxes, the MOQ is typically lower, while custom-printed designs may require a higher initial run to be cost-effective. Contact us for specifics." },
              { q: "Do you offer custom printing and branding?", a: "Yes, absolutely! We offer high-quality multi-color printing directly onto your boxes. You can share your logo and brand colors with us, and we'll ensure they look vibrant and professional." },
              { q: "How long does production usually take?", a: "Standard box orders are typically processed within 3-5 business days. For custom printed or uniquely sized boxes, production usually takes 7-10 business days after artwork approval." },
              { q: "Can you help design the box structure for my product?", a: "Yes, our team can help engineer a custom box insert or structure specifically tailored to protect your unique product dimensions and weight." }
            ].map((faq, idx) => (
              <motion.div 
                {...fadeIn}
                key={`faq-${idx}`} 
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <button 
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      key={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-24 bg-[#fafcff]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...fadeIn}
            className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row"
          >
            {/* Contact Info Sidebar */}
            <div className="bg-slate-900 text-white lg:w-5/12 p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/40 rounded-full blur-[80px]"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-black mb-4">Let's Talk Packaging.</h2>
                <p className="text-slate-400 mb-16 text-lg font-light">Whether you need 500 boxes or 50,000, we're ready to engineer your perfect packaging solution.</p>
                
                <div className="space-y-10">
                  <div className="group flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <PhoneCall className="w-6 h-6 text-blue-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Call Haresh Bhanderi</p>
                      <a href="tel:+919427775346" className="block text-xl font-bold hover:text-blue-400 transition">+91 94277 75346</a>
                      <a href="tel:+916352465928" className="block text-xl font-bold hover:text-blue-400 transition">+91 63524 65928</a>
                    </div>
                  </div>
                  
                  <div className="group flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <PhoneCall className="w-6 h-6 text-blue-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Call Vijay Bhai</p>
                      <a href="tel:+917567719054" className="block text-xl font-bold hover:text-blue-400 transition">+91 75677 19054</a>
                    </div>
                  </div>

                  <div className="group flex items-start gap-5">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <MapPin className="w-6 h-6 text-blue-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium mb-1">Visit Headquarters</p>
                      <p className="text-lg font-medium leading-relaxed">
                        Plot No. 18, Shed No. 3, Survey No. 47,<br />
                        Jivraj Industrial Estate, Near Falcon Pump,<br />
                        Gondal Road, Vavdi,<br />
                        Rajkot – 36004
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-white">
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Request a Quote</h3>
              <p className="text-slate-500 mb-10">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="bg-emerald-50 border-2 border-emerald-100 rounded-2xl p-8 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-900 mb-2">Request Sent Successfully!</h4>
                  <p className="text-emerald-700 mb-6">Thank you for reaching out. Haresh or Vijay will contact you shortly with your custom quote.</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-emerald-600 font-bold hover:underline">
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">First Name <span className="text-red-500">*</span></label>
                      <input required type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company Name</label>
                      <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="Acme Corp" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                    <input required type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all" placeholder="+91 00000 00000" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Project Details</label>
                    <textarea rows={5} className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none" placeholder="Tell us about the dimensions, quantity, and whether you need custom printing..."></textarea>
                  </div>
                  
                  <button disabled={isSubmitting} className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 text-lg flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending..." : "Submit Request"} {!isSubmitting && <ArrowRight size={20} />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <span className="text-3xl font-black tracking-tight text-white mb-6 block">
                AKSHAR<span className="text-blue-500">PACKAGING</span>
              </span>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                A Complete Packaging Solution. We specialize in high-quality corrugated boxes, custom printing, and reliable logistics for businesses across India.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#industries" className="text-slate-400 hover:text-blue-400 transition">Industries</a></li>
                <li><a href="#products" className="text-slate-400 hover:text-blue-400 transition">Our Solutions</a></li>
                <li><a href="#calculator" className="text-slate-400 hover:text-blue-400 transition">Get a Quote</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-blue-400 transition">FAQs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-blue-400 transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Akshar Packaging. All Rights Reserved.
            </p>
            <div className="text-slate-600 text-sm font-medium flex items-center gap-2">
              <MapPin size={16} /> Rajkot, Gujarat, India
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
