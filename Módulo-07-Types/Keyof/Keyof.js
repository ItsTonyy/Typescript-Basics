"use strict";
const course = {
    title: 'Typescript Bootcamp',
    subtitle: 'Learn the Language, build pratical projects.',
    lessonCounts: 100
};
function extractProperty(data, property) {
    return data[property];
}
// as we change the property, the type of the variable "Val" changes too, adapting to the type of the property
const val = extractProperty(course, "lessonCounts");
console.log(val);
