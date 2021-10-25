const doSomeThingVeryCool = (someTHing = "This is not cool.") => {
  const doSomeThing = someTHing;
  console.log("doSomeThing", doSomeThing);
};

doSomeThingVeryCool(); // output This is not cool.

doSomeThingVeryCool("This is cool."); // output This is cool.
