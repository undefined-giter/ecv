import s from './style.module.css'
import { useScreen } from '/src/contexts/ScreenContext'
import { useVisited } from '/src/contexts/VisitedContext'

import vue from '/img/techStack/vue.png'
import php from '/img/techStack/php.png'
import laravel from '/img/techStack/laravel.png'
import react from '/img/techStack/react.png'
import tailwind from '/img/techStack/tailwind.png'

const technologies = [
    { src: php, name: 'php' },
    { src: laravel, name: 'laravel' },
    { src: tailwind, name: 'tailwind' },
    { src: vue, name: 'vue' },
    { src: react, name: 'react' },
]



export default function TechStack(){

    const { isLargeScreen } = useScreen()
    const { welcomeDoneOnce, homepageHasBeenVisited, otherPageHasBeenVisited, homepageNotFirstVisited } = useVisited()

    
    return (
        <>
            <style>
                {`
                    @keyframes fadeIn_TechStack {
                        0% { opacity: 0.1; }
                        100% { opacity: 1; }
                    }
                `}
            </style>

            <div className={`flex ${welcomeDoneOnce ? s.stack_show : s.hide}`}>
                {technologies.map((img, index) => (
                    <img key={index} src={img.src} alt={`${img.name} logo`} width='45px' className={`${isLargeScreen ? 'mx-4' : 'mx-2'}`}
                        style={{opacity: homepageHasBeenVisited || (welcomeDoneOnce & otherPageHasBeenVisited) ? '1' : '0', animation: `${!homepageHasBeenVisited & !otherPageHasBeenVisited || !homepageNotFirstVisited ? `2.5s ease-in-out ${(index * 0.6) + 0.5}s forwards fadeIn_TechStack` : ''} ${welcomeDoneOnce & otherPageHasBeenVisited ? s.show : ''}` }} />
                ))}
            </div>
        </>
    )
}