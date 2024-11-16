import account from "./assets/account.svg";
import trash from "./assets/trash.svg";

export default function Contact() {
  return (
    <section className="flex w-[980px] max-w-[980px] mx-auto gap-4 items-start h-full">
      <form className="flex flex-col w-1/3 gap-2 shadow-lg p-4 rounded-lg">
        <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">Add New Contact</h3>
        <label className="flex flex-col gap-2 text-neutral-500">
          Contact Name:
          <input
            type="text"
            name="contactName"
            placeholder="Your Name ..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Phone:
          <input
            type="text"
            name="phone"
            placeholder="Phone Number..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Email:
          <input
            type="text"
            name="email"
            placeholder="Email..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Address:
          <input
            type="text"
            name="address"
            placeholder="Address..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg mt-2">
          Create
        </button>
      </form>

      {/** the Table of Content Goes here */}
      <section className="flex flex-col gap-2 w-2/3 overflow-y-auto p-4 shadow-lg min-h-[100px] rounded-lg ">
        <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">Contact List</h3>

        <div className="flex item-center justify-between gap-2 bg-blue-100 rounded-xl p-2">
          <div className="flex w-full justify-between items-center">
            <span className="flex gap-1 items-center">
              <img src={account} className="h-10 w-10"></img>
              <p className="text-blue-800">John Lenon</p>
            </span>
            <p className="text-blue-800">+91921991025</p>
            <p className="text-blue-800">John@rocket.com</p>
            <p className="text-blue-800 w-1/4">89 Ave. florida</p>
          </div>

          <button>
            <img src={trash} className="w-6 h-6"></img>
          </button>
        </div>

        <div className="flex item-center justify-between gap-2 bg-blue-100 rounded-xl p-2">
          <div className="flex w-full justify-between items-center">
            <span className="flex gap-1 items-center">
              <img src={account} className="h-10 w-10"></img>
              <p className="text-blue-800">John Lenon</p>
            </span>
            <p className="text-blue-800">+91921991025</p>
            <p className="text-blue-800">John@rocket.com</p>
            <p className="text-blue-800 w-1/4">89 Ave. florida</p>
          </div>

          <button>
            <img src={trash} className="w-6 h-6"></img>
          </button>
        </div>
      </section>
    </section>
  );
}
