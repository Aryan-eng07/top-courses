import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
    const [likedCourses, setLikedCourses] = useState([]);

    function getAllCourses() {
        // Flatten all courses into a single array
        const allCourses = Object.values(courses).flat();

        // Filter courses based on the selected category
        console.log(allCourses);
        console.log(courses);

        if (category === "All") {
            return allCourses;
        } else {
            return courses[category];
        }
    }

    const filteredCourses = getAllCourses();

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {filteredCourses.map((course) => (
                <Card
                    key={course.id}
                    course={course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}
                />
            ))}
        </div>
    );
};

export default Cards;
