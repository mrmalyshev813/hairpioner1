import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPinned,
  MessageCircleMore,
  Phone,
  Scissors,
  Sparkles,
} from "lucide-react";
import { contactPoints, detailPoints, navigation, proofItems, reviews, serviceHighlights, site } from "./content";

const ease = [0.22, 1, 0.36, 1];

function Reveal({ as: Tag = motion.div, className = "", delay = 0, children }) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </Tag>
  );
}

function App() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top_left,rgba(230,194,165,0.22),transparent_34%),radial-gradient(circle_at_78%_20%,rgba(214,153,96,0.18),transparent_22%),linear-gradient(180deg,rgba(13,11,11,0.16),transparent)]" />
        <div className="grain absolute inset-0" />
      </div>

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="section-shell flex items-center justify-between gap-6 py-6">
          <a className="inline-flex items-center gap-3" href="#hero" aria-label="Hairpioner — к началу страницы">
            <span className="flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/6 shadow-[0_0_0_8px_rgba(230,194,165,0.06)]">
              <Scissors className="size-4 text-accent-2" />
            </span>
            <span className="grid">
              <span className="font-display text-[1.6rem] leading-none tracking-[0.03em] text-paper">
                Hairpioner
              </span>
              <span className="text-[0.72rem] uppercase tracking-[0.24em] text-paper-muted">
                Пионерская · Санкт-Петербург
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-[0.78rem] uppercase tracking-[0.2em] text-paper-muted lg:flex" aria-label="Навигация по странице">
            {navigation.map((item) => (
              <a key={item.href} className="transition-colors duration-200 hover:text-paper focus-visible:text-paper" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button-secondary hidden md:inline-flex" href={site.tel} aria-label="Позвонить в Hairpioner">
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative flex min-h-screen items-center overflow-hidden scroll-mt-28">
          <div className="section-shell grid gap-10 pb-8 pt-28 md:pb-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:pb-10">
            <motion.div
              className="relative z-10 max-w-[38rem]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="eyebrow">
                {site.name}
                <span className="text-paper-muted">Стрижки · {site.hours}</span>
              </span>

              <motion.h1
                className="mt-5 max-w-[10ch] font-display text-balance text-[clamp(3.3rem,7vw,6.3rem)] leading-[0.92] tracking-[-0.03em] text-paper"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.86, delay: 0.08, ease }}
              >
                {site.name}. <span className="text-accent-2">{site.heroTitle}</span>
              </motion.h1>

              <motion.p
                className="mt-6 max-w-[34rem] text-[1.02rem] leading-8 text-paper-soft md:text-[1.08rem]"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.86, delay: 0.16, ease }}
              >
                {site.heroLead}
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.86, delay: 0.24, ease }}
              >
                <a className="button-primary" href={site.tel} aria-label="Позвонить и записаться в Hairpioner">
                  <Phone className="size-4" />
                  Позвонить и записаться
                </a>
                <a className="button-secondary" href={site.maps} target="_blank" rel="noreferrer" aria-label="Открыть Hairpioner на Яндекс Картах">
                  <MapPinned className="size-4" />
                  Построить маршрут
                </a>
              </motion.div>

              <motion.div
                className="mt-5 flex flex-wrap gap-5 text-sm text-paper-muted"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease }}
              >
                <a className="inline-flex items-center gap-2 transition-colors hover:text-paper" href={site.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircleMore className="size-4" />
                  WhatsApp
                </a>
                <a className="inline-flex items-center gap-2 transition-colors hover:text-paper" href={site.vk} target="_blank" rel="noreferrer">
                  <ArrowUpRight className="size-4" />
                  VK Hairpioner
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative isolate min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.04] shadow-soft lg:min-h-[34rem]"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease }}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-[center_16%]"
                src={proofItems[1].image}
                alt={proofItems[1].alt}
                loading="eager"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,11,11,0.12),rgba(13,11,11,0.48)_55%,rgba(13,11,11,0.92)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 grid gap-6 p-6 md:p-8">
                <div className="grid gap-2">
                  <span className="eyebrow text-white/70">Сильный первый экран без визуального мусора</span>
                  <p className="max-w-[32rem] font-display text-[clamp(2.1rem,4vw,3.6rem)] leading-[0.95] text-white">
                    Реальные стрижки, понятная запись и карта входа прямо на первом экране.
                  </p>
                </div>

                <div className="grid gap-4 border-t border-white/12 pt-4 text-sm text-white/78 md:grid-cols-3">
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/48">Адрес</p>
                    <p className="mt-2 leading-6">{site.address}</p>
                  </div>
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/48">Ориентир</p>
                    <p className="mt-2 leading-6">{site.entrance}</p>
                  </div>
                  <div>
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-white/48">Режим</p>
                    <p className="mt-2 leading-6">{site.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28">
          <div className="section-shell section-divider py-22 md:py-28">
            <Reveal className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
              <div className="grid gap-5">
                <span className="eyebrow">Visual thesis</span>
                <h2 className="max-w-[9ch] font-display text-balance text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.96] tracking-[-0.03em]">
                  Спокойная подача вместо ощущения конвейера.
                </h2>
              </div>

              <div className="grid gap-8">
                <p className="max-w-[44rem] text-lg leading-8 text-paper-soft">
                  Hairpioner лучше воспринимается как тихая городская студия стрижек с хорошим чувством формы: без дешёвого барбершоп-шаблона, без случайных карточек в hero и без копирайтинга ради копирайтинга. Здесь важнее показать реальные стрижки, понятный путь до входа и нормальный способ записаться.
                </p>

                <div className="grid gap-7 md:grid-cols-3">
                  <div className="grid gap-3 border-t border-white/10 pt-4">
                    <Sparkles className="size-5 text-accent-2" />
                    <p className="text-sm uppercase tracking-[0.22em] text-paper-muted">Чистая иерархия</p>
                    <p className="text-sm leading-7 text-paper-soft">
                      Первый экран работает как постер: бренд, обещание, фото и прямое действие.
                    </p>
                  </div>
                  <div className="grid gap-3 border-t border-white/10 pt-4">
                    <Clock3 className="size-5 text-accent-2" />
                    <p className="text-sm uppercase tracking-[0.22em] text-paper-muted">Понятный ритм</p>
                    <p className="text-sm leading-7 text-paper-soft">
                      Ключевые данные не спрятаны: адрес, вход, режим работы и быстрые способы связи уже на странице.
                    </p>
                  </div>
                  <div className="grid gap-3 border-t border-white/10 pt-4">
                    <MapPinned className="size-5 text-accent-2" />
                    <p className="text-sm uppercase tracking-[0.22em] text-paper-muted">Живой ориентир</p>
                    <p className="text-sm leading-7 text-paper-soft">
                      Вместо абстракций — реальные фото стрижек и прямой переход в карту, чтобы было ясно, куда именно идти.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="scroll-mt-28">
          <div className="section-shell section-divider grid gap-14 py-22 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="grid content-start gap-5">
              <span className="eyebrow">Что здесь делают</span>
              <h2 className="max-w-[9ch] font-display text-balance text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.03em]">
                Услуги читаются как аккуратный список, а не как ярмарка карточек.
              </h2>
              <p className="max-w-[28rem] text-base leading-8 text-paper-soft">
                Главный фокус — стрижки и форма. Дополнительные услуги оставлены на странице ровно настолько, насколько они реально помогают с записью и ожиданиями.
              </p>
            </Reveal>

            <div className="grid gap-7">
              {serviceHighlights.map((item, index) => (
                <Reveal
                  as={motion.article}
                  key={item.title}
                  delay={index * 0.06}
                  className="grid gap-4 border-t border-white/10 pt-5 md:grid-cols-[1.1fr_1fr]"
                >
                  <h3 className="font-display text-[clamp(1.8rem,2.4vw,2.7rem)] leading-[0.98] tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="max-w-[28rem] text-base leading-8 text-paper-soft">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="scroll-mt-28">
          <div className="section-shell section-divider grid gap-12 py-22 md:py-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <Reveal className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-soft">
              <img
                className="h-full min-h-[24rem] w-full object-cover object-center md:min-h-[34rem]"
                src={proofItems[0].image}
                alt={proofItems[0].alt}
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(13,11,11,0.08),rgba(13,11,11,0.82))] p-6">
                <p className="eyebrow text-white/70">Interaction thesis</p>
                <p className="mt-2 max-w-[24rem] text-sm leading-7 text-white/82">
                  Мягкий reveal по секциям, лёгкий zoom у галереи и спокойные hover/focus состояния у CTA — достаточно, чтобы страница ощущалась живой, но не шумной.
                </p>
              </div>
            </Reveal>

            <Reveal className="grid gap-7">
              <span className="eyebrow">Как это ощущается</span>
              <h2 className="max-w-[10ch] font-display text-balance text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.03em]">
                Чистая посадка, спокойный ритм и понятная запись.
              </h2>
              <div className="grid gap-5">
                {detailPoints.map((item, index) => (
                  <motion.div
                    key={item}
                    className="grid gap-2 border-t border-white/10 pt-4"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.66, delay: index * 0.08, ease }}
                  >
                    <p className="text-sm uppercase tracking-[0.22em] text-paper-muted">0{index + 1}</p>
                    <p className="max-w-[34rem] text-base leading-8 text-paper-soft">{item}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="proof" className="scroll-mt-28">
          <div className="section-shell section-divider grid gap-14 py-22 md:py-28">
            <Reveal className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div className="grid gap-4">
                <span className="eyebrow">Примеры и отзывы</span>
                <h2 className="max-w-[8ch] font-display text-balance text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.03em]">
                  Работу видно сразу, а сервис — после визита.
                </h2>
              </div>
              <p className="max-w-[36rem] text-base leading-8 text-paper-soft">
                Вместо абстрактных обещаний — реальные фотографии стрижек и цитаты, которые чаще всего повторяются в отзывах: спокойная атмосфера, аккуратная форма и ощущение, что здесь не спешат ради потока.
              </p>
            </Reveal>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {proofItems.map((item, index) => (
                  <Reveal
                    as={motion.figure}
                    key={item.title}
                    delay={index * 0.06}
                    className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-soft"
                  >
                    <div className="overflow-hidden">
                      <motion.img
                        className="aspect-[0.82] w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.04]"
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
                        transition={{ duration: 0.5, ease }}
                      />
                    </div>
                    <figcaption className="grid gap-3 px-5 pb-6 pt-4">
                      <strong className="font-display text-[1.8rem] leading-none tracking-[-0.02em] text-paper">
                        {item.title}
                      </strong>
                      <p className="text-sm leading-7 text-paper-soft">{item.text}</p>
                    </figcaption>
                  </Reveal>
                ))}
              </div>

              <div className="grid gap-5">
                {reviews.map((iuote, index) => (
                  <Reveal
                    as={motion.blockquote}
                    key={quote}
                    delay={index * 0.08}
                    className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-soft"
                  >
                    <p className="font-display text-[clamp(1.8rem,2.4vw,2.7rem)] leading-[1.02] tracking-[-0.02em] text-paper">
                      «{quote}»
                    </p>
                    <footer className="text-sm uppercase tracking-[0.22em] text-paper-muted">
                      Гость Hairpioner
                    </footer>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28">
          <div className="section-shell py-22 md:py-28">
            <div className="grid gap-10 rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-6 shadow-soft md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
              <Reveal className="grid gap-7">
                <div className="grid gap-4">
                  <span className="eyebrow">Финальный CTA</span>
                  <h2 className="max-w-[9ch] font-display text-balance text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.96] tracking-[-0.03em]">
                    Всё, что нужно для записи, уже здесь.
                  </h2>
                  <p className="max-w-[34rem] text-base leading-8 text-paper-soft">
                    На финальном экране нет случайных блоков: только телефон, маршрут, живая карта входа и форма, чтобы человек быстро понял, как попасть в Hairpioner и как удобнее записаться.
                  </p>
                </div>

                <dl className="grid gap-5 md:grid-cols-2">
                  {contactPoints.map((item) => (
                    <div key={item.label} className="grid gap-2 border-t border-white/10 pt-4">
                      <dt className="text-sm uppercase tracking-[0.22em] text-paper-muted">{item.label}</dt>
                      <dd className="text-base leading-7 text-paper">
                        {item.href ? (
                          <a className="transition-colors hover:text-accent-2" href={item.href}>
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="flex flex-wrap gap-3">
                  <a className="button-primary" href={site.tel} aria-label="Позвонить в Hairpioner">
                    <Phone className="size-4" />
                    Позвонить
                  </a>
                  <a className="button-secondary" href={site.maps} target="_blank" rel="noreferrer" aria-label="Открыть карту и маршрут до Hairpioner">
                    <MapPinned className="size-4" />
                    Открыть карту
                  </a>
                  <a className="button-secondary" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Написать в WhatsApp Hairpioner">
                    <MessageCircleMore className="size-4" />
                    WhatsApp
                  </a>
                </div>

                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <iframe
                    className="h-[18rem] w-full"
                    src={site.mapEmbed}
                    title="Интерактивная карта Hairpioner"
                    loading="lazy"
                  />
                </div>
              </Reveal>

              <Reveal
                as={motion.form}
                className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 md:p-6"
                name="hairpioner-booking"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="hairpioner-booking" />
                <p className="hidden">
                  <label>
                    Не заполняйте это поле:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-3">
                  <span className="eyebrow">Заявка на запись</span>
                  <h3 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[0.96] tracking-[-0.02em]">
                    Оставить контакт
                  </h3>
                  <p className="max-w-[28rem] text-sm leading-7 text-paper-soft">
                    Если неудобно звонить, оставьте имя, телефон и услугу. Заявка улетит в Netlify Forms и не потеряется при следующем обновлении сайта.
                  </p>
                </div>

                <label className="grid gap-2 text-sm text-paper-muted">
                  Имя
                  <input className="field-control" type="text" name="name" placeholder="Как к вам обращаться" required />
                </label>

                <label className="grid gap-2 text-sm text-paper-muted">
                  Телефон
                  <input className="field-control" type="tel" name="phone" placeholder="+7 (___) ___-__-__" required />
                </label>

                <label className="grid gap-2 text-sm text-paper-muted">
                  Услуга
                  <select className="field-control" name="service" defaultValue="" required>
                    <option value="" disabled>
                      Выберите услугу
                    </option>
                    <option>Мужская стрижка</option>
                    <option>Женская стрижка</option>
                    <option>Подростковая стрижка</option>
                    <option>Маникюр</option>
                    <option>Педикюр</option>
                    <option>Нужна консультация</option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm text-paper-muted">
                  Комментарий
                  <textarea
                    className="field-control min-h-32 resize-y"
                    name="message"
                    placeholder="Удобное время, пожелания к записи, вопросы"
                  />
                </label>

                <button className="button-primary mt-2 w-full justify-center" type="submit" aria-label="Отправить заявку на запись">
                  Отправить заявку
                </button>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
