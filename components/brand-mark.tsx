export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <span className={footer ? "kl-lockup kl-lockup-footer" : "kl-lockup"}>
      <span className="kl-symbol" aria-hidden="true">
        <svg viewBox="0 0 48 48" fill="none" focusable="false">
          <path d="M10 8V40M14 25L34 8M15 25L36 40" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter"/>
          <path d="M37 11L42 6M38 5L43 10" stroke="#D4FF87" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </span>
      <span className="kl-wordmark">
        <span className="kl-wordmark-name">KADHAVIRA</span>
        <span className="kl-wordmark-labs">LABS<span className="kl-wordmark-rule" aria-hidden="true"/></span>
      </span>
    </span>
  );
}
