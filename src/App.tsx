import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import EmuRunner from './films/EmuRunner'
import QuietHour from './films/QuietHour'
import MixedBag from './films/MixedBag'
import NoSleepAmerica from './films/NoSleepAmerica'
import ApyRangerVisit from './films/ApyRangerVisit'

function ScrollToTop() {
  const { pathname } = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    // Only scroll to top if we are pushing a new route, not popping (hitting back)
    if (navType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [pathname, navType])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
