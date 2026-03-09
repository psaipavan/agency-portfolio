import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
    useEffect(() => {
        // Custom cursor
        const cur = document.getElementById('cur')
        const ring = document.getElementById('ring')
        if (!cur || !ring) return

        const onMove = e => {
            cur.style.left = e.clientX + 'px'
            cur.style.top = e.clientY + 'px'
            setTimeout(() => {
                ring.style.left = e.clientX + 'px'
                ring.style.top = e.clientY + 'px'
            }, 90)
        }
        document.addEventListener('mousemove', onMove)

        const hoverEls = document.querySelectorAll('a,button')
        const onEnter = () => {
            cur.style.transform = 'translate(-50%,-50%) scale(2.5)'
            ring.style.transform = 'translate(-50%,-50%) scale(1.6)'
        }
        const onLeave = () => {
            cur.style.transform = 'translate(-50%,-50%) scale(1)'
            ring.style.transform = 'translate(-50%,-50%) scale(1)'
        }
        hoverEls.forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        return () => {
            document.removeEventListener('mousemove', onMove)
            hoverEls.forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }
    }, [])

    return (
        <>
            {/* Custom cursor */}
            <div id="cur" />
            <div id="ring" />

            <Navbar />
            <main>
                <Home />
            </main>
            <Footer />
        </>
    )
}

export default App
