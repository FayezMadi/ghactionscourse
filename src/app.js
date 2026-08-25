function greet(name)
{
    return `Hello, ${name}!`;
} // <--- Close the greet function here

// Now these run when the file is loaded by Node:
module.exports = greet;
//Added new commit to check things
//Added new commit to check things
//Added new commit to check things

if (require.main === module)
{
    console.log(greet("World"));
}