export default function reverseString (normalText) {

    const splitString = normalText.split("");

    const reverseArray = splitString.reverse();

    return reverseArray.join("");
}