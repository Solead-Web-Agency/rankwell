const LinkIcon = () => {
  return (
    <span className="opacity-0 transition-all duration-200 group-hover/item:translate-x-2 group-hover/item:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 12L12 8L8 4"
          className="stroke-secondary dark:stroke-accent"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default LinkIcon;
