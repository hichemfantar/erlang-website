import cn from "clsx";

export default function Logo({ height }: { height: number }) {
  return (
    <svg
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1594 1397"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      className={cn(
        "transition-all duration-1000 dark:invert motion-reduce:transition-none",
        "[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]",
        "hover:[mask-position:100%]",
      )}
    >
      <g transform="matrix(4.16667 0 0 4.16667 -42 -44)">
        <path
          d="M70.223 252.775C40.55 221.33 23.188 177.89 23.232 126.061c-.04-45.837 14.361-85.236 39.119-115.216l-.039.015h-52.04v241.92h59.915l.036-.005zm274.073.021c12.783-13.692 24.237-29.816 34.616-48.256l-57.6-28.799c-20.23 32.887-49.813 63.158-90.72 63.359-59.537-.201-82.929-51.112-82.8-116.64h222.48c.297-7.398.297-10.838 0-14.399 1.452-38.985-8.88-71.754-27.675-97.273l-.097.072h50.092v241.92h-48.405l.109.016zM151.392 66.3c2.463-29.668 25.854-49.619 53.28-49.68 27.613.061 47.564 20.012 48.24 49.68h-101.52z"
          fill="#a90432"
          fillRule="nonzero"
        />
        <path
          d="M41.952 293.82v-10.079h-30.96V343.5h30.96v-10.08h-19.44v-15.839h18.72V307.5h-18.72v-13.68h19.44zm52.56 24.48c7.718-1.146 11.956-8.793 12.24-16.559-.284-12.706-8.52-17.963-20.16-18h-15.84V343.5h11.52v-23.759l14.4 23.759h14.4l-16.56-25.2zm-12.24-25.2h1.44c6.285.237 11.002 1.671 10.8 9.36.202 7.047-4.355 8.958-10.8 8.64h-1.44v-18zm64.8-9.359h-11.52V343.5h28.08v-10.08h-16.56v-49.679zm75.6 47.519l5.04 12.24h12.24l-22.32-61.2h-9.36l-23.76 61.2h12.24l5.04-12.24h20.88zm-2.88-9.359h-14.4l6.48-22.32 7.92 22.32zm41.76 21.599h12.24v-40.32l31.68 41.76h8.64v-61.199h-12.24v40.32l-31.68-41.761h-8.64v61.2zm102.96-31.68v9.36h12.96c-.27 7.523-6.426 13.896-13.68 13.68-11.456.216-17.133-10.856-17.28-20.88.147-9.89 5.744-21.44 17.28-21.599 6.054.159 11.172 4.301 13.68 9.36l10.08-5.041c-4.433-9.337-13.388-14.515-23.76-14.4-17.853-.115-29.286 14.621-29.52 31.68.234 16.635 11.348 31.451 28.8 31.68 18.848-.229 27.563-15.284 27.36-32.4v-1.44h-25.92z"
          fillRule="nonzero"
          fill="#231f20"
        />
      </g>
    </svg>
  );
}
