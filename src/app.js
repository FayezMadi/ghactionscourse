function greet(name)
{
    return `Hello, ${name}!`;
} // <--- Close the greet function here

// Now these run when the file is loaded by Node:
module.exports = greet;

//if (require.main === module)
//{
//    console.log(greet("World"));
//}