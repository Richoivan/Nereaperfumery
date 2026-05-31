export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/62"
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      style={{ bottom: "20px" }}
      aria-label="WhatsApp Concierge"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 12a8 8 0 1 1-3.4-6.55L20 4l-1.45 3.4A8 8 0 0 1 20 12Z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M8.5 9.5c.5 2 2 3.5 4 4l1-1c1 .3 2 .5 3 .5-.2 1.5-1.6 2.5-3 2.5-3 0-5.5-2.5-5.5-5.5 0-1.4 1-2.8 2.5-3 0 1 .2 2 .5 3l-1.5-.5Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
