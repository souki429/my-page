import { ArrowDown, ArrowUpRight, MoveUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import './App.css'

const principles = [
  { number: '01', label: 'BREAK THE RULES', title: '常識を壊せ', text: '既存の枠にとらわれず、新しい価値を生み出す。' },
  { number: '02', label: 'CREATE THE FUTURE', title: '未来を創れ', text: 'アイデアとテクノロジーで未来を現実に変える。' },
  { number: '03', label: 'TAKE ACTION', title: '行動で示せ', text: '挑戦を恐れず、新しい道を切り開く。' },
]

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#intro">本文へスキップ</a>
      <header className="site-header">
        <a className="wordmark" href="#hero" aria-label="phenomenal progect トップ"><span>phenomenal <span className="wordmark-second">progect</span></span></a>
        <nav aria-label="メインナビゲーション"><a href="#intro">私たちの想い</a><a href="#principles">3つの指針 <ArrowUpRight size={15} aria-hidden="true" /></a></nav>
      </header>
      <main>
        <section id="hero" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-topline"><span>THE FUTURE IS OURS TO CREATE.</span><span>PHENOMENAL PROGECT — JAPAN</span></div>
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> A NEW ERA STARTS HERE</p>
              <h1 id="hero-title">革命<span className="title-dot" aria-hidden="true">.</span></h1>
              <p className="hero-subtitle">道を開けろ。</p>
              <Button className="hero-button" size="lg" onClick={() => document.getElementById('intro')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>私たちの想いを知る <ArrowDown aria-hidden="true" /></Button>
            </div>
            <div className="revolution-art" aria-hidden="true"><div className="art-grid" /><div className="art-orbit" /><div className="art-orbit orbit-two" /><MoveUpRight className="art-arrow" strokeWidth={1.2} /><span className="art-caption">BEYOND THE<br />ORDINARY.</span></div>
          </div>
          <div className="hero-bottom"><span>変化は、ここから始まる。</span><a href="#intro">SCROLL TO EXPLORE <ArrowDown size={14} aria-hidden="true" /></a></div>
        </section>
        <section id="intro" className="intro-section" aria-labelledby="intro-title">
          <div className="section-label"><span>01 / OUR MANIFESTO</span><span>私たちの想い</span></div>
          <div className="intro-content"><h2 id="intro-title">常識を壊し、<br /><span>可能性を解き放つ。</span></h2><div className="intro-paragraphs"><p>新しい発想とテクノロジーで、まだ誰も見たことのない未来を切り開く。</p><p>私たちは、挑戦するすべての人とともに、新しい時代を創造する。</p></div></div>
        </section>
        <section id="principles" className="principles-section" aria-labelledby="principles-title">
          <div className="section-label"><span>02 / OUR PRINCIPLES</span><span>未来を動かす、3つの指針</span></div>
          <div className="principles-heading"><h2 id="principles-title">その一歩が、未来になる。</h2><ArrowUpRight aria-hidden="true" /></div>
          <div className="principle-grid">{principles.map((item) => <Card className="principle-card" key={item.number}><CardHeader className="principle-card-header"><span className="card-number">{item.number}</span><ArrowUpRight aria-hidden="true" /></CardHeader><CardContent className="principle-card-content"><p className="card-label">{item.label}</p><h3>{item.title}</h3><p className="card-description">{item.text}</p></CardContent></Card>)}</div>
        </section>
      </main>
      <footer className="site-footer"><span>phenomenal progect</span><span>© {new Date().getFullYear()} phenomenal progect</span><a href="#hero">BACK TO TOP <ArrowUpRight size={14} aria-hidden="true" /></a></footer>
    </div>
  )
}
export default App

