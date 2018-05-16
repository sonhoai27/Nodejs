const hello = () => {
    console.log("Hello")
}
const myClass = {
    name: "Son",
    age: 22,
    class: hello
}
module.exports = {
    hello,
    myClass
}