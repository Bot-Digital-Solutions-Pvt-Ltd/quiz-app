function Button({ text, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black font-bold hover:bg-customDark  hover:text-white px-6 py-3 shadow-md transition-transform ticket-shape ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
