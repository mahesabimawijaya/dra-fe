export default function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-[#0A0A0A]">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Reconnecting The Past</h2>
          <p className="mb-4">
            It&apos;s been years since we walked the halls of our beloved school — laughing in the corridors, stressing over exams, and making memories that have stayed with us ever since.
          </p>
          <p className="mb-4">
            This reunion is more than just a meetup. It’s a celebration of our shared past, a chance to reconnect, reminisce, and make new memories with old friends. Whether you were the className
            clown, the quiet achiever, or somewhere in between — you’re a part of this story.
          </p>
          <p>Let’s bring back the laughter, the stories, and the spirit that made our time together unforgettable.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
      </div>
    </section>
  );
}
