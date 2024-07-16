'use client'

import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
import courseData from "@/data/music-courses.json"
import { Button } from './ui/moving-border'

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,     
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 w-10/12 lg:w-[1400px] bg-black mx-auto border-t border-gray-700">
        <div>
            <div className="text-center py-4">
                <h2 className=" text-orange-300 text-3xl leading-8 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-6 text-xl font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-white">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-2 flex flex-col sm:gap-6 items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black md:mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm mt-2 mb-3 text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center ">
            <Link href={"/courses"}>
              <Button className=' bg-black text-white text-sm'> View All Courses</Button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses