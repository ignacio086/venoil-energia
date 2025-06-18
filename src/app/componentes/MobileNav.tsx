'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react' // íconos
import * as motion from "motion/react-client";

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)} className="p-2">
        <Menu size={28} />
      </button>

      {open && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          className="fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-50 p-4"
        >
          <button onClick={() => setOpen(false)} className="mb-4">
            <X size={24} />
          </button>

          <nav className="flex flex-col gap-4">
            <a href="/" onClick={() => setOpen(false)}>Inicio</a>
            <a href="/nosotros" onClick={() => setOpen(false)}>Nosotros</a>
            <a href="/servicios" onClick={() => setOpen(false)}>Servicios</a>
            <a href="/contacto" onClick={() => setOpen(false)}>Contacto</a>
          </nav>
        </motion.div>
      )}
    </div>
  )
}
