import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconBrandChrome, IconBrandGithub } from "@tabler/icons-react";

export const NewProjectCard = ({
  project,
  className,
}: {
  project: {
    id: number,
    title: string,
    description: string,
    image: string,
    tag: string[],
    gitUrl: string,
    previewUrl: string,
  };
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
        <section
          className="relative group block p-4"
          onMouseEnter={() => setHoveredIndex(project.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === project.id && (
              <motion.span
                className="hidden lg:absolute inset-0 h-full w-full bg-slate-800/[0.8] lg:block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.01 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.01, delay: 0.01 },
                }}
              />
            )}
          </AnimatePresence>
        <div>
        <div className="h-52 md:h-72 rounded-t-xl group relative" style={{background: `url(${project.image})`, backgroundSize:'cover'}}>
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              href={project.gitUrl}
              className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>
            <Link
              href={project.previewUrl}
              className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            >
              <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>
          </div>
        </div>
        <div className="rounded-b-xl flex flex-col py-6 px-4 bg-[#181818]">
            <h5 className='text-xl text-white font-semibold mb-2'>{project.title}</h5>
            <div className="flex gap-2 flex-wrap">
              {project.tag.map((tag, ind) => (
                <p key={ind} className="px-2 text-white rounded-md bg-slate-400">{tag}</p>
              ))}
            </div>
            {/* <div className="lg:hidden flex gap-4 my-2">
                <Link href={project.gitUrl} className='flex items-center gap-1 text-white font-semibold border bg-black rounded-md p-1'>
                  <IconBrandGithub className="h-4 w-4" />
                  Github
                </Link>
              <Link href={project.gitUrl} className='flex items-center gap-1 text-white font-semibold border bg-black rounded-md p-1'>
                  <IconBrandChrome className="h-4 w-4" />
                  View
                </Link>
            </div> */}
        </div>
    </div>
    </section>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
