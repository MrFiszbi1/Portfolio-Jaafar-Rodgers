import {INButton} from './buttonComponents/INButton.tsx';
import {GitButton} from './buttonComponents/GitButton.tsx';
import {LeetCodeButton} from "./buttonComponents/LeetCodeButton";

export function Bio() {
    return (
        <div
            className="flex flex-col bg-black rounded overflow-auto w-3/4 md:w-1/2 h-fit mx-3 px-3 pt-4 pb-6 shadow-2xl">
            <p className="sm:text-base text-sm">
                I am a dedicated and results-driven professional with a solid foundation in Computer Science,
                backed by a Bachelor of Science in Computer Science (GPA: 3.62) from Portland State University (PSU).
                My primary focus is on software development and IT solutions. My passion lies in leveraging my
                creativity to craft innovative solutions
                and visualize the digital world through graphics, animations, and websites.
            </p>
            <div className="flex justify-center space-x-2 flex-row flex-wrap">
                <INButton/>
                <GitButton href="https://github.com/MrFiszbi1" />
                <LeetCodeButton />
            </div>
        </div>
    )
}