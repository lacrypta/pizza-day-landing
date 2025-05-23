"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import PresenterAvatar from "./presenter-avatar";

// Definimos las categorías para filtrar
type EventCategory =
  | "all"
  | "presentation"
  | "libro"
  | "receso"
  | "celebración";

interface SocialLink {
  type: "twitter" | "instagram" | "nostr";
  username: string;
}

interface Presenter {
  name: string;
  image: string;
  socials?: SocialLink[];
}

interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  category: EventCategory;
  presenters?: Presenter[];
}

export default function EventSchedule() {
  const [selectedCategory, setSelectedCategory] =
    useState<EventCategory>("all");

  // Datos del cronograma con categorías y presentadores
  const scheduleData: ScheduleItem[] = [
    {
      time: "19:00",
      title: "Apertura de puertas",
      category: "receso",
      description: "Onboarding de tarjetas Premium.",
    },
    {
      time: "21:00",
      title: "Bienvenidos",
      description: "Apertura oficial del evento Bitcoin Pizza Day",
      category: "presentation",
      presenters: [
        {
          name: "Agustin Kassis",
          image: "/calendar/agustin.jpg",
          socials: [{ type: "twitter", username: "agustin_kassis" }],
        },
      ],
    },
    {
      time: "21:05",
      title: "Entrega de animales",
      description: "Presentación de los nuevos animales.",
      category: "presentation",
      presenters: [
        {
          name: "Agustin Kassis",
          image: "/calendar/agustin.jpg",
          socials: [{ type: "twitter", username: "agustin_kassis" }],
        },
      ],
    },
    {
      time: "21:20",
      title: "Tarjeta La Crypta",
      description: "Presentación de la nueva tarjeta y sus beneficios",
      category: "presentation",
      presenters: [
        {
          name: "Agustin Kassis",
          image: "/calendar/agustin.jpg",
          socials: [{ type: "twitter", username: "agustin_kassis" }],
        },
      ],
    },
    {
      time: "21:30",
      title: "Receso",
      category: "receso",
    },
    {
      time: "21:40",
      title: "Libro Criptoria",
      description: "",
      category: "libro",
      presenters: [
        {
          name: "Alfre Mancera",
          image: "/calendar/alfre.jpg",
          socials: [{ type: "twitter", username: "albibeno" }],
        },
      ],
    },
    {
      time: "21:55",
      title: "Libro Profecía Bitcoin",
      description: "",
      category: "libro",
      presenters: [
        {
          name: "Ariel Aguilar",
          image: "/calendar/ariel.jpg",
          socials: [{ type: "twitter", username: "arielaguilar" }],
        },
      ],
    },
    {
      time: "22:10",
      title: "Receso",
      category: "receso",
    },
    {
      time: "22:20",
      title: "LaWallet Nodes",
      description: "Presentación de la nueva propuesta de LaWallet.",
      category: "presentation",
      presenters: [
        {
          name: "Agustin Kassis",
          image: "/calendar/agustin.jpg",
          socials: [{ type: "twitter", username: "agustin_kassis" }],
        },
        {
          name: "Marce Cons",
          image: "/calendar/marce.jpg",
          socials: [{ type: "twitter", username: "marcela_cons" }],
        },
      ],
    },
  ];

  // Extraer categorías únicas para los botones de filtro
  const categories: { value: EventCategory; label: string }[] = [
    { value: "all", label: "Todos" },
    { value: "presentation", label: "Presentaciones" },
    { value: "libro", label: "Libros" },
    { value: "receso", label: "Recesos" },
    { value: "celebración", label: "Celebración" },
  ];

  // Función para determinar si un evento debe ser resaltado
  const shouldHighlight = (category: EventCategory): boolean => {
    return selectedCategory === category;
  };

  return (
    <div className='w-full max-w-4xl mx-auto'>
      {/* Filtros de categoría */}
      <div className='flex flex-wrap gap-2 mb-8 justify-center'>
        {categories.map((category) => (
          <Button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            variant={
              selectedCategory === category.value ? "default" : "secondary"
            }
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Timeline */}
      <div className='relative'>
        {/* Línea vertical */}
        <div className='absolute left-3 top-0 bottom-0 w-1 bg-zinc-900'></div>

        {/* Eventos */}
        {scheduleData.map((event, index) => (
          <motion.div
            key={`${event.time}-${event.title}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className='mb-8 pl-4 relative'
          >
            {/* Dot en la línea de tiempo */}
            <div
              className={`absolute left-2 w-3 h-3 ring-4 ring-black rounded-full transform mt-6 ${
                shouldHighlight(event.category)
                  ? "bg-brand-green"
                  : "bg-zinc-600"
              }`}
            ></div>

            {/* Tarjeta del evento - Todas transparentes */}
            <div
              className={`flex flex-col gap-2 ml-6 p-4 rounded-xl backdrop-blur-sm bg-zinc-900/30 
                border ${
                  shouldHighlight(event.category)
                    ? "border-brand-green/50"
                    : "border-zinc-800/50"
                } transition-all duration-300 hover:border-zinc-700/70 group`}
            >
              <div className='flex justify-between items-start'>
                <h3
                  className={`text-xl font-bold ${
                    shouldHighlight(event.category)
                      ? "text-brand-green"
                      : "text-zinc-100"
                  }`}
                >
                  {event.title}
                </h3>
                <span className='text-zinc-400 text-sm'>{event.time}</span>
              </div>

              {event.description && (
                <p className='text-sm text-zinc-400 mb-3 group-hover:text-zinc-300 transition-colors'>
                  {event.description}
                </p>
              )}

              {event.presenters && event.presenters.length > 0 && (
                <div className='flex flex-wrap gap-3'>
                  {event.presenters.map((presenter, idx) => (
                    <PresenterAvatar
                      key={idx}
                      name={presenter.name}
                      image={presenter.image}
                      socials={presenter.socials}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
