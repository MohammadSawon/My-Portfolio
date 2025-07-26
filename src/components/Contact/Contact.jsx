import "./contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea name="" id="" placeholder="message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
};
