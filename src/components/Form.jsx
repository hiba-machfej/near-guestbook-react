import { useState } from 'react';

const Form = ({ addMessage }) => {
  const [form, setForm] = useState({
    text: '',
    amount: 0
  });
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addMessage({ ...form });
  };

  return (
    <>
      <h2 className="w-full text-2xl m-4  text-center">Add your message</h2>
      <form className="max-w-7xl flex justify-center">
        <input placeholder="Message" type="text" name="text" value={form.text} onChange={e => handleChange(e)} className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-dark-gray rounded-md p-1" />
        <input
          type="number"
          placeholder="0"
          name="amount"
          value={form.amount}
          onChange={e => handleChange(e)}
          className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border border-dark-gray 
          rounded-md p-1 ml-20"
        />
        <button className="rounded-md ml-10 px-10 bg-gray-200" onClick={e => handleSubmit(e)}>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
