export const Input = ({ user }) => {
  const inputValue = [
    {
      id: "1",
      name: "name",
      type: "radio",
      text: "text",
    },
    {
      id: "2",
      name: "name",
      type: "radio",
      text: "text",
    },
    {
      id: "3",
      name: "name",
      type: "radio",
      text: "text",
    },
    {
      id: "4",
      name: "name",
      type: "radio",
      text: "text",
    },
  ];

  const onclickSelect = (id: string) => {};

  return (
    <div>
      <ul>
        {inputValue.map((item) => (
          <li key={item.id} onClick={() => onclickSelect(item.id)}>
            <input type={item.type} id={item.id} name={item.name} />
            <label htmlFor="">{item.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};
