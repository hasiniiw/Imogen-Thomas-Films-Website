import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import EmuRunner from './films/EmuRunner'
import QuietHour from './films/QuietHour'
import MixedBag from './films/MixedBag'
import NoSleepAmerica from './films/NoSleepAmerica'
import ApyRangerVisit from './films/ApyRangerVisit'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work/emu-runner" element={<EmuRunner />} />
        <Route path="/work/quiet-hour" element={<QuietHour />} />
        <Route path="/work/mixed-bag" element={<MixedBag />} />
        <Route path="/work/no-sleep-america" element={<NoSleepAmerica />} />
        <Route path="/work/apy-ranger-visit" element={<ApyRangerVisit />} />
      </Routes>
    </BrowserRouter>
  )
}
