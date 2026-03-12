import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-50">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 border-b border-slate-700/60 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-8 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[conic-gradient(at_top,_#38bdf8,_#22c55e,_#4f46e5,#38bdf8)] shadow-[0_0_18px_rgba(56,189,248,0.8)]">
              <span className="text-lg font-bold text-slate-900">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide">
                RutaCrítica
              </span>
              <span className="text-[11px] text-slate-400">
                Mapa visual de prerrequisitos
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-950/90 px-3 py-1.5 text-[11px] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Herramienta para estudiantes en piloto académico
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-8 pb-10 pt-10 md:grid-cols-[1.1fr,1fr] md:pt-14">
          {/* Text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/80 px-2 py-1 pl-1 text-[11px] text-slate-300">
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                Menos estrés, más control
              </span>
              <span>Planea tu semestre sin adivinar prerrequisitos</span>
            </div>

            <h1 className="mb-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Gradúate a tiempo,{" "}
              <span className="text-sky-400">
                sin sorpresas de último minuto.
              </span>
            </h1>

            <p className="mb-6 max-w-xl text-[15px] text-slate-300">
              Deja de jugar lotería con tu horario.{" "}
              <span className="font-medium text-slate-50">
                Visualiza tu ruta crítica completa
              </span>
              , detecta bloqueos ocultos y toma decisiones con la misma claridad
              que tu director de programa.
            </p>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              <a
                href="#plan"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.5)] transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-emerald-400"
              >
                <span>Ver mi ruta crítica ahora</span>
                <span className="text-base">↗</span>
              </a>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/70 bg-slate-950/90 px-4 py-2 text-[13px] text-slate-300"
              >
                <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px]">
                  Demo guiada de 2 minutos
                </span>
                Ver cómo evitar un semestre extra
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600/60 bg-slate-950/80 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                Sin instalar nada — funciona con tu historia académica de Banner
              </span>
              <span>
                Diseñado para quienes no pueden darse el lujo de perder un
                semestre.
              </span>
            </div>
          </div>

          {/* Visual card */}
          <div className="md:order-none order-first">
            <div className="rounded-3xl border border-slate-600/60 bg-[radial-gradient(circle_at_top_left,#0f172a,#020617_55%,#020617)] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.8)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-xs text-slate-300">
                  <span className="text-sm font-semibold text-slate-50">
                    Visualizador de Ruta Crítica
                  </span>
                  <br />
                  Vista previa de tu grado en 60 segundos
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2 py-1 text-[11px] text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                  Riesgos calculados
                </div>
              </div>

              {/* Mini graph */}
              <div className="mb-3 rounded-2xl border border-slate-500/70 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),rgba(15,23,42,0.96))] p-3.5">
                <div className="mb-1 flex items-center justify-between gap-3 text-[11px] text-slate-300">
                  <span className="font-medium text-slate-100">
                    Bloqueos de prerrequisito
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-full border border-red-400/70 bg-red-900/70 px-2 py-0.5 text-[10px] text-red-100">
                      1 correquisito oculto
                    </span>
                    <span className="rounded-full border border-emerald-400/70 bg-emerald-900/70 px-2 py-0.5 text-[10px] text-emerald-100">
                      Ruta crítica limpia
                    </span>
                  </div>
                </div>

                <div className="mt-2 grid h-28 grid-cols-3 items-end gap-3">
                  <div className="flex flex-col items-center gap-1 text-[11px] text-slate-300">
                    <div className="h-[88px] w-full rounded-full border border-red-400/90 bg-gradient-to-t from-slate-950 to-red-400/90 shadow-[0_0_16px_rgba(248,113,113,0.85)]" />
                    <div className="text-center">
                      <div>Sin visualizador</div>
                      <div className="text-[10px] text-slate-400">
                        +1 semestre posible
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-[11px] text-slate-300">
                    <div className="h-16 w-full rounded-full border border-slate-500/80 bg-gradient-to-t from-slate-950 to-indigo-500/80" />
                    <div className="text-center">
                      <div>Excel + Banner</div>
                      <div className="text-[10px] text-slate-400">
                        Riesgo medio
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-[11px] text-slate-300">
                    <div className="h-9 w-full rounded-full border border-emerald-400/90 bg-gradient-to-t from-slate-950 to-emerald-400/90 shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
                    <div className="text-center">
                      <div>Con RutaCrítica</div>
                      <div className="text-[10px] text-slate-400">
                        Certeza total
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex flex-col gap-2 text-[11px] text-slate-300 sm:flex-row sm:items-start sm:justify-between">
                <p className="max-w-[220px]">
                  <span className="font-semibold text-slate-100">
                    “Ya no adivino qué se me va a cruzar.”
                  </span>
                  <br />
                  Estudiante de 7.º semestre, después de usar el visualizador.
                </p>
                <p>
                  <span className="text-sm font-semibold text-slate-100">
                    25M COP
                  </span>
                  <br />
                  Costo aproximado de un semestre extra que puedes evitar.
                </p>
              </div>

              {/* Mini steps */}
              <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-300 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-600/70 bg-slate-950/95 p-2.5">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Paso 1
                  </div>
                  <div className="text-xs text-slate-100">
                    Copia tu historia académica
                  </div>
                  <div className="text-[10px] text-sky-400">
                    Desde Banner, tal cual.
                  </div>
                </div>
                <div className="rounded-xl border border-slate-600/70 bg-slate-950/95 p-2.5">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Paso 2
                  </div>
                  <div className="text-xs text-slate-100">
                    Pégala en el visualizador
                  </div>
                  <div className="text-[10px] text-sky-400">
                    Sin subir archivos, sin registro complejo.
                  </div>
                </div>
                <div className="rounded-xl border border-slate-600/70 bg-slate-950/95 p-2.5">
                  <div className="text-[10px] uppercase tracking-[0.14em] text-slate-400">
                    Paso 3
                  </div>
                  <div className="text-xs text-slate-100">
                    Recibe tu mapa y alertas
                  </div>
                  <div className="text-[10px] text-sky-400">
                    Detecta bloqueos antes de inscribir.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RISK */}
        <section
          id="riesgo"
          className="mx-auto max-w-7xl px-8 pb-8 pt-4 md:pt-6"
        >
          <div className="mb-5 flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
              Lo que arriesgas si no haces nada
            </span>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 md:text-[22px]">
              No pierdas 25 millones en un semestre extra por un correquisito
              oculto.
            </h2>
            <p className="max-w-xl text-[14px] text-slate-300">
              Las entrevistas con estudiantes fueron claras:{" "}
              <span className="font-medium text-slate-50">
                el “error tonto” casi siempre viene de un detalle que el sistema
                no les mostró a tiempo
              </span>
              . No es falta de esfuerzo, es falta de visibilidad.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700/60 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.06),#020617)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.75)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-red-900/70 px-3 py-1 text-[11px] text-red-100">
                <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.9)]" />
                Escenario real: “Un solo correquisito me costó 25 millones”
              </div>
              <h3 className="mb-2 text-[17px] font-semibold text-slate-50">
                Cuando Banner no te advierte, tu billetera paga.
              </h3>
              <p className="mb-3 text-[14px] text-slate-300">
                Imagina inscribir tu semestre perfecto… y descubrir meses
                después que una materia clave tenía un correquisito escondido.
                Resultado: se te corre toda la malla y{" "}
                <span className="font-medium text-slate-50">
                  aparece un semestre extra que nunca presupuestaste
                </span>
                .
              </p>
              <ul className="grid gap-1.5 text-[13px] text-slate-300">
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Cerca de 25 millones de pesos en matrícula, transporte y materiales.
                </li>
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Meses extra de estrés, sin poder hacer prácticas o trabajar
                  como planeabas.
                </li>
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Ver a tus amigos graduarse antes, solo por un prerrequisito
                  mal leído.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/95 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.8)]">
              <h3 className="mb-2 text-[17px] font-semibold text-slate-50">
                El costo invisible de la incertidumbre.
              </h3>
              <p className="mb-3 text-[14px] text-slate-300">
                Aun si “no te equivocas”, vivir con la duda cada periodo te
                drena energía: pestañas abiertas, Excel de colores, chats con
                amigos, correos al programa…{" "}
                <span className="font-medium text-slate-50">
                  todo para responder una sola pregunta:
                </span>{" "}
                “¿De verdad voy a poder ver todo y graduarme a tiempo?”.
              </p>
              <ul className="grid gap-1.5 text-[13px] text-slate-300">
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Horas perdidas intentando interpretar PDF de pensum y tablas
                  confusas.
                </li>
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Tomar materias por “intuición” y descubrir tarde que bloqueaste
                  otra más importante.
                </li>
                <li>
                  <span className="mr-1 text-red-400">⚠</span>
                  Negociar con tus papás un semestre extra que se pudo evitar
                  con un mapa claro.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SUCCESS */}
        <section
          id="exito"
          className="mx-auto max-w-7xl px-8 pb-8 pt-4 md:pt-6"
        >
          <div className="mb-5 flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
              Cómo se ve el éxito
            </span>
            <h2 className="text-xl font-semibold tracking-tight md:text-[22px]">
              Inscribe tus materias con la certeza total de que cumples cada
              requisito.
            </h2>
            <p className="max-w-xl text-[14px] text-slate-300">
              Pasa de reaccionar a los errores del sistema, a{" "}
              <span className="font-medium text-slate-50">
                anticiparte a cada bloqueo antes de que aparezca
              </span>
              . Tú decides tu ruta, no un PDF confuso.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/95 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.8)]">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-900/80 px-3 py-1 text-[11px] text-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                Estado deseado: “Sé exactamente qué necesito para graduarme”
              </div>
              <h3 className="mb-2 text-[17px] font-semibold text-slate-50">
                De estrés constante a control absoluto.
              </h3>
              <p className="mb-3 text-[14px] text-slate-300">
                En minutos ves tu carrera como un mapa: qué ya cumpliste, qué
                está bloqueado y qué puedes adelantar sin riesgo. Sin fórmulas
                raras, sin lenguaje complicado,{" "}
                <span className="font-medium text-slate-50">
                  solo claridad visual
                </span>
                .
              </p>
              <ul className="grid gap-1.5 text-[13px] text-slate-300">
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Planificas el resto de tu carrera en una sola vista.
                </li>
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Detectas cuellos de botella antes de que te atrasen un
                  semestre.
                </li>
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Llegas a inscripción sabiendo exactamente qué sí y qué no
                  puedes ver.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700/60 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.07),#020617)] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.75)]">
              <h3 className="mb-2 text-[17px] font-semibold text-slate-50">
                Recupera el control de tu carrera.
              </h3>
              <p className="mb-3 text-[14px] text-slate-300">
                No dependes de que un asesor tenga tiempo para leer tu historial
                por ti.{" "}
                <span className="font-medium text-slate-50">
                  Tú tienes la misma información que ellos, pero en versión
                  visual y accionable
                </span>
                .
              </p>
              <ul className="grid gap-1.5 text-[13px] text-slate-300">
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Hablas con tu programa desde datos claros, no desde
                  suposiciones.
                </li>
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Te organizas para prácticas, intercambios y doble titulación
                  con seguridad.
                </li>
                <li>
                  <span className="mr-1 text-emerald-400">✓</span>
                  Te acercas a grado sabiendo que no hay “bombas escondidas” en
                  tus prerrequisitos.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* PLAN 3 PASOS */}
        <section
          id="plan"
          className="mx-auto max-w-7xl px-8 pb-8 pt-4 md:pt-6"
        >
          <div className="mb-5 flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
              Plan simple de 3 pasos
            </span>
            <h2 className="text-xl font-semibold tracking-tight md:text-[22px]">
              De tu historia académica a tu mapa de ruta crítica en menos de 60
              segundos.
            </h2>
            <p className="max-w-xl text-[14px] text-slate-300">
              Sin subir archivos sensibles, sin crear otra cuenta más.{" "}
              <span className="font-medium text-slate-50">
                Solo usas lo que ya tienes en Banner
              </span>{" "}
              y obtienes la claridad que te hace falta.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-950/95 p-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 text-xs font-semibold text-sky-400">
                1
              </div>
              <h3 className="text-[15px] font-medium text-slate-50">
                Copia tu historia académica de Banner.
              </h3>
              <p className="text-[13px] text-slate-300">
                Entra a tu portal, abre tu historia académica y selecciona el
                texto completo (materias cursadas, aprobadas, reprobadas y en
                curso).
              </p>
              <p className="text-[11px] text-slate-400">
                No necesitas exportar nada: solo copiar y pegar.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-950/95 p-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 text-xs font-semibold text-sky-400">
                2
              </div>
              <h3 className="text-[15px] font-medium text-slate-50">
                Pega la información en nuestro visualizador.
              </h3>
              <p className="text-[13px] text-slate-300">
                Abre el Visualizador de Ruta Crítica, pega el texto y haz clic
                en <span className="font-medium">“Generar mapa”</span>. El
                sistema interpreta tus materias y prerrequisitos
                automáticamente.
              </p>
              <p className="text-[11px] text-slate-400">
                No almacenamos tus notas; solo procesamos la estructura.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-2xl border border-slate-700 bg-slate-950/95 p-4">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-500 text-xs font-semibold text-sky-400">
                3
              </div>
              <h3 className="text-[15px] font-medium text-slate-50">
                Recibe tu mapa y alertas de bloqueos.
              </h3>
              <p className="text-[13px] text-slate-300">
                Verás un mapa visual de tu carrera donde se marcan:{" "}
                <span className="font-medium text-slate-50">
                  rutas posibles, materias bloqueadas y riesgos de atraso por
                  semestre extra
                </span>
                .
              </p>
              <p className="text-[11px] text-slate-400">
                Ajusta tu plan hasta encontrar la ruta que te lleve a grado sin
                sorpresas.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST & TESTIMONIALS */}
        <section
          id="testimonios"
          className="mx-auto max-w-7xl px-8 pb-12 pt-4 md:pt-6"
        >
          <div className="mb-5 flex flex-col gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-400">
              Confianza y credibilidad
            </span>
            <h2 className="text-xl font-semibold tracking-tight md:text-[22px]">
              Basado en historias reales de estudiantes que no quieren perder ni
              un semestre más.
            </h2>
            <p className="max-w-xl text-[14px] text-slate-300">
              Estos son testimonios inspirados en entrevistas con estudiantes
              que ya pasaron por el caos de planear la carrera con mil pestañas
              abiertas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative flex flex-col gap-2 rounded-2xl border border-slate-600 bg-slate-950/95 p-4 text-[13px] text-slate-200">
              <p>
                “Pasé de tener 5 pestañas abiertas, un Excel de colores y mil
                chats con amigos, a{" "}
                <span className="font-medium">
                  entender mi grado en un minuto
                </span>
                . Por primera vez sentí que yo llevaba el timón.”
              </p>
              <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-slate-400">
                <span className="font-medium text-slate-100">
                  Ana, 6.º semestre de Ingeniería
                </span>
                <span>
                  Evita un posible semestre extra por un laboratorio
                  correquisito.
                </span>
                <span className="text-sky-400">
                  Usó el visualizador antes de inscripción
                </span>
              </div>
              <span className="pointer-events-none absolute right-3 top-1 text-3xl font-serif text-slate-600/40">
                ”
              </span>
            </div>

            <div className="relative flex flex-col gap-2 rounded-2xl border border-slate-600 bg-slate-950/95 p-4 text-[13px] text-slate-200">
              <p>
                “Yo pensaba que ya tenía todo controlado con mi Excel, pero el
                mapa mostró{" "}
                <span className="font-medium">
                  un cuello de botella en una materia de tercer semestre
                </span>{" "}
                que estaba arrastrando todo. Eso era un año perdido que no había
                visto.”
              </p>
              <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-slate-400">
                <span className="font-medium text-slate-100">
                  Carlos, 8.º semestre de Economía
                </span>
                <span>Detectó un bloqueo que Banner no le advirtió a tiempo.</span>
                <span className="text-sky-400">
                  Reajustó su plan antes de grado
                </span>
              </div>
              <span className="pointer-events-none absolute right-3 top-1 text-3xl font-serif text-slate-600/40">
                ”
              </span>
            </div>

            <div className="relative flex flex-col gap-2 rounded-2xl border border-slate-600 bg-slate-950/95 p-4 text-[13px] text-slate-200">
              <p>
                “La diferencia es la paz mental. Entré a inscripción sin miedo a
                que el sistema me rebotara.{" "}
                <span className="font-medium">
                  Sabía exactamente qué sí y qué no podía ver
                </span>
                , y eso no tiene precio.”
              </p>
              <div className="mt-1 flex flex-col gap-0.5 text-[11px] text-slate-400">
                <span className="font-medium text-slate-100">
                  María, 5.º semestre de Derecho
                </span>
                <span>Usa el visualizador cada periodo para planear.</span>
                <span className="text-sky-400">
                  Menos correos al programa, más claridad
                </span>
              </div>
              <span className="pointer-events-none absolute right-3 top-1 text-3xl font-serif text-slate-600/40">
                ”
              </span>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-[12px] text-slate-400">
            Este proyecto nace en un curso de innovación académica, desarrollado
            junto con estudiantes que conocen la ansiedad de inscripción y{" "}
            <span className="font-medium text-slate-200">
              no quieren que sus planes de vida dependan de un PDF mal
              interpretado
            </span>
            .
          </p>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full border border-slate-600 bg-slate-950/90 px-3 py-1 text-slate-300">
              Diseñado a partir de entrevistas con estudiantes de 5.º a 10.º
              semestre
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-950/90 px-3 py-1 text-slate-300">
              Enfoque en claridad visual, no en jerga técnica
            </span>
            <span className="rounded-full border border-slate-600 bg-slate-950/90 px-3 py-1 text-slate-300">
              Prototipo académico, sin costo durante la fase piloto
            </span>
          </div>
        </section>
      </main>

      {/* FOOTER / JUNK DRAWER */}
      <footer className="border-t border-slate-800 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-8 py-4 text-[12px] text-slate-400">
          <div>
            © 2026 RutaCrítica — Visualizador de Ruta Crítica Académica. Prototipo para fines
            educativos.
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#plan" className="hover:text-sky-400">
              Cómo funciona
            </a>
            <a href="#riesgo" className="hover:text-sky-400">
              Por qué lo necesitamos
            </a>
            <a href="#faq" className="hover:text-sky-400">
              FAQ (próximamente)
            </a>
            <a href="#legal" className="hover:text-sky-400">
              Términos y privacidad (prototipo)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

