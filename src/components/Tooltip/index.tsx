import { type JSX, Show, createSignal } from "solid-js";

type Props = {
  children: JSX.Element;
};

function Tooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  const [clickCount, setClickCount] = createSignal(0);

  const messages = [
    "¡Hola!",
    "¿Hiciste clic de nuevo?",
    "¿Todavía aquí?",
    "Persistente, ¿no?",
    "¿Qué pasa?",
    "¿De nuevo? ¿Otra vez?",
    "!Otra vez¡",
    "¡No es genial!",
    "¡Dale un respiro!",
    "¡Eso es molesto!",
    "¡Para!",
    "¡No mas click!",
    "¿En serio?!",
    "¡Ay! ¡Eso duele!",
    "¡Eres Persistente!",
    "¿Acaso eres curioso?",
    "¡Me estoy cansando!",
    "Estoy aburrido",
    "¡Ya es suficiente!",
    "¡Encuentra otro pasatiempo!",
    "Porfavor ¡Para!",
    "Okay ¡Esta es la ultima!",
    "¡Eso es todo, ya terminé!",
  ];

  const currentMessage = () => {
    const count = clickCount();
    if (count >= messages.length) {
      return messages[messages.length - 1];
    }
    return messages[count];
  };

  return (
    <div class="relative inline-block">
      <div
        onMouseDown={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onMouseUp={() => {
          setIsVisible(false);
        }}
        onTouchStart={() => {
          setIsVisible(!isVisible());
          if (isVisible()) {
            setClickCount((count) => count + 1);
          }
        }}
        onTouchEnd={() => {
          setIsVisible(false);
        }}
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div class="absolute left-1/2 -translate-x-1/2 -translate-y-24 mt-1 w-auto max-h-[70px] p-2 bg-black text-white text-center rounded-lg z-10 shadow-custom shadow-primary-500 border border-primary-500 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:shadow-custom after:shadow-primary-500 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-black after:z-20">
          <p class="w-max">{currentMessage()}</p>
        </div>
      </Show>
    </div>
  );
}

export default Tooltip;
