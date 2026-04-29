/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  PlayCircle, 
  Gift, 
  Hand, 
  Star,
  ShieldCheck, 
  Clock, 
  Instagram, 
  Youtube, 
  MessageCircle,
  ArrowRight,
  ChevronDown,
  ShoppingBag,
  Award,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-4 py-3 flex justify-between items-center shadow-xs">
    <div className="flex items-center gap-2">
  <img src="/logo.png" alt="Diseña y Crea con Resina" className="h-12 w-auto" />
</div>
    <div className="hidden md:flex gap-8 items-center">
      <a href="#metodo" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-green-600 transition">El Método</a>
      <a href="#bonos" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-green-600 transition">Bonos</a>
      <a href="#garantia" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-green-600 transition">Garantía</a>
      <a 
        href="https://go.hotmart.com/O105038534Q?ap=1d28" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-600 text-white px-6 py-2 rounded-lg text-xs font-black tracking-widest uppercase hover:bg-green-700 transition shadow-[0_0_15px_rgba(22,163,74,0.4)]"
      >
        ¡ACCEDER!
      </a>
    </div>
  </nav>
);

const Hero = () => {
  const hotLink = "https://go.hotmart.com/O105038534Q?ap=1d28";

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-8 text-left"
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] font-black rounded-sm uppercase tracking-[0.2em]">
              🔥 Cupos Limitados
            </span>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-slate-900">
              Inicia hoy mismo tu negocio de Accesorios <span className="text-fuchsia-vibrant">con Resina</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium max-w-xl">
              Domina el arte de la resina de cero a experta y genera ingresos extra diseñando piezas únicas. Sin errores, sin burbujas.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group"
          >
            <img 
              src="/resin_mockup.png" 
              alt="Curso Diseña y Crea con Resina Mockup" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 w-full md:sticky md:top-32"
        >
          <div className="bg-yellow-400 p-8 rounded-[2rem] shadow-2xl border-2 border-yellow-500 relative flex flex-col">
            <div className="absolute -top-4 right-8 bg-slate-900 text-white text-[10px] px-5 py-1.5 rounded-full font-black uppercase tracking-widest">
              ¡Inscríbete Hoy!
            </div>
            
            <div className="flex justify-between items-end mb-8 pt-2">
              <div className="flex flex-col">
                <span className="text-slate-700/60 line-through text-xl font-bold">$74.00 USD</span>
                <span className="text-6xl font-black text-slate-900 tracking-tighter">$37.00 USD</span>
              </div>
              <div className="text-right leading-none pb-2">
                <span className="block text-[10px] font-black text-slate-900 uppercase tracking-widest">Pago Único</span>
                <span className="block text-[10px] text-slate-700 font-bold uppercase mt-1">Acceso de por vida</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-sm font-bold">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                <span>60+ Lecciones en Video HD</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-[10px]">★</div>
                <span>Bono: Llaveros Inteligentes (NFC)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold">
                <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center text-white text-[10px]">★</div>
                <span>Bono: Comunidad VIP & Mentorías</span>
              </div>
            </div>

          <a 
              href={hotLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-green text-center flex items-center justify-center gap-3"
            >
              EMPEZAR AHORA
              <ArrowRight className="w-6 h-6" />
            </a>

            <p className="mt-6 text-center text-slate-900/40 text-[10px] font-bold uppercase tracking-widest">Pago 100% Seguro • Acceso Inmediato</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Instagrid = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center gap-3 mb-10">
        <Instagram className="text-fuchsia-vibrant w-5 h-5" />
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Nuestro Instagram</h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]">
            <img 
              src={`https://picsum.photos/seed/resin-${i}/400/400`} 
              alt={`Accesorio ${i}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => {
  const steps = [
    { title: "Materiales e Inversión", desc: "Conoce los tipos de resina, moldes y herramientas esenciales sin gastar de más." },
    { title: "Mezcla Perfecta", desc: "El secreto para evitar burbujas y que tus piezas queden transparentes como cristal." },
    { title: "Técnicas Pro", desc: "Aprende a usar glitters, pigmentos, flores secas y encapsulados premium." },
    { title: "Acabado Espejo", desc: "Lijado, pulido y doming para que tus joyas tengan un brillo profesional." },
  ];

  return (
    <section id="metodo" className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-vibrant">Metodología Paso a Paso</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none">El Método Profesional</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="minimal-card flex flex-col items-start p-10">
              <span className="text-4xl font-black text-fuchsia-vibrant mb-6">{idx + 1}</span>
              <h3 className="font-black text-xl mb-4 text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Author = () => (
  <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="inline-block px-4 py-1 bg-white/10 text-white text-[10px] font-black rounded-full mb-6 border border-white/20 uppercase tracking-widest">
          Experta Invitada
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">Yuly Mar Rivas</h2>
        <div className="space-y-6 text-slate-400 text-lg">
          <p>
            Emprendedora apasionada con más de <span className="text-white font-bold underline decoration-fuchsia-vibrant">5 años de experiencia</span> en el mundo del arte con resina epóxica.
          </p>
          <p>
            He ayudado a cientos de mujeres a transformar un pasatiempo en una fuente de <span className="text-white font-bold">ingresos reales</span>, creando marcas de accesorios de lujo.
          </p>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-fuchsia-vibrant">
               <img src="/expert_author_photo.jpeg" alt="Yuly" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
               <p className="font-black text-sm text-white">YULY MAR RIVAS</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest">Fundadora del Método</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <div className="w-full aspect-[4/5] bg-slate-800 rounded-3xl overflow-hidden relative border-4 border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
          <img 
            src="/yuli_founder_new.png" 
            alt="Yuly Mar Rivas" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-yellow-accent text-black p-6 rounded-2xl shadow-2xl max-w-[180px]">
          <Award className="text-black mb-1" size={24} />
          <p className="font-black text-[10px] uppercase tracking-widest">Certificación Profesional Incluida</p>
        </div>
      </div>
    </div>
  </section>
);

const Bonos = () => {
  const bonuses = [
    { title: "Llaveros Inteligentes", val: "$27", icon: <Instagram />, desc: "Aprende a integrar códigos de música y perfiles sociales en tus piezas." },
    { title: "Masterclass Geodas", val: "$35", icon: <Award />, desc: "Técnicas avanzadas para crear arte de pared que simula piedras preciosas." },
    { title: "Comunidad VIP", val: "$97", icon: <MessageCircle />, desc: "Grupo exclusivo de alumnas para resolver dudas y compartir proveedores." },
    { title: "Estructura de Costos", val: "$20", icon: <ShoppingBag />, desc: "Aprende a cobrar lo justo y maximizar tus ganancias desde el día 1." },
  ];

  return (
    <section id="bonos" className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-vibrant">Regalos Exclusivos</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Tu Stack de Bonos Gratuitos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {bonuses.map((b, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col group hover:border-fuchsia-vibrant transition-colors"
            >
              <div className="absolute top-4 right-4 bg-yellow-accent px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">GRATIS</div>
              <div className="w-10 h-10 bg-slate-100 text-slate-400 group-hover:bg-fuchsia-vibrant group-hover:text-white rounded-lg flex items-center justify-center mb-6 transition-colors">
                {b.icon}
              </div>
              <h3 className="font-black text-lg mb-2 text-slate-900">{b.title}</h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed flex-grow">{b.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <span className="text-[10px] text-slate-300 font-bold uppercase line-through">Valor {b.val}</span>
                <span className="text-fuchsia-vibrant font-black text-xs uppercase tracking-widest">Incluido</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-24 px-4 bg-white">
    <div className="max-w-7xl mx-auto">
       <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-vibrant">Prueba Social</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Más de 2,400 alumnos felices</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">Mira los resultados y la comunidad que hemos creado. Screenshots reales de nuestro grupo privado.</p>
       </div>
       
       <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow bg-slate-50">
                <img 
                  src={i === 6 ? `/testimonial_${i}.jpeg` : `/testimonial_${i}.jpg`} 
                  alt={`Testimonio Alumna ${i}`} 
                  className="w-[70%] h-auto mx-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
       </div>
    </div>
  </section>
);

const Gallery = () => {
  const creations = [
    { title: "Máster class de Reloj de pared con la tecnica de Océano", img: "/creation_1.png" },
    { title: "Máster class de Tazas decoradas con resina", img: "/creation_2.png" },
    { title: "Máster class de lámpara decorada con encapsulado de fotografía", img: "/creation_3.png" },
    { title: "Máster class de encapsulado de recuerdos de recien nacido", img: "/creation_4.png" },
    { title: "Máster class de Técnicas para secar tus flores desde casa", img: "/creation_5.png" },
    { title: "Máster class de Técnicas en tendencia", img: "/creation_6.png" },
  ];

  return (
    <section className="py-24 px-4 bg-slate-50" id="galeria">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-vibrant">Resultados Reales</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Galería de Creaciones de Cero a Experto</h2>
          <p className="text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed italic">
            "No solo aprenderás a usar la resina; aprenderás a crear un catálogo rentable. Descubre cómo diseñar productos de alta demanda como llaveros inteligentes, tazas decoradas y relojes con técnica de océano que te permitirán diferenciarte de la competencia y generar ingresos desde el primer mes."
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {creations.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition transform group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white font-black uppercase text-sm tracking-widest">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours
  const hotLink = "https://go.hotmart.com/O105038534Q?ap=1d28";

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="py-32 px-4 bg-yellow-accent relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <h2 className="text-xl md:text-2xl font-black mb-12 uppercase tracking-[0.3em] bg-slate-900 text-white py-3 px-10 inline-block rounded-lg shadow-xl">
          OFERTA VÁLIDA POR
        </h2>
        
        <div className="flex justify-center gap-4 mb-16">
          {[
            { val: hours, label: 'Horas' },
            { val: minutes, label: 'Minutos' },
            { val: seconds, label: 'Segundos' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900 text-white p-6 rounded-2xl w-28 md:w-32 flex flex-col items-center shadow-2xl">
              <span className="text-4xl md:text-5xl font-black transition-all tabular-nums">{item.val < 10 ? `0${item.val}` : item.val}</span>
              <span className="text-[10px] uppercase font-black text-slate-500 mt-2 tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl relative border-4 border-slate-900 max-w-2xl mx-auto">
          <div className="mb-10 text-center space-y-1">
            <span className="text-slate-400 text-xl font-bold line-through">$74.00 USD</span>
            <div className="text-7xl font-black text-slate-900 tracking-tighter">$37.00 USD</div>
            <span className="block text-[10px] font-black uppercase text-green-600 tracking-widest mt-2">¡MÁS DE 50% DE DESCUENTO!</span>
          </div>

          <div className="space-y-4 mb-12 text-left bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-green-600" />
              Acceso Inmediato y de por vida
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-green-600" />
              Garantía de Satisfacción Total
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-slate-700">
              <CheckCircle2 size={16} className="text-green-600" />
              Soporte y Comunidad VIP
            </div>
          </div>

          <a 
            href={hotLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-green text-2xl py-6 rounded-2xl text-center"
          >
            ¡SÍ! QUIERO EL ACCESO AHORA
          </a>
          
          <div className="mt-8 flex justify-center items-center gap-4 opacity-50 grayscale">
            <ShieldCheck size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Pago Encriptado Directo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Guarantee = () => (
  <section id="garantia" className="py-32 px-4 bg-slate-50 text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="bg-white p-16 rounded-[3rem] shadow-sm border border-slate-200">
        <img 
          src="/guarantee_seal.png" 
          alt="Garantía de 7 Días" 
          className="w-48 h-48 mx-auto mb-10 transition-transform hover:rotate-6"
          referrerPolicy="no-referrer"
        />
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter italic">¡EL RIESGO ES MÍO!</h2>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          Toma el programa por <span className="text-slate-900 font-black">7 días completos</span>. Si sientes que esto no es para ti, te devuelvo el 100% de tu dinero. Sin preguntas, sin resentimientos.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 opacity-40 grayscale">
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span className="text-xs font-black uppercase tracking-widest">2,450+ ALUMNAS</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} />
            <span className="text-xs font-black uppercase tracking-widest">PAGO PROTEGIDO</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-white/5 pb-16 mb-12">
        <div className="space-y-4 text-center md:text-left">
           <img src="/logo.png" alt="Diseña y Crea con Resina" className="h-20 w-auto mx-auto md:mx-0" />
           <p className="text-slate-500 text-sm max-w-sm">
            La formación líder en Latinoamérica para emprendedoras de accesorios artesanales.
           </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2024 TODOS LOS DERECHOS RESERVADOS</p>
        <p className="text-[10px] text-slate-700 max-w-xl text-center md:text-right leading-relaxed uppercase tracking-tighter">
          ESTE SITIO NO ES PARTE DEL SITIO WEB DE FACEBOOK O DE FACEBOOK INC. ADEMÁS, ESTE SITIO NO ESTÁ RESPALDADO POR FACEBOOK DE NINGUNA MANERA.
        </p>
      </div>
    </div>
  </footer>
);

const Certificate = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-16 rounded-[2.5rem] border border-slate-200 shadow-sm"
      >
        <Award size={40} className="text-fuchsia-vibrant mx-auto mb-8" />
        <h2 className="text-4xl md:text-5xl font-black mb-8">Certificación Oficial</h2>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-medium">
          Al completar el programa, recibirás un certificado que avala tus competencias técnicas. Un documento esencial para dar seriedad a tu marca personal.
        </p>
        <div className="relative max-w-lg mx-auto rounded-xl shadow-2xl overflow-hidden border-4 border-white">
           <img 
             src="/official_certificate.png" 
             alt="Certificación Oficial Diseña y Crea con Resina" 
             className="w-[70%] h-auto mx-auto block py-8"
             referrerPolicy="no-referrer"
           />
        </div>
      </motion.div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const questions = [
    { q: "¿Necesito experiencia previa?", a: "Para nada. El curso está diseñado desde el nivel cero. Te llevaremos de la mano hasta que seas una profesional." },
    { q: "¿Cuánto tiempo dura el curso?", a: "El curso tiene más de 60 lecciones en video. El acceso es de por vida, así que puedes ir a tu propio ritmo." },
    { q: "¿Qué materiales necesito?", a: "Dentro del curso te damos una lista completa de proveedores por país para que consigas resina, moldes y pigmentos al mejor precio." },
    { q: "¿El pago es único?", a: "Sí, un solo pago de $37.00 USD y tendrás acceso para siempre, incluyendo todas las actualizaciones futuras y bonos." },
  ];

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-vibrant">Dudas Comunes</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">Preguntas Frecuentes</h2>
        </div>
        <div className="space-y-3">
          {questions.map((item, i) => (
            <div key={i} className={`rounded-xl border transition-all duration-300 ${open === i ? 'border-slate-900 bg-slate-50' : 'border-slate-100 bg-white'}`}>
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center font-black tracking-tight text-slate-900"
              >
                {item.q}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed max-w-2xl">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="offer-banner">
          🚀 INSCRÍBETE HOY Y AHORRA $37.00 USD - CUPOS DISPONIBLES PARA EL GRUPO VIP 🚀
        </div>
        <Features />
        <Gallery />
        <Author />
        <Bonos />
        <Testimonials />
        <Certificate />
        <Offer />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
      
      {/* Global Floating CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60]"
      >
        <a 
          href="https://go.hotmart.com/O105038534Q?ap=1d28" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-8 py-4 rounded-full font-black text-sm md:text-base uppercase tracking-widest shadow-[0_15px_30px_rgba(22,163,74,0.4)] hover:bg-green-700 hover:-translate-y-1 transition-all flex items-center gap-3 border-2 border-white/20"
        >
          ¡Quiero Acceder Ahora!
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>

      {/* Floating CTA for Mobile (Original space, kept for consistency but hidden if overlapping) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 pointer-events-none">
        {/* We can hide this or keep it, but the user asked for A floating button with specific text */}
      </div>
    </div>
  );
}
