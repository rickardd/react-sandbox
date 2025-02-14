import ReactMarkdown from "react-markdown";

const markdownToDo = `
- Make an example of context and the useOutletContext() hook <Outlet context={{ hello: "world" }} />
- Also make an example of a sidebar menu routes that changes depending on the current route e.g
- example of the isActive argument in the style and className props. e.g <Route path="foo" className=((isActive)=> isActive ? "": )
- Make an example of the property state={{foo: bar}} which allows you to pass states between routes.
  - Question, is this a state or an object. Can each route add to the state and it will be remembered. Will the state ever clear, is so, when?
- Make an example of the replace prop. it means that it replaces the current route in history so when you navigate back you'll never land on current page again. Might be good for forms etc.
- Add examples to disable active link.
- Make an example with route using arrays arrays :30min in video https://www.youtube.com/watch?v=Ul3y1LXxzdU&t=622s
`;

const markdownContent = `
- Outlet
- isPending
- NavLink vs Link
  - Link does not provide any built-in way to determine if the link is active or not. You would need to implement your own logic to style it based on the current route.
  - NavLink provides built-in support for active link styling. It automatically applies an active class to the link when the route it points to is active.
- Custom Styles: You can use the style or className prop to apply styles conditionally based on whether the link is active. The style prop can accept a function that receives an object with an isActive property.
`;

export const ReactRouterDocs = () => {
  return (
    <>
      <h3>ToDo</h3>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginBottom: "12px" }}>
        <ReactMarkdown>{markdownToDo}</ReactMarkdown>
      </div>
      <h3>Docs</h3>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};
